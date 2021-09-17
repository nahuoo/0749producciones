import React from 'react'
import {
  Text,
  useColorModeValue,
} from '@chakra-ui/react'


export const Ruta = () => {
  return (
    <>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Director: Pedro Thedy Navarro
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Guion: Thomás Lahitte
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Producción: 0749 Producciones
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Género: Policial
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Estado: Serie en desarrollo
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Sinopsis: Durante la temporada de verano en Mar del Plata, Gabriel, un frustrado periodista de espectáculos, queda envuelto en un caso policial que lo lleva a enfrentarse a una poderosa banda de la ciudad.

      </Text>
    </>
  )
}
