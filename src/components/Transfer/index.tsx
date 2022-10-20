import React, { useEffect, useState } from 'react'
import { useSendTransaction } from '@usedapp/core'
import { utils } from 'ethers'
import { Box, Heading } from '@chakra-ui/react'
import Form from '../Form'
import { notificationsToasts } from '../Notifications'

const Transfer = () => {
  // Form data
  const [amount, setAmount] = useState('0')
  const [address, setAddress] = useState('')
  const [disabled, setDisabled] = useState(false)

  // Use Transaction
  const { sendTransaction, state } = useSendTransaction({ transactionName: 'Send Ethereum' })

  // Submit Transaction
  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setDisabled(true)
    void sendTransaction({ to: address, value: utils.parseEther(amount) })
  }

  // Notification and errors
  notificationsToasts({ state, setDisabled, setAmount, setAddress })

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
