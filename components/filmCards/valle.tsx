import React from 'react'
import {
  Text,
  useColorModeValue,
} from '@chakra-ui/react'


export const Valle = () => {
  return (
    <>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Guion y dirección: Nicolás Chinski
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Producción: 0749 Producciones / Tandem Audiovisual
      </Text>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="lg"
      >
        Género: Comedia Fantástica
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
       Sinopsis: Durante sus primeras vacaciones juntos en las sierras de Córdoba, Esteban (33) y Agustina (30) visitan una vieja casa familiar. Allí tienen una fuerte pelea ya que él la acusa de seguir enamorada de Valentín, su anterior novio, quien murió años atrás en un accidente en una ruta cercana. En su desesperado intento por salvar la relación, Esteban recibirá una ayuda inesperada: la del fantasma de Valentín.  


      </Text>
    </>
  )
}
