import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  View,
  useTheme,
  TextField,
  TextAreaField,
  FieldGroupIcon,
  Icon,
  Link,
} from "@aws-amplify/ui-react";
import { BsTwitter, BsJournal, BsYoutube, BsCheckCircle, BsExclamationTriangle } from "react-icons/bs";
import { API } from "aws-amplify";
import { createCandidate } from "../graphql/mutations";
import SEO from './SEO';

const IconEmail = () => {
  return (
    <Icon
      pathData="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
      ariaLabel=""
    />
  );
};
function Contact({ signOut }) {
  const { tokens } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required';
        } else if (value.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters';
        } else {
          delete newErrors.message;
        }
        break;
      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate all fields
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isMessageValid = validateField('message', formData.message);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      await API.graphql({
        query: createCandidate,
        variables: {
          input: {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          },
        },
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <SEO page="contact" />
      <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      className="mt-24"
    >
      <Card
        padding={{ large: tokens.space.xxxl }}
        variation="elevated"
        borderRadius={tokens.radii.medium}
        backgroundColor={tokens.colors.blue[90]}
      >
        <Flex
          direction={{ base: "column", large: "row" }}
          justifyContent={{ large: "center" }}
          gap={tokens.space.xl}
        >
          <Flex direction={"column"} justifyContent="space-between">
            {/* <InstagramEmbed url='https://www.instagram.com/p/Ct-HZtfsIwc/'/> */}
          </Flex>
          <Flex direction={"column"} justifyContent="space-between">
            <View style={{ marginBottom: tokens.space.small }}>
            {/* <h1 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-5">
            Contact Us
            </h1> */}
              <Heading color={tokens.colors.white} level={3}>
                Contact Us
              </Heading>
              <Text color={tokens.colors.neutral[60]}>
                If you have any questions or would like to schedule a
                consultation with me, please do not hesitate to do it
              </Text>
            </View>
            <ButtonGroup
              style={{ marginBottom: tokens.space.small }}
              color={tokens.colors.neutral[20]}
              direction={"column"}
              variation="link"
            >
              <Button
                color={tokens.colors.neutral[40]}
                justifyContent={"start"}
                gap="1rem"
              >
                <a href="tel:+17867949162"> +1 (786) 794 9162 </a>
              </Button>
              <Button
                color={tokens.colors.neutral[40]}
                justifyContent={"start"}
                gap="1rem"
              >
                <IconEmail color={tokens.colors.blue[40]} />{" "}
                <a href={"mailto:ailenmejiastravieso@gmail.com"}>
                  ailenmejiastravieso@gmail.com
                </a>
              </Button>
              <Button
                color={tokens.colors.neutral[40]}
                justifyContent={"start"}
                gap="1rem"
              >
                {" "}
                Florida, United States
              </Button>
            </ButtonGroup>
            <Flex style={{ marginLeft: tokens.space.large }}>
              <Link
                href="https://twitter.com/"
                color={tokens.colors.blue[20]}
                fontSize={"2rem"}
              >
                <Icon ariaLabel="twitter" as={BsTwitter} />
              </Link>
              <Link
                href="https://youtube.com/"
                color={tokens.colors.red[60]}
                fontSize={"2rem"}
              >
                <Icon ariaLabel="youtube" as={BsYoutube} />
              </Link>
              <Link
                href="https://blog.blog.com"
                color={tokens.colors.green[40]}
                fontSize={"2rem"}
              >
                <Icon ariaLabel="blog" as={BsJournal} />
              </Link>
            </Flex>
          </Flex>
          <View
            width={{ base: "70vw", large: "400px" }}
            backgroundColor={tokens.colors.white}
            padding={tokens.space.medium}
            borderRadius={tokens.radii.medium}
          >
            <Flex as="form" direction={"column"} onSubmit={handleFormSubmit}>
              {submitStatus === 'success' && (
                <View
                  backgroundColor={tokens.colors.green[10]}
                  borderColor={tokens.colors.green[60]}
                  borderWidth={tokens.borderWidths.small}
                  borderRadius={tokens.radii.small}
                  padding={tokens.space.medium}
                  style={{ marginBottom: tokens.space.medium }}
                >
                  <Flex alignItems="center" gap={tokens.space.xs}>
                    <Icon as={BsCheckCircle} color={tokens.colors.green[80]} />
                    <Text color={tokens.colors.green[90]}>Message sent successfully! We'll get back to you soon.</Text>
                    <Button
                      size="small"
                      variation="link"
                      onClick={() => setSubmitStatus(null)}
                      style={{ marginLeft: 'auto' }}
                    >
                      ×
                    </Button>
                  </Flex>
                </View>
              )}
              
              {submitStatus === 'error' && (
                <View
                  backgroundColor={tokens.colors.red[10]}
                  borderColor={tokens.colors.red[60]}
                  borderWidth={tokens.borderWidths.small}
                  borderRadius={tokens.radii.small}
                  padding={tokens.space.medium}
                  style={{ marginBottom: tokens.space.medium }}
                >
                  <Flex alignItems="center" gap={tokens.space.xs}>
                    <Icon as={BsExclamationTriangle} color={tokens.colors.red[80]} />
                    <Text color={tokens.colors.red[90]}>Failed to send message. Please try again.</Text>
                    <Button
                      size="small"
                      variation="link"
                      onClick={() => setSubmitStatus(null)}
                      style={{ marginLeft: 'auto' }}
                    >
                      ×
                    </Button>
                  </Flex>
                </View>
              )}

              <TextField
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                hasError={!!errors.name}
                errorMessage={errors.name}
                innerStartComponent={
                  <FieldGroupIcon ariaLabel=""></FieldGroupIcon>
                }
              />
              
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@email.com"
                type="email"
                hasError={!!errors.email}
                errorMessage={errors.email}
                innerStartComponent={
                  <FieldGroupIcon ariaLabel="">
                    <IconEmail />
                  </FieldGroupIcon>
                }
              />
              
              <TextAreaField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message (minimum 10 characters)"
                hasError={!!errors.message}
                errorMessage={errors.message}
                rows={4}
              />
              
              <View style={{ marginTop: tokens.space.medium }}>
                <Button 
                  type="submit" 
                  variation="primary"
                  isDisabled={isSubmitting || Object.keys(errors).length > 0}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </View>
            </Flex>
          </View>
        </Flex>
      </Card>
      {/* <div id="contact" className="bg-gray-100 w-full min-h-screen p-2 flex items-center">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              
              
              <ul className="text-lg text-gray-700">
              <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
         
          
         <img
           src="https://ailenhairstylistweb.s3.amazonaws.com/salon-hair-stylist-5331382_1280.png"
           alt="Contact"
           className="w-full h-auto object-cover rounded-tl-2xl rounded-br-2xl"
         />
       </div>
  
                <li className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                  <InstagramEmbed url='https://www.instagram.com/p/Ct-HZtfsIwc/'/>
                
                </li>
  
              </ul>
  
  
            </div>
            <div className="mt-12 sm:mt-16 md:mt-0">
            <Flex justifyContent="center" alignItems="center" height="100vh">
        <Card
          padding={{ large: tokens.space.xxxl }}
          variation="elevated"
          borderRadius={tokens.radii.medium}
          backgroundColor={tokens.colors.blue[90]}
        >
          <Flex
            direction={{ base: 'column', large: 'row' }}
            justifyContent={{ large: 'center' }}
            gap={tokens.space.xl}
          >
            <Flex direction={'column'} justifyContent="space-between">
              <View style={{ marginBottom: tokens.space.small }}>
                <Heading color={tokens.colors.white} level={3}>
                Contact Us
                </Heading>
                <Text color={tokens.colors.neutral[60]}>
                
              If you have any questions or would like to schedule a consultation with me, please do not hesitate to do it
              
                </Text>
              </View>
              <ButtonGroup
                style={{ marginBottom: tokens.space.small }}
                color={tokens.colors.neutral[20]}
                direction={'column'}
                variation="link"
              >
                <Button
                  color={tokens.colors.neutral[40]}
                  justifyContent={'start'}
                  gap="1rem"
                >
                  <a href="tel:+17867949162"> +1 (786) 794 9162 </a>
                </Button>
                <Button
                  color={tokens.colors.neutral[40]}
                  justifyContent={'start'}
                  gap="1rem"
                >
                  <IconEmail color={tokens.colors.blue[40]} />{' '}
                  <a href={"mailto:ailenmejiastravieso@gmail.com"}>ailenmejiastravieso@gmail.com</a>
                </Button>
                <Button
                  color={tokens.colors.neutral[40]}
                  justifyContent={'start'}
                  gap="1rem"
                > Florida, United
                  States
                </Button>
              </ButtonGroup>
              <Flex style={{ marginLeft: tokens.space.large }}>
                <Link
                  href="https://twitter.com/"
                  color={tokens.colors.blue[20]}
                  fontSize={'2rem'}
                >
                  <Icon ariaLabel="twitter" as={BsTwitter} />
                </Link>
                <Link
                  href="https://youtube.com/"
                  color={tokens.colors.red[60]}
                  fontSize={'2rem'}
                >
                  <Icon ariaLabel="youtube" as={BsYoutube} />
                </Link>
                <Link
                  href="https://blog.blog.com"
                  color={tokens.colors.green[40]}
                  fontSize={'2rem'}
                >
                  <Icon ariaLabel="blog" as={BsJournal} />
                </Link>
              </Flex>
            </Flex>
            <View
              width={{ base: '70vw', large: '400px' }}
              backgroundColor={tokens.colors.white}
              padding={tokens.space.medium}
              borderRadius={tokens.radii.medium}
            >
              <Flex as="form" direction={'column'} onSubmit={handleFormSubmit}>
                <TextField
                  required
                  label="Your Name"
                  name="name"
                  placeholder="Your name"
                  innerStartComponent={
                    <FieldGroupIcon ariaLabel="">
                      
                    </FieldGroupIcon>
                  }
                />
                <TextField
                  label="Email"
                  name="email"
                  placeholder="you@email.com"
                  type={'email'}
                  required
                  innerStartComponent={
                    <FieldGroupIcon ariaLabel="">
                      
                      <IconEmail />
                    </FieldGroupIcon>
                  }
                />
                <TextAreaField
                  required
                  label="Message"
                  name="message"
                  placeholder="Enter your message"
                />
                <View style={{ marginTop: tokens.space.medium }}>
                  <Button type="submit" variation="primary">
                    Send Message
                  </Button>
                </View>
              </Flex>
            </View>
          </Flex>
        </Card>
      </Flex>
          </div>
        </div>
       </div>
      </div> */}
      {/* <Button onClick={signOut}>Sign Out</Button> */}
      </Flex>
    </>
  );
}

//export default withAuthenticator(Contact);
export default Contact;
