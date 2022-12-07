import { extendTheme } from '@chakra-ui/react'
import { FormLabel, Radio, RadioGroup } from './forms'
import { Heading, HorizontalRuler, Text, VariantBox } from './layout'

const theme = extendTheme({
  components: {
    VariantBox,
    FormLabel,
    Heading,
    HorizontalRuler,
    Radio,
    RadioGroup,
    Text,
  } as any,
  colors: {
    brand: {
      100: '#9AE898',
      900: '#4BC6BF'
    },
  },
})

export default theme
