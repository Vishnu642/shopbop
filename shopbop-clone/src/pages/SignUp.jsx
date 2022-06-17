import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
    <Box w="500px" h="500px" border="1px solid black" boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" >
      <Flex
      cursor="pointer"
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize="30px" textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize="20px" color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel fontSize="20px" >First Name</FormLabel>
                    <Input w="200px" height="50px" border="1px solid black" type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel fontSize="20px" >Last Name</FormLabel>
                    <Input w="200px" height="50px" border="1px solid black" type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel fontSize="20px" >Email address</FormLabel>
                <Input w="400px" height="50px" border="1px solid black"  type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel fontSize="20px" >Password</FormLabel>
                <InputGroup>
                  <Input w="400px" height="50px" border="1px solid black" type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg='blue'
                  color='white'
                  h="50px"
                  cursor="pointer"
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color='blue' cursor="pointer" >Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </Box>
    );
  }