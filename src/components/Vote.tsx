import { Box, Heading } from '@chakra-ui/react'
import { IElection as IElectionMetadata } from '@vocdoni/sdk'
import { IElection } from '@vocdoni/sdk/dist/api/election'
import { MultiLanguage } from '@vocdoni/sdk/dist/util/lang'
import { format } from 'date-fns'
import { useLoaderData } from 'react-router-dom'
import Markdown from './Markdown'

const Vote = () => {
  const data = (useLoaderData() as IElection)
  const { metadata } : { metadata: IElectionMetadata} = (data as any)

  return (
    <Box m={5}>
      <Heading size='2xl' lineHeight={1.1} mb={3} textAlign='center'>
        {(metadata.title as MultiLanguage<string>).default}
      </Heading>
      <Heading size='sm' variant='subtitle' textAlign='center'>
        Voting period {format(new Date(data.startDate), 'd-L-y HH:mm')} ~ {format(new Date(data.endDate), 'd-L-y HH:mm')}
      </Heading>
      <Markdown>
        {(metadata.description as MultiLanguage<string>).default}
      </Markdown>
    </Box>
  )
}

export default Vote
