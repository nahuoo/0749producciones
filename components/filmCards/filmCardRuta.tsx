import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Stack,
    Image,
    Modal,
    Text,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
  import { Ruta } from './ruta'
  
  export const FilmCardRuta = ({ film }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Center py={14} onClick={onOpen}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Box
              bgGradient={useColorModeValue(
                'radial(gray.300 1px, transparent 1px)',
                'radial(gray.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            >
              <ModalHeader>{film.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Ruta />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </Box>
          </ModalContent>
        </Modal>
  
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          justifyContent={'center'}
          bg={useColorModeValue('white', 'gray.800')}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'300px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `${'https:' + film.file.url}`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'lg'}
              height={350}
              _hover={{
                transition: 'all .3s ease',
                height: 310,
                cursor: 'pointer',
                filter: 'grayscale(80%)',
              }}
              width={282}
              objectFit={'cover'}
              src={'https:' + film.file.url}
            />
          </Box>
          <Stack pt={5} align={'center'}>
            <Heading
              color={'gray.600'}
              fontSize={'xl'}
              fontFamily={'body'}
              fontWeight={500}
            >
              Más Info
            </Heading>
          </Stack>
        </Box>
      </Center>
    )
  }
  