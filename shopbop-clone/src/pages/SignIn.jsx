import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export const SimpleCard=()=> {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize="30px">Sign in to your account</Heading>
            <Text fontSize="20px" color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
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
                  <Link fontSize="15px" color="blue">Forgot password?</Link>
                </Stack>
                <Button
                  bg="blue"
                  color='white'
                    h="50px"
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }