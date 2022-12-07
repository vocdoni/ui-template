import { createMultiStyleConfigHelpers, defineStyleConfig } from '@chakra-ui/react'

export const FormLabel = defineStyleConfig({
  variants: {
    'question-title': {
      fontWeight: 'bold',
      fontSize: 'xl',
      marginBottom: 1,
    },
  },
})

const radio = createMultiStyleConfigHelpers(['label'])
export const Radio = radio.defineMultiStyleConfig({
  defaultProps: {
    colorScheme: 'teal'
  }
})

export const RadioGroup = defineStyleConfig({
  variants: {
    custom: {
      textTransform: 'uppercase',
    },
  },
})
