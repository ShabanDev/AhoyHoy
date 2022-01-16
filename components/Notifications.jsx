import { useContext } from 'react';
import { Button, Stack, Text } from '@chakra-ui/react';
import { SocketContext } from '../context/SocketContext';

function Notifications() {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            { call.isReceivingCall && !callAccepted && (
                <Stack>
                    <Text as='h1' fontSize='md'>{call.name} is calling:</Text>
                    <Button onClick={answerCall}>Answer</Button>
                </Stack>
            )}
        </>
    )
}

export default Notifications
