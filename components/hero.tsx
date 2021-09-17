import {
  Stack,
  Flex,
  Box,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import Wave from 'react-wavify'

export const Hero = () => {
  return (
    <>
        <Box h={'100vh'} bg="transparent"></Box>
        <Wave
          fill="url(#gradient)"
          paused={false}
          options={{
            height: 10,
            amplitude: 15,
            speed: 0.3,
            points: 6,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="20%" stopColor="#16a0b2c5" />
              <stop offset="80%" stopColor="#fff" />
            </linearGradient>
          </defs>
        </Wave>
        <Flex w={'full'} mt={-5} bg={'white'} h={'10vh'}></Flex>
    </>
  )
}
