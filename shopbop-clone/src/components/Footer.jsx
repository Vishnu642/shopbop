import {
    Box,
    Container,
    Link,
    Stack,
    Text,
    Flex,
    Tag,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
  
import "./Footer.css"
  

  

  export const Footer=()=>{
    return(
        <Box
        
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
        <Box >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <Flex fontSize='13px' className='footer-box' >
          <Stack align={'flex-start'}>
            <Heading>Product</Heading>
            <Link textDecoration='none' color='black' href={'#'}>Overview</Link>
            <Stack direction={'row'} align={'center'} spacing={6}>
              <Link textDecoration='none' color='black' href={'#'}>Features</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                New
              </Tag>
            </Stack>
            <Link textDecoration='none' color='black' href={'#'}>Tutorials</Link>
            <Link textDecoration='none' color='black' href={'#'}>Pricing</Link>
            <Link textDecoration='none' color='black' href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Company</Heading>
            <Link textDecoration='none' color='black' href={'#'}>About Us</Link>
            <Link textDecoration='none' color='black' href={'#'}>Press</Link>
            <Link textDecoration='none' color='black' href={'#'}>Careers</Link>
            <Link textDecoration='none' color='black' href={'#'}>Contact Us</Link>
            <Link textDecoration='none' color='black' href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Legal</Heading>
            <Link textDecoration='none' color='black' href={'#'}>Cookies Policy</Link>
            <Link textDecoration='none' color='black' href={'#'}>Privacy Policy</Link>
            <Link textDecoration='none' color='black' href={'#'}>Terms of Service</Link>
            <Link textDecoration='none' color='black' href={'#'}>Law Enforcement</Link>
            <Link textDecoration='none' color='black' href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Follow Us</Heading>
            <Link textDecoration='none' color='black' href={'#'}>Facebook</Link>
            <Link textDecoration='none' color='black' href={'#'}>Twitter</Link>
            <Link textDecoration='none' color='black' href={'#'}>Dribbble</Link>
            <Link textDecoration='none' color='black' href={'#'}>Instagram</Link>
            <Link textDecoration='none' color='black' href={'#'}>LinkedIn</Link>
          </Stack>
        </Flex>
      </Container>
      </Box>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
        
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 Shopbop. All rights reserved
        </Text>
      </Box>
    </Box>
    )
  }