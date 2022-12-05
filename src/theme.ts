import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Heading: {
      variants: {
        subtitle: {
          fontStyle: 'italic',
          color: 'gray.400',
        },
      },
    },
  },
  colors: {
    brand: {
      100: '#9AE898',
      900: '#4BC6BF'
    },
  },
})

export default theme
