import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react'
import { FilmCardAdelante } from './filmCards/filmCardAdelante'
import { FilmCardMumu } from './filmCards/filmCardMumu'
import { FilmCardRuta } from './filmCards/filmCardRuta'
import { FilmCardValle } from './filmCards/filmCardValle'
import { Parallax } from 'react-scroll-parallax'

export const About = ({ films }: any) => {
  return (
    <>
      <Flex
        id="about"
        w={'full'}
        bg="white"
        h={'40vh'}
        alignItems="center"
        justifyContent="center"
      >
        <Box py={5} w={'50vw'}>
          <Parallax y={[-30, 20]}>
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
              }}
            >
              Nosotros
            </Flex>
            <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            Somos un equipo joven, nacido y criado junto al mar.
            </Text>
            <Text pt={6} fontSize={'sm'} textAlign={'center'}>
              Producimos contenidos audiovisuales con fuerte impronta autoral y
              de proyección internacional.
              </Text> 
              <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                Buscamos fortalecer una industria
              cultural más federal e inclusiva desde Mar del Plata.
            </Text>
          </Parallax>
        </Box>
      </Flex>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        id="projects"
        bg="white"
        px="20px"
        justifyContent="center"
      >  
          <FilmCardMumu key={films[0].fields.title} film={films[0].fields} />
          <FilmCardRuta key={films[1].fields.title} film={films[1].fields} />
          <FilmCardValle key={films[2].fields.title} film={films[2].fields} />
          <FilmCardAdelante key={films[3].fields.title} film={films[3].fields} />
      </Flex>
    </>
  )
}
