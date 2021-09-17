import React from 'react'
import {
  Text,
  useColorModeValue,
} from '@chakra-ui/react'


export const Mumu = () => {
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
        Guión: Nicolás Werner
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Productoras: 0749 Producciones / Ciak Films
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Género: Road movie - Coming of age
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Estado: Largometraje en desarrollo
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Sinopsis: Godo, un joven tímido y desmotivado de 21 años, vive con su
        madre en un pueblo tranquilo de la Patagonia. En su cumpleaños número 21
        recibe inesperadamente una carta, escrita por su padre antes de morir,
        que lo invita a emprender una última búsqueda del tesoro como cuando era
        chico. De este modo iniciará un viaje por la Patagonia que transformará
        para siempre su vida .
      </Text>
    </>
  )
}
