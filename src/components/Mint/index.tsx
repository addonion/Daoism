import React, { useEffect, useState } from 'react'
import { useContractFunction } from '@usedapp/core'
import { Contract, utils } from 'ethers'
import Abi from '../../abi/SimpleContract.json'
import { simpleContractAddress } from '../../contracts'
import { Box } from '@chakra-ui/react'

const Mint = () => {
  const transferInterface = new utils.Interface(Abi)
  const contract = new Contract(simpleContractAddress, transferInterface)

  console.log(contract.Transfer)

  const { state, send } = useContractFunction(contract, 'Transfer')

  const handleClick = async () => {
    await send('0x0c1d8a45F42eb5D0Fa32bB1284B7e0453e30F7c3', 10000)
  }

  return (
    <Box my="5rem" onClick={handleClick}>
      123
    </Box>
  )
}

export default Mint
