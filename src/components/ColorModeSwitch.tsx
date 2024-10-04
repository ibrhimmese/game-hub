import { HStack, Switch,Text,useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {

   const {toggleColorMode,colorMode} = useColorMode();

  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode==='dark'} onChange={toggleColorMode}></Switch>
        <Text whiteSpace='nowrap'>Gece Modu</Text>
    </HStack>
  )
}

export default ColorModeSwitch
