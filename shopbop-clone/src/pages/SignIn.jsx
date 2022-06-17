import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  
  export const SimpleCard=()=> {
    return (
      <Box w="500px" h="450px" borderRadius="10px" margin="auto"  boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px" >
      <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize="30px">Sign in to your account</Heading>
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
              <FormControl id="email">
                <FormLabel fontSize="20px" >Email address</FormLabel>
                <Input w="400px" height="50px" border="1px solid black" type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel fontSize="20px" >Password</FormLabel>
                <Input  w="400px" height="50px" border="1px solid black" type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox fontSize="15px" >Remember me</Checkbox>
                  <Link to="/signup" fontSize="15px" color="blue">Forgot password?</Link>
                </Stack>
               <Link to="/" > <Button
                  bg="blue"
                  color='white'
                  w="400px"
                    h="50px"
                    margin="auto"
                    cursor="pointer"
                  >
                  Sign in
                </Button></Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </Box>
    );
  }