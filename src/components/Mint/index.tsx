import React, { useEffect, useState } from 'react'
import { useContractFunction } from '@usedapp/core'
import Abi from '../../abi/index.json'
import { Contract, utils } from 'ethers'
import {
  Flex,
  Box,
  Heading,
  Divider,
  InputGroup,
  InputLeftAddon,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  useToast,
} from '@chakra-ui/react'

const Transfer = () => {
  const [amount, setAmount] = useState('0')
  const [address, setAddress] = useState('')
  const [disabled, setDisabled] = useState(false)

  const transferInterface = new utils.Interface(Abi)
  const contract = new Contract('0x8eBa66cb666795eDFf283763ffeaD33d7b24B5b0', transferInterface)
  const { state, send } = useContractFunction(contract, 'mint')

  const toast = useToast()

  const handleClick = async () => {
    setDisabled(true)
    await send('test', address, 10000)
  }

  useEffect(() => {
    if (state.status != 'Mining') {
      setDisabled(false)
      setAmount('0')
      setAddress('')
    }
    if (state.status != 'Exception' && state.status != 'None') {
      toast({
        title: state.status,
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    }
    if (state.status == 'Exception') {
      toast({
        title: state.status,
        description: state.errorMessage,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }, [state])

  return (
    <Box my="5rem">
      <Heading as="h3" size="md">
        Mint:
      </Heading>

      <Divider my={5} />

      <Flex gap={5} wrap={{ base: 'wrap', md: 'nowrap' }}>
        {/* amount */}
        <InputGroup w={{ base: '100%', md: '20rem' }}>
          <InputLeftAddon children="ETH" />
          <NumberInput id={`EthInput`} step={0.01} defaultValue={0} min={0} w="100%">
            <NumberInputField
              onChange={(e) => setAmount(e.currentTarget.value)}
              value={amount}
              disabled={disabled}
              borderLeftRadius="0"
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </InputGroup>

        {/* to */}
        <Input
          id={`AddressInput`}
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.currentTarget.value)}
          disabled={disabled}
          w="100%"
        />

        <Button onClick={handleClick} px={10} w={{ base: '100%', md: 'auto' }}>
          Send
        </Button>
      </Flex>
    </Box>
  )
}

export default Transfer
