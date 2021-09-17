import { ReactNode, useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import "@fontsource/pattaya"

const Links = ['Nosotros', 'Proyectos', 'Contacto']

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color={'white'}
    transition={'all .3s ease'}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('gray.300', 'gray.700'),
    }}
    href={'#about'}
  >
    {children}
  </Link>
)

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [navbarColor, setNavbarColor] = useState('transparent')
  const [navbarTextColor, setNavbarTextColor] = useState('white')
  const [navbarHight, setNavbarHight] = useState('22px')
  const [border, setBorder] = useState('')
  const [shadow, setShadow] = useState('')

 useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 500 ||
        document.body.scrollTop > 500
      ) {
        setNavbarColor('whiteAlpha.900')
        setNavbarHight('0px')
        setNavbarTextColor('gray.500')
        setBorder('2px solid gray')
        setShadow('xl')
      } else if (
        document.documentElement.scrollTop < 501 ||
        document.body.scrollTop < 501
        ) {
          setNavbarColor('transparent')
          setNavbarHight('22px')
          setNavbarTextColor('white')
          setBorder('0px')
          setShadow('none')
      }
    }
    window.addEventListener('scroll', updateNavbarColor)
    return function cleanup () {
      window.removeEventListener('scroll', updateNavbarColor)
    }
  })

  return (
    <>
      <Box
      transition={'all .3s ease'}
        pt={{ md: navbarHight }}
        pos="fixed"
        w="100%"
        transitionDelay={'0.2s'}
        bg={useColorModeValue(navbarColor, navbarColor)}
        px={{base:'0',md:'4'}}
        zIndex='999999'
        boxShadow={shadow}
        borderBottom={border}
      >
        <Flex
          h={16}
          w={'inherit'}
          alignItems={'center'}
          pr={{base:'0',md:'20'}}
          pl={{base:'0',md:'20'}}
          justifyContent={{ base: 'flex-end', md: 'space-between' }}
        >
          <Box fontFamily='Pattaya' pr={{ base: '20%', md: '' }} fontSize={25}>0749 Producciones</Box>
          <IconButton
          userSelect='none'
            size={'sm'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack fontSize="19px" spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              color={useColorModeValue(navbarTextColor, navbarTextColor)}
              background={{base:'gray.600', md:'none'}}
            >
              <Link
                px={2}
                py={1}
                rounded={'md'}
               color={navbarTextColor}
                transition={'all .3s ease'}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('gray.300', 'gray.300'),
                }}
                href={'#about'}
              >
                Nosotros
              </Link>
              <Link
                px={2}
                py={1}
                rounded={'md'}
               
                
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('gray.300', 'gray.700'),
                }}
                href={'#projects'}
              >
                Proyectos
              </Link>
              <Link
                px={2}
                py={1}
                rounded={'md'}
               
                transition={'all .3s ease'}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('gray.300', 'gray.700'),
                }}
                href={'#form'}
              >
                Contacto
              </Link>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
