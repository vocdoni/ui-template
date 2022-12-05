import { Button, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const App = () => {
  const nav = useNavigate()
  const ref = useRef<HTMLInputElement>(null)

  const goto = (pid: string) => {
    const id = pid.replace('0x', '')
    return nav(`/process/${id}`)
  }

  return (
    <VStack spacing={8}>
      <Text>Specify a process ID to easily navigate to it:</Text>
      <InputGroup>
        <Input
          ref={ref}
          type='text'
          placeholder='0x0230...'
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              goto((e.target as HTMLInputElement).value)
            }
          }}
        />
        <InputRightElement>
          <Button size='xs' mr={2} onClick={() => {
            goto(ref.current?.value as string)
          }}>
            Go
          </Button>
        </InputRightElement>
      </InputGroup>
    </VStack>
  )
}
