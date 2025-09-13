import React, { useState, useCallback, useMemo } from "react";
import { StorageManager, StorageImage } from "@aws-amplify/ui-react-storage";
import { DataStore } from "aws-amplify";
import { Service } from "../models";
import { useRolReposStore } from "../store/RolRepo";
import {
  Card,
  Button,
  Flex,
  Heading,
  Text,
  Divider,
} from "@aws-amplify/ui-react";
import {
  AddService,
  EditService,
  ServiceCardCollection,
} from "../ui-components";
import "@aws-amplify/ui-react/styles.css";

/* Storage utility functions - kept for future reference
try {
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

/**
 * Services Component - Hair salon services management
 * Optimized for SEO, responsive design and best practices
 */
function Services() {
  // Component state - optimized for performance
  const [isAddingService, setIsAddingService] = useState(false);
  const [isEditingService, setIsEditingService] = useState(false);
  const [serviceToUpdate, setServiceToUpdate] = useState(null);
  const [imagePath, setImagePath] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { rol } = useRolReposStore();
  const isAdmin = useMemo(() => rol === "Administrator", [rol]);

  // Optimized function to update services
  const updatedService = useCallback(
    async (imagePath) => {
      if (!serviceToUpdate) return;

      try {
        setLoading(true);
        const updated = await DataStore.save(
          Service.copyOf(serviceToUpdate, (item) => {
            item.imagePath = imagePath;
            item.price = serviceToUpdate.price;
            item.type = serviceToUpdate.type;
          })
        );
        setServiceToUpdate(updated);
        setIsEditingService(false);
      } catch (err) {
        setError("Error updating service");
        console.error("Update error:", err);
      } finally {
        setLoading(false);
      }
    },
    [serviceToUpdate]
  );

  // Optimized callback for image upload handling
  const onSuccess = useCallback(
    async ({ key }) => {
      try {
        setLoading(true);
        setError(null);

        //console.log(`Key: ${key}`);

        /* Service update logic - comments kept for reference
      const currentService = {...serviceToUpdate};
      currentService.imagePath = result;
      currentService.imagePath = `https://ailen-hair-stylist-2-storage-db7b9f38120828-staging.s3.amazonaws.com/public/${key}`;
      setServiceToUpdate({...serviceToUpdate,  imagePath:`https://ailen-hair-stylist-2-storage-db7b9f38120828-staging.s3.amazonaws.com/public/${key}`});
      setServiceToUpdate(currentService);
      setImageT(result); */

        if (isEditingService) {
          //updatedService(result);
          await updatedService(key);
        }

        if (isAddingService) {
          //setImagePath(result);
          setImagePath(key);
        }

        //console.log("imageSrc:", imageSrc);
        //console.log("src:",src);
      } catch (err) {
        setError("Error uploading image");
        console.error("Upload error:", err);
      } finally {
        setLoading(false);
      }
    },
    [isEditingService, isAddingService, updatedService]
  );

  // Function to save new service
  const saveNewService = useCallback(async () => {
    if (!imagePath || !price || !type) {
      setError("Please complete all fields");
      return;
    }

    try {
      setLoading(true);
      await DataStore.save(new Service({ imagePath, price, type }));

      // Clear form
      setImagePath("");
      setPrice("");
      setType("");
      setIsAddingService(false);
      setError(null);
    } catch (err) {
      setError("Error saving service");
      console.error("Save error:", err);
    } finally {
      setLoading(false);
    }
  }, [imagePath, price, type]);

  // Legacy states kept as comments for reference
  /* const [user, setUser] = useState({});
  const [update, setUpdate] = useState(false);
  const [updateServices, setUpdateServices] = useState();
  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
      console.log(userInfo); //checking user
    } catch (err) {
      console.log("error: ", err);
    }
  } */

  // Reusable StorageManager components - optimized for performance
  const storageManagerComponents = useMemo(
    () => ({
      Container({ children }) {
        return (
          <Card
            variation="elevated"
            className="shadow-lg border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors duration-300"
          >
            {children}
          </Card>
        );
      },
      DropZone({ children, inDropZone, ...rest }) {
        return (
          <Flex
            alignItems="center"
            direction="column"
            padding="xl"
            className={`rounded-lg transition-all duration-300 ${
              inDropZone
                ? "bg-blue-50 border-blue-400 scale-105"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
            {...rest}
          >
            {/* <Text>Drop files here</Text>
          <Divider size="small" label="or" maxWidth="10rem" /> */}
            <Text className="text-gray-600 mb-2">Drag your image here</Text>
            <Divider size="small" label="or" className="my-2" />
            {children}
          </Flex>
        );
      },
      FilePicker({ onClick }) {
        return (
          <Button
            variation="primary"
            onClick={onClick}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            📁 Select Image
          </Button>
        );
      },
      FileList() {
        return null;
      },
    }),
    []
  );

  // Optimized configuration for adding services
  const addServiceOverrides = useMemo(
    () => ({
      Vector: {
        onClick: () => setIsAddingService(false),
      },
      UploadNewImage: {
        children: (
          <StorageManager
            acceptedFileTypes={["image/*"]}
            accessLevel="public"
            maxFileCount={1}
            components={storageManagerComponents}
            onUploadSuccess={onSuccess}
          />
        ),
      },
      PriceTextField: {
        onChange: (e) => setPrice(e.target.value),
        value: price,
        placeholder: "e.g. $50",
        className:
          "border-2 border-gray-300 focus:border-blue-500 rounded-lg transition-colors duration-300",
      },
      TypeTextField: {
        onChange: (e) => setType(e.target.value),
        value: type,
        placeholder: "e.g. Cut & Style",
        className:
          "border-2 border-gray-300 focus:border-blue-500 rounded-lg transition-colors duration-300",
      },
      SaveButton: {
        onClick: saveNewService,
        isLoading: loading,
        className:
          "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg",
      },
      AddService: {
        className:
          "w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl border border-gray-200",
      },
    }),
    [price, type, onSuccess, saveNewService, loading, storageManagerComponents]
  );

  // Optimized configuration for editing services
  const editServiceOverrides = useMemo(
    () => ({
      Vector: {
        onClick: () => setIsEditingService(false),
      },
      UploadNewImage: {
        children: (
          <StorageManager
            acceptedFileTypes={["image/*"]}
            accessLevel="public"
            maxFileCount={1}
            components={storageManagerComponents}
            onUploadSuccess={onSuccess}
          />
        ),
      },
      EditService: {
        className:
          "w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl border border-gray-200",
      },
    }),
    [onSuccess, storageManagerComponents]
  );

  // Optimized configuration for service cards
  const serviceCardOverrides = useCallback(
    ({ item }) => ({
      overrides: {
        imageFrame: {
          children: (
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="relative overflow-hidden rounded-lg group"
            >
              <StorageImage
                alt={`Hair salon service: ${
                  item.type || "Service image"
                }`}
                imgKey={item.imagePath}
                accessLevel="public"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Flex>
          ),
        },
        "Frame 418": {
          /* display: user.username === "alej1286" ? "flex" : "none", */
          display: isAdmin ? "flex" : "none",
          className: "absolute top-2 right-2 z-10",
        },
        EditButton: {
          onClick: () => {
            setIsEditingService(true);
            setServiceToUpdate(item);
          },
          className:
            "bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-all duration-300",
          /* isDisabled: user.username === 'alej1286'? false : true */
        },
        /* "DeleteButton":{
        isDisabled: user.username === 'alej1286'? false : true
      } */
      },
    }),
    [isAdmin]
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - SEO Optimized */}
        <header className="text-center mb-12">
          <Heading
            level={1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
          >
            Our Hair Salon Services
          </Heading>
          <Text className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our wide range of professional hair styling and beauty services.
            Each service is designed to enhance your natural beauty and boost your confidence.
          </Text>

          {/* Breadcrumb for SEO */}
          <nav aria-label="Breadcrumb" className="mt-4">
            <Text className="text-sm text-gray-500">
              Home → Services → Hair Salon
            </Text>
          </nav>
        </header>

        {/* Admin Controls */}
        {isAdmin && (
          <section className="mb-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg">
              <Flex
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                wrap="wrap"
                gap="1rem"
              >
                <div>
                  <Heading
                    level={3}
                    className="text-xl font-semibold text-gray-800 mb-2"
                  >
                    Admin Panel
                  </Heading>
                  <Text className="text-gray-600">
                    Manage your salon services
                  </Text>
                </div>
                <Button
                  onClick={() => setIsAddingService(true)}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  ✨ Add New Service
                </Button>
              </Flex>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <Text className="text-red-700">⚠️ {error}</Text>
                </div>
              )}
            </Card>
          </section>
        )}

        {/* Modal Components with Suspense for better performance */}
        <React.Suspense
          fallback={
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          }
        >
          {/* Legacy functionality comments maintained
          {user.username === 'alej1286' && update === false ? <div className="w-1/5"><PricesForm /></div> : user.username}  
          {user.username === 'alej1286' && update === true ? <div className="w-1/5"><PricesFormUpdate services={updateServices} /></div> : user.username} 
          <PricesCollection overrideItems={({ item }) => ({
            onClick: () => {
              setUpdate(true);
              setUpdateServices(item);}
          })}/> */}

          {/* Admin modals with legacy comments
          {user.username === "alej1286" && isAddingService && (
            <AddService overrides={addServiceOverrides} />
          )}
          {user.username === "alej1286" && isEditingService && (
            <EditService overrides={editServiceOverrides} service={serviceToUpdate} />
          )} */}

          {isAdmin && isAddingService && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <AddService overrides={addServiceOverrides} />
              </div>
            </div>
          )}

          {isAdmin && isEditingService && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <EditService
                  overrides={editServiceOverrides}
                  service={serviceToUpdate}
                />
              </div>
            </div>
          )}
        </React.Suspense>

        {/* Services Grid - SEO and responsive optimized */}
        <section>
          <ServiceCardCollection
            isPaginated
            itemsPerPage={6}
            overrideItems={serviceCardOverrides}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          />
        </section>

        {/* Schema.org structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            name: "Ailen Hair Stylist",
            description: "Professional hair styling and beauty services",
            url: typeof window !== "undefined" ? window.location.href : "",
            serviceType: "Hair Styling Services",
            areaServed: "United States",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Hair Salon Services",
              itemListElement: [],
            },
          })}
        </script>
      </div>
    </main>
  );
}

// Export with displayName for better debugging
Services.displayName = "Services";

export default Services;