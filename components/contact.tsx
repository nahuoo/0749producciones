import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    StackDivider,
    useBreakpointValue,
    IconProps,
    Textarea,
    useColorModeValue,
    Icon,
  } from '@chakra-ui/react';
  import { useForm, ValidationError } from '@formspree/react';
  import { ReactElement } from 'react'

  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };

  export const Formulario = ()=> {
    const [state, handleSubmit] = useForm("xnqlwdgr");
    if (state.succeeded) {
      return (
      <>
        <Box id='form' bg={'white'}position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>

          <Stack spacing={{ base: 10, md: 20 }}>
          <Stack
            mt={15}
            pl={10}
            spacing={4}
            divider={
              <StackDivider
                borderColor='gray.100'
              />
            }>
            <Feature
              iconBg={'gray.200'}
              text={'Teléfono: +542236142384'}
            />
            <Feature
              iconBg={'gray.200'}
              text={'Dirección: Castex 1090, Mar del Plata, Buenos Aires, Argentina.'}
            />
            <Feature
             iconBg={'gray.200'}
              text={'Email: info@0749producciones.com.ar'}
            />
          </Stack>
          </Stack>
          
         
         <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Muchas Gracias!
                </Heading>
              </Stack>
              </Container>
         </Box>
      </>
      
      );
  }
    return (
      <Box id='form' bg={'white'}position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>

          <Stack spacing={{ base: 10, md: 20 }}>
          <Stack
            mt={15}
            pl={10}
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              iconBg={'gray.200'}
              text={'Teléfono: +542236142384'}
            />
            <Feature
              iconBg={'gray.200'}
              text={'Dirección: Castex 1090, Mar del Plata, Buenos Aires, Argentina.'}
            />
            <Feature
             iconBg={'gray.200'}
              text={'Email: info@0749producciones.com.ar'}
            />
          </Stack>

          </Stack>
          {/* Formulario */}
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Contáctanos
                <Text
                  as={'span'}
                  bgGradient="linear(to-t, cyan.200, cyan.900)"
                  bgClip="text">
                  !
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
               Envianos tu consulta
              </Text>
            </Stack>
            <Box as={'form'} mt={10} onSubmit={handleSubmit}>    
              <Stack spacing={4}>
                <Input
                  id="name"
                  type="name" 
                  name="name"
                  placeholder="Nombre"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                 <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
                <Input
                id="email"
                type="email" 
                name="email"
                  placeholder="Email"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                 <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                <Textarea  id="message"
        name="message" placeholder="Mensaje" />
                <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
              </Stack>

              <Button
                disabled={state.submitting}
                type='submit'
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, cyan.800, cyan.900)"
                color={'white'}
                _hover={{
                    bgGradient:"linear(to-l, cyan.200, cyan.900)",
                  boxShadow: 'xl',
                }}>
                Enviar
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    )
  }
  
  export const Blur = (props: IconProps) => {
    return (
      <Icon
        width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
    );
  };
