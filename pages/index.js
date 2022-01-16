import Head from 'next/head'
import Image from 'next/image'
import { Container, Box, Heading, Text } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import VideoView from '../views/VideoView'
import Notifications from '../components/Notifications'
import Options from '../components/Options'

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>AhoyHoy</title>
        <meta name="description" content="A simple p2p video chatting app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Container maxW='container.lg'>
          <Heading as="h1" size="xl" pb="2" color='ahoyhoy-blue.500'>
            <PhoneIcon /> AhoyHoy
          </Heading>
        </Container>
        <VideoView />
        <Options>
          <Notifications />
        </Options>
      </Box>
      
    </>
  )
}
