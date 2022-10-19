import React, { useEffect, useState } from 'react'
import { useSendTransaction } from '@usedapp/core'
import { utils } from 'ethers'
import { Box, Heading, useToast } from '@chakra-ui/react'
import Form from '../Form'

const Transfer = () => {
  const [amount, setAmount] = useState('0')
  const [address, setAddress] = useState('')
  const [disabled, setDisabled] = useState(false)

  const { sendTransaction, state } = useSendTransaction({ transactionName: 'Send Ethereum' })
  const toast = useToast()

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setDisabled(true)
    void sendTransaction({ to: address, value: utils.parseEther(amount) })
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
        Transfer:
      </Heading>

      <Form
        amount={amount}
        setAmount={setAmount}
        address={address}
        setAddress={setAddress}
        disabled={disabled}
        handleOnSubmit={handleOnSubmit}
      />
    </Box>
  )
}

export default Transfer
