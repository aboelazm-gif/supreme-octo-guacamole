import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import '../styles/loginModal.css'

function FooterModal({trigger,content,headertitle}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
       onClick={onOpen} 
       variant="unstyled" 
       maxW="100vw"
       margin={0}
       padding={0}
       border={0} 
       backgroundColor="transparent"
       >{trigger}</Button>

      <Modal isOpen={isOpen} onClose={onClose}
         size="md"
         isCentered
      >
        <ModalOverlay 
           bg="rgba(5,25,25,0.5)"
           backdropFilter="blur(10px)"
           zIndex={2}
        />
        <ModalContent
          borderRadius='20px' 
          bg="rgba(35,45,55,0.3)"
          border="1px solid rgb(0,100,100)"
          maxW="700px"
          h="full"
          mx={4}
          position="relative"
          mt="12vh"
        >
          <ModalHeader
            p="10px 0 10px 15px"
            bg="rgba(40, 75, 95, 0.2)"
            borderRadius="20px 20px 0 0"
            fontWeight="bold"
            fontSize={25}
            borderBottom="1px solid rgb(0,100,100)"            
          >{headertitle}
          </ModalHeader>
          
          <ModalBody>
            {content}
          </ModalBody>

          <ModalFooter
            borderRadius="0 0 20px 20px"
             bg="rgba(40, 75, 95, 0.2)"
          >
            <Button onClick={onClose}
                colorScheme='blue' 
                mr={3}
                borderRadius="50px"
                m="10px 10px 0px 0"
                border="0"
                backgroundColor="rgb(0,225,200)"
                color="rgb(0,100,100)"
                w="100px"
                fontFamily="Cairo"
                fontSize="1.2rem"
                fontWeight="bold">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default FooterModal;