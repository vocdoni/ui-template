import { Alert, AlertIcon, Box, Button, FormControl, FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { IQuestion } from '@vocdoni/sdk'
import Markdown from './Markdown'
import VariantBox from './VariantBox'

const Questions = ({questions}: {questions? : IQuestion[]}) => {
  if (!questions || (questions && !questions?.length)) {
    return (
      <Alert variant='solid' status='info'>
        <AlertIcon />Apparently this process has no questions 🤔
      </Alert>
    )
  }

  return (
    <Box>
      {
        questions.map((question, qk) => (
          <VariantBox key={qk} variant='question'>
            <FormControl as='fieldset'>
              <FormLabel as='legend' variant='question-title'>
                {question.title.default}
              </FormLabel>
              <Markdown>
                {question.description?.default}
              </Markdown>
              <RadioGroup>
                <Stack direction='column'>
                  {
                    question.choices.map((choice, ck) => (
                      <Radio value={choice.value.toString()} key={ck}>
                        {choice.title.default}
                      </Radio>
                    ))
                  }
                </Stack>
              </RadioGroup>
            </FormControl>
          </VariantBox>
        ))
      }
        <Button>Vote</Button>
    </Box>
  )
}

export default Questions
