import { useEffect } from 'react'
import { TransactionStatus } from '@usedapp/core'
import { useToast } from '@chakra-ui/react'

type PropsNotyfications = {
  state: TransactionStatus
  setDisabled: (val: boolean) => void
  setAmount: (val: string) => void
  setAddress: (val: string) => void
}

export const notificationsToasts = ({ state, setDisabled, setAmount, setAddress }: PropsNotyfications) => {
  const toast = useToast()

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
}
