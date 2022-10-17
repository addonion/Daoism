import React, { useEffect, useState } from 'react'
import { Button, useToast } from '@chakra-ui/react'
import { useEthers, useNotifications } from '@usedapp/core'

const ConectButton = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers()
  const toast = useToast()

  // Errors
  const [activateError, setActivateError] = useState('')
  const { error } = useEthers()
  useEffect(() => {
    if (error && account) {
      setActivateError(error.message)
      toast({
        title: 'Error',
        description: activateError,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return
    }
    setActivateError('')
  }, [error, account])

  // Notifications
  const { notifications } = useNotifications()
  const [notificationId, setNotificationId] = useState('')
  useEffect(() => {
    notifications.map((notification, i) => {
      if (i + 1 == notifications.length) {
        if (notificationId != notification.id && notification.type === 'walletConnected') {
          toast({
            title: 'Wallet connected',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        }
        setNotificationId(notification.id)
      }
    })
  })

  const activate = async () => {
    setActivateError('')
    activateBrowserWallet()
  }

  const buttonText = account ? 'Deactivate' : 'Connect to wallet'

  return (
    <>
      <Button onClick={account ? () => deactivate() : activate} ml="auto">
        {buttonText}
      </Button>
    </>
  )
}

export default ConectButton
