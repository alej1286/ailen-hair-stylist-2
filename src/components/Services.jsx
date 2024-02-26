/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Storage } from "@aws-amplify/storage";
import { DataStore } from "aws-amplify";
import { Service } from "../models";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import { useRolReposStore } from './../store/RolRepo';

import {
  Card,
  // VisuallyHidden,
  Button,
  Flex,
  //Text,
  //Divider,
  //Image,
  //Loader,
  //Icon,
} from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import {
  AddService,
  EditService,
  ServiceCardCollection,
  ServiceCard,
} from "../ui-components";

/* try {
  const src = await Storage.get(key, { level, track, identityId });
  logger.debug('Storage image get', src);
  return src;
} catch (error) {
  throw new Error(error);
} */

/* 
function getFileProperties(key) {
  try {
    //const result = await Storage.getProperties(key);
    //console.log('File Properties ', result);
    
    const src =  Storage.get(key,{level:"public"}).then(result => {
      console.log("result:",result);
      
    })
    .catch(err => console.log("err:",err));
    console.log("src:",src);
    return src;
  } catch (error) {
    console.log('Error ', error);
  }
} */

function Services() {
  const [isAddingService, setIsAddingService] = useState(true);
  const [isEditingService, setIsEditingService] = useState(false);
  const [serviceToUpdate, setServiceToUpdate] = useState(null);
  const [imagePath, setImagePath] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const { rol } = useRolReposStore();

  const onSuccess = async ({ key }) => {
    //console.log(`Key: ${key}`);
    let src;
    const imageSrc = await Storage.get(key, { level: "public" }).then(
      (result) => {
        //console.log("key:",key);

        /* const currentService = {...serviceToUpdate};
      currentService.imagePath = result;
       */
        //currentService.imagePath = `https://ailen-hair-stylist-2-storage-db7b9f38120828-staging.s3.amazonaws.com/public/${key}`;
        //setServiceToUpdate({...serviceToUpdate,  imagePath:`https://ailen-hair-stylist-2-storage-db7b9f38120828-staging.s3.amazonaws.com/public/${key}`});
        //setServiceToUpdate(currentService);
        //setServiceToUpdate(currentService);
        //setImageT(result);

        if (isEditingService) {
          //updatedService(result);
          updatedService(key);
        }

        if (isAddingService) {
          //setImagePath(result);
          setImagePath(key);
        }

        src = result;
      },
    );
    console.log("imageSrc:", imageSrc);
    //console.log("src:",src);
  };
  const updatedService = async (imagePath) => {
    const updatedService = await DataStore.save(
      Service.copyOf(serviceToUpdate, (updated) => {
        updated.imagePath = imagePath;
        updated.price = serviceToUpdate.price;
        updated.type = serviceToUpdate.type;
      }),
    );
    setServiceToUpdate(updatedService);
  };
  useEffect(() => {
    checkUser();
    //console.log(rol);
  }, []);
  const [user, setUser] = useState({});
  const [update, setUpdate] = useState(false);
  const [updateServices, setUpdateServices] = useState();
  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
      console.log(userInfo);//checking user
    } catch (err) {
      console.log("error: ", err);
    }
  }
  const addServiceOverrides = {
    Vector: {
      onClick: () => {
        setIsAddingService(false);
      },
    },
    UploadNewImage: {
      children: (
        <StorageManager
          acceptedFileTypes={["image/*"]}
          accessLevel="public"
          maxFileCount={1}
          components={{
            Container({ children }) {
              return <Card variation="elevated">{children}</Card>;
            },
            DropZone({ children, displayText, inDropZone, ...rest }) {
              return (
                <Flex
                  alignItems="center"
                  direction="column"
                  padding="medium"
                  backgroundColor={inDropZone ? "brand.primary.10" : ""}
                  {...rest}
                >
                  {/* <Text>Drop files here</Text>
              <Divider size="small" label="or" maxWidth="10rem" /> */}
                  {children}
                </Flex>
              );
            },
            FilePicker({ onClick }) {
              return (
                <Button variation="primary" onClick={onClick}>
                  Browse Files
                </Button>
              );
            },
            FileList({ files, onCancelUpload, onDeleteUpload }) {
              return <></>;
            },
          }}
          onUploadSuccess={onSuccess}
        />
      ),
    },
    PriceTextField: {
      onChange: (event) => {
        setPrice(event.target.value);
      },
      value: price,
    },
    TypeTextField: {
      onChange: (event) => {
        setType(event.target.value);
      },
      value: type,
    },
    SaveButton: {
      onClick: async () => {
        const newService = await DataStore.save(
          new Service({
            imagePath,
            price,
            type,
          }),
        );
      },
    },
    AddService: {
      width: "400px",
      height: "600px",
    },
  };

  const editServiceOverrides = {
    Vector: {
      onClick: () => {
        setIsEditingService(false);
      },
    },
    UploadNewImage: {
      children: (
        <StorageManager
          acceptedFileTypes={["image/*"]}
          accessLevel="public"
          maxFileCount={1}
          components={{
            Container({ children }) {
              return <Card variation="elevated">{children}</Card>;
            },
            DropZone({ children, displayText, inDropZone, ...rest }) {
              return (
                <Flex
                  alignItems="center"
                  direction="column"
                  padding="medium"
                  backgroundColor={inDropZone ? "brand.primary.10" : ""}
                  {...rest}
                >
                  {/* <Text>Drop files here</Text>
              <Divider size="small" label="or" maxWidth="10rem" /> */}
                  {children}
                </Flex>
              );
            },
            FilePicker({ onClick }) {
              return (
                <Button variation="primary" onClick={onClick}>
                  Browse Files
                </Button>
              );
            },
            FileList({ files, onCancelUpload, onDeleteUpload }) {
              return <></>;
            },
          }}
          onUploadSuccess={onSuccess}
        />
      ),
    },
    EditService: {
      width: "400px",
      height: "600px",
    },
  };
  return (
    <div className="mt-24">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      {/* {user.username === 'alej1286' && update === false ? <div className="w-1/5"><PricesForm /></div> : user.username}  
      {user.username === 'alej1286' && update === true ? <div className="w-1/5"><PricesFormUpdate services={updateServices} 
      
      /></div> : user.username} 
    <PricesCollection overrideItems={({ item }) => ({
        onClick: () => {
          setUpdate(true);
          setUpdateServices(item);}
      })}/> */}
      {/* {user.username === "alej1286" && isAddingService && (
        <AddService overrides={addServiceOverrides} />
      )}

      {user.username === "alej1286" && isEditingService && (
        <EditService
          overrides={editServiceOverrides}
          service={serviceToUpdate}
        />
      )} */}
      {rol === "Administrator" && isAddingService && (
        <AddService overrides={addServiceOverrides} />
      )}

      {rol === "Administrator" && isEditingService && (
        <EditService
          overrides={editServiceOverrides}
          service={serviceToUpdate}
        />
      )}

      <ServiceCardCollection
        isPaginated
        itemsPerPage={6}
        overrideItems={({ item }) => {
          return {
            overrides: {
              imageFrame: {
                children: (
                  <Flex
                    gap="10px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    children={
                      <StorageImage
                        alt={item.imagePath}
                        imgKey={item.imagePath}
                        accessLevel="public"
                      />
                    }
                  />
                ),
              },
              "Frame 418": {
                display: user.username === "alej1286" ? "flex" : "none",
              },
              EditButton: {
                onClick: () => {
                  setIsEditingService(true);
                  setServiceToUpdate(item);
                } /* ,
            isDisabled: user.username === 'alej1286'? false : true */,
              } /* ,
          "DeleteButton":{
            isDisabled: user.username === 'alej1286'? false : true
          } */,
            },
          };
        }}
      />
    </div>
  );
}

export default Services;
