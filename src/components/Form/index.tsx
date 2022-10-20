import React from 'react'
import {
  Flex,
  Divider,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from '@chakra-ui/react'

type PropsForm = {
  amount: string
  setAmount: (val: string) => void
  address: string
  setAddress: (val: string) => void
  disabled: boolean
  handleOnSubmit: (e: React.SyntheticEvent) => void
}

const Form: React.FC<PropsForm> = ({ amount, setAmount, address, setAddress, disabled, handleOnSubmit }) => {
  return (
    <>
      <Divider my={5} />

      <FormControl as="form" onSubmit={handleOnSubmit}>
        <Flex gap={5} wrap={{ base: 'wrap', md: 'nowrap' }}>
          {/* amount */}
          <InputGroup w={{ base: '100%', md: '20rem' }}>
            <InputLeftAddon children="ETH" />
            <NumberInput onChange={(e) => setAmount(e)} step={0.01} value={amount} defaultValue={0} min={0} w="100%">
              <NumberInputField disabled={disabled} borderLeftRadius="0" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </InputGroup>

          {/* to */}
          <Input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.currentTarget.value)}
            disabled={disabled}
            w="100%"
            isRequired
          />

          {/* submit */}
          <Button type="submit" disabled={disabled} px={10} w={{ base: '100%', md: 'auto' }}>
            Send
          </Button>
        </Flex>
      </FormControl>
    </>
  )
}

export default Form
