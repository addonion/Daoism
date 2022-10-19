import React from 'react'
import { Flex, Heading, Divider, Spinner } from '@chakra-ui/react'
import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import ConectButton from './ConectButton'

const Profile = () => {
  const { account, chainId } = useEthers()
  const userBalance = useEtherBalance(account, { chainId })

  return (
    <>
      <Flex align="center">
        <Heading as="h3" size="md">
          Profile:
        </Heading>
        <ConectButton />
      </Flex>

      {account && (
        <>
          <Divider my={3} />
          <div>
            <b>Account:</b> <span>{account}</span>
          </div>
          <div>
            <b>Ether balance:</b>
            {userBalance ? <> {formatEther(userBalance)} ETH</> : <Spinner size="xs" ml={2} />}
          </div>
        </>
      )}
    </>
  )
}

export default Profile
