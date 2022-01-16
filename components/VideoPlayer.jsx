import { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { SimpleGrid, Box, Container, Text, Stack } from '@chakra-ui/react';

function VideoPlayer({videoRef, name}) {

    return (
            <Stack position='relative'>
                <video playsInline muted ref={videoRef} autoPlay />
                <Text position='absolute' size='lg' color='white' backgroundColor='blackAlpha.700' bottom='0' paddingX='4' width='100%'>{ name || 'Name' }</Text>
            </Stack>
    )
}

export default VideoPlayer


{/* <Stack>
    <Text size='lg'>{ call.name || 'Name' }</Text>
    <video playsInline ref={userVideo} autoPlay />
</Stack> */}