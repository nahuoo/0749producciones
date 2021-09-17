import React from 'react'
import {
  Text,
  useColorModeValue,
} from '@chakra-ui/react'


export const Adelante = () => {
  return (
    <>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Dirección: Gonzalo Cavia y Nicolás Werner
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
        Música: Hans Kubaseck
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Género: Documental
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Sinopsis: Adelante es una Asociación Civil que trabaja en la ciudad de Mar del Plata, Argentina. Está conformada por jóvenes voluntarios que buscan construir una mejor sociedad, más inclusiva, justa y con igualdad de oportunidades para todas las personas. El cortometraje retrata su organización y el trabajo de sus voluntarios, todo en el marco de los festejos por “el día del niño”, uno de los momentos más esperados del año.
      </Text>
    </>
  )
}
