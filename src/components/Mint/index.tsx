import React, { useEffect, useState } from 'react'
import { useContractFunction } from '@usedapp/core'
import { Contract, utils } from 'ethers'
import Abi from '../../abi/SimpleContract.json'
import { simpleContractAddress } from '../../contracts'
import { Box } from '@chakra-ui/react'

const Mint = () => {
  const transferInterface = new utils.Interface(Abi)
  const contract = new Contract(simpleContractAddress, transferInterface)

  const { state, send } = useContractFunction(contract, 'transfer')

  const handleClick = async () => {
    void (await send('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199', 1 * 1e18))
  }

  return (
    <Box my="5rem" onClick={handleClick}>
      123
    </Box>
  )
}

export default Mint
