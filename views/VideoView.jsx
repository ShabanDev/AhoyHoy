import VideoPlayer from "../components/VideoPlayer";
import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { useContext } from 'react';
import { SocketContext } from "../context/SocketContext";

function VideoView() {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return <Box backgroundColor='gray.900'>
        <Container paddingX={{ base: 0, md: 4 }} maxW='container.lg'>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={10}>
                <VideoPlayer name={name} videoRef={myVideo} />
                { callAccepted && !callEnded && <VideoPlayer name={call.name} videoRef={userVideo} />}
            </SimpleGrid>
        </Container>
    </Box>
}

export default VideoView;