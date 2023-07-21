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
} from '@aws-amplify/ui-react'
import { BsTwitter, BsJournal, BsYoutube } from 'react-icons/bs'
import { API } from 'aws-amplify'
import { createCandidate } from '../graphql/mutations'
//import { InstagramEmbed } from 'react-social-media-embed';


const IconEmail = () => {
  return (
    <Icon
      pathData="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
      ariaLabel=""
    />
  );
};
function Contact({ signOut }) {
  const { tokens } = useTheme()

	const handleFormSubmit = async (e) => {
		e.preventDefault()
		const name = e.target.name.value
		const email = e.target.email.value
		const message = e.target.message.value

		await API.graphql({
			query: createCandidate,
			variables: {
				input: {
					name,
					email,
					message,
				},
			},
		})
    




	}
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh" className='mt-24'>
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
						
            {/* <InstagramEmbed url='https://www.instagram.com/p/Ct-HZtfsIwc/'/> */}
            
          </Flex>
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
      <Button onClick={signOut}>Sign Out</Button>
		</Flex>
  );
}

//export default withAuthenticator(Contact);
export default Contact;
