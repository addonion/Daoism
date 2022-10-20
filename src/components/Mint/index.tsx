import React, { useState } from 'react'
import { useContractFunction } from '@usedapp/core'
import Abi from '../../abi/index.json'
import { Contract, utils } from 'ethers'
import { Box, Heading } from '@chakra-ui/react'
import Form from '../Form'
import { notificationsToasts } from '../Notifications'

const Transfer = () => {
  // Form data
  const [amount, setAmount] = useState('0')
  const [address, setAddress] = useState('')
  const [disabled, setDisabled] = useState(false)

  // Use contract
  const transferInterface = new utils.Interface(Abi)
  const contract = new Contract('0x8eBa66cb666795eDFf283763ffeaD33d7b24B5b0', transferInterface)
  const { state, send } = useContractFunction(contract, 'mint', { transactionName: 'Mint' })

  // Submit mint
  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setDisabled(true)
    await send('Test data', address, 10000)
  }

  // Notification and errors
  notificationsToasts({ state, setDisabled, setAmount, setAddress })

  return (
    <Box my="5rem">
      <Heading as="h3" size="md">
        Mint:
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
