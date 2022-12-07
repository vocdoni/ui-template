import {
  Alert, AlertIcon,
  Button,
  FormControl, FormErrorMessage, FormLabel, Radio, RadioGroup,
  Stack
} from '@chakra-ui/react'
import { IQuestion } from '@vocdoni/sdk'
import { Field, Formik, FormikErrors, FormikTouched } from 'formik'
import * as Yup from 'yup'
import Markdown from './Markdown'
import VariantBox from './VariantBox'

interface QuestionProps {
  question: IQuestion,
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[],
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[]
}

export const Question = ({question, error, touched}: QuestionProps) => {
  return (
    <VariantBox variant='question'>
      <FormControl as='fieldset' isInvalid={!!error && !!touched}>
        <FormLabel as='legend' variant='question-title'>
          {question.title.default}
        </FormLabel>
        <Markdown>
          {question.description?.default}
        </Markdown>
        <RadioGroup name={question.title.default}>
          <Stack direction='column'>
            {
              question.choices.map((choice, ck) => (
                <Field
                  key={ck}
                  as={Radio}
                  value={choice.value.toString()}
                >
                  {choice.title.default}
                </Field>
              ))
            }
          </Stack>
          <FormErrorMessage>{error?.toString()}</FormErrorMessage>
        </RadioGroup>
      </FormControl>
    </VariantBox>
  )
}

const Questions = ({questions}: {questions? : IQuestion[]}) => {
  if (!questions || (questions && !questions?.length)) {
    return (
      <Alert variant='solid' status='info'>
        <AlertIcon />Apparently this process has no questions 🤔
      </Alert>
    )
  }

  const initialValues : any = questions.reduce((prev, curr) => ({
    ...prev,
    [curr.title.default]: '',
  }), {})
  const validationSchema : any = Yup.object(questions.reduce((prev, curr) => ({
    ...prev,
    [curr.title.default]: Yup.string().required('This field is required')
  }), {}))

  return (
    <VariantBox variant='questions'>
      <Formik
        initialValues={initialValues}
        onSubmit={console.log}
        validationSchema={validationSchema}
      >
        {({handleSubmit, errors, touched}) => (
          <form onSubmit={handleSubmit}>
            {
              questions.map((question, qk) => (
                <Question
                  key={qk}
                  question={question}
                  error={errors[question.title.default]}
                  touched={touched[question.title.default]}
                />
              ))
            }
            <Button type='submit'>Vote</Button>
          </form>
        )}
      </Formik>
    </VariantBox>
  )
}

export default Questions
