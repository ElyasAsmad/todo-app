import React from 'react'
import {
    ScrollView,
    Box,
    Text,
    VStack,
    Icon,
    Image,
    useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import NavBar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
    return (
        <AnimatedColorBox
            flex={1}
            bg={useColorModeValue('warmGray.50', 'warmGray.900')}
            w="full"
        >
            <Masthead
                title="About this app"
                image={require('../assets/about-masthead.png')}
            >
                <NavBar />
            </Masthead>
            <ScrollView
                borderTopLeftRadius="30px"
                borderTopRightRadius="30px"
                bg={useColorModeValue('warmGray.50', 'primary.900')}
                mt="-20px"
                pt="30px"
                p={4}
                overScrollMode="always"
                zIndex={10}
            >
                <VStack flex={1} space={4}>
                    <Box alignItems="center">
                        <Image
                            source={require('../assets/elyas-asmad.jpg')}
                            borderRadius="full"
                            resizeMode="cover"
                            w={120}
                            h={120}
                            alt="author"
                        />
                    </Box>
                    <Text fontSize="md" w="full" textAlign="justify">
                        React Native to-do app by Elyas Asmad on 13 February
                        2022
                    </Text>
                    <LinkButton
                        colorScheme={useColorModeValue('blue', 'darkBlue')}
                        size="lg"
                        borderRadius="full"
                        href='https://www.twitter.com/ElyasAsmad'
                        leftIcon={<Icon as={Feather} name='twitter' size='sm' opacity={0.5} />}
                    >
                        @ElyasAsmad
                    </LinkButton>
                    <LinkButton
                        colorScheme='red'
                        size="lg"
                        borderRadius="full"
                        href='https://www.youtube.com/c/ElyasAsmadMusic'
                        leftIcon={<Icon as={Feather} name='youtube' size='sm' opacity={0.5} />}
                    >
                        My YouTube Channel
                    </LinkButton>
                </VStack>
            </ScrollView>
        </AnimatedColorBox>
    )
}

export default AboutScreen
