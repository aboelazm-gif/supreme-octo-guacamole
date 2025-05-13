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

function FooterModal({trigger}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} style={{all:"unset"}} w="full">{trigger}</Button>

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
          maxW="700px"
          h="660px"
          mx={4}
          position="relative"
          top="50px"
        >
          <ModalHeader
             p="10px 0 10px 15px"
             bg="rgba(40, 75, 95, 0.2)"
             borderRadius="20px 20px 0 0"
             fontWeight="bold"
             fontSize={25}
          >Frequently Asked Questions
          </ModalHeader>
          
          <ModalBody>
            <h4 className='Q'>What year of study should I be in to join?</h4>
            <p className='A'>While we tend to prefer younger students, year 1 to 3 range, we do not restrict older students from joining</p>
            <h4 className='Q'>Is it only for mechanical students?</h4>
            <p className='A'>Not at all, we welcome all students from all faculties, however engineering is preffered for mechanical sub-teams</p>
            <h4 className='Q'>Where have you competed before?</h4>
            <p className='A'>Italy and UK</p>
            <h4 className='Q'>Are there any prerequisites?</h4>
            <p className='A'>Nope. Just basic physics and a passion for innovating</p>
            <h4 className='Q'>How can I register?</h4>
            <p className='A'>From the Join Us tab on the top of the page</p>
            <h4 className='Q'>Where can I find you?</h4>
            <p className='A'>Lab G003,Building G, Abou Keer campus</p>
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