import { useContext, useState } from 'react';
import { Text, Input, Box, Container, Button, Icon, FormControl, SimpleGrid, useClipboard } from '@chakra-ui/react';
import { Assignment, CallEnd, Check, Phone, PhoneDisabled } from '@material-ui/icons';

import { SocketContext } from '../context/SocketContext';

function Options({children}) {
    const {
        me,
        callAccepted,
        callEnded,
        name,
        setName,
        leaveCall,
        callUser
    } = useContext(SocketContext);

    const { hasCopied, onCopy } = useClipboard(me);

    const [ idToCall, setIdToCall ] = useState('');

    return (
        <Container maxW='container.md' centerContent>
            <Box>
                <form autoComplete='off' noValidate>
                    <SimpleGrid columns={{sm: 1, md: 2}}>
                        <Box padding='4'>
                            <Text as='h6' size='md' marginBottom='2'>Account Info</Text>
                            <Input placeholder='Name' marginBottom='2' value={name} onChange={(e) => setName(e.target.value)} isDisabled={callAccepted && !callEnded}></Input>
                            <Button marginBottom='2' leftIcon={hasCopied ? <Check fontSize='large' /> : <Assignment fontSize='large' />} isFullWidth={true} onClick={onCopy}>Copy Your ID</Button>
                        </Box>
                        <Box padding='4'>
                            <Text as='h6' size='md' marginBottom='2'>Make a Call</Text>
                            <Input placeholder='ID to Call' marginBottom='2' value={idToCall} onChange={(e) => setIdToCall(e.target.value)}></Input>
                            {callAccepted && !callEnded ? 
                            (
                                <Button color='red.500' marginBottom='2' leftIcon={<PhoneDisabled fontSize='large' />} isFullWidth onClick={leaveCall}>Hang Up</Button>
                            ) :
                            (
                                <Button color='green.400' marginBottom='2' leftIcon={<Phone fontSize='large' />} isFullWidth onClick={() => callUser(idToCall)}>Call</Button>
                            )}
                        </Box>
                    </SimpleGrid>
                </form>
                { children }
            </Box>
        </Container>
    )
}

export default Options
