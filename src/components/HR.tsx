import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react'

type HRProps = BoxProps & {
  variant?: string
}

const HR = (props: HRProps) => {
  const { variant, ...rest } = props
  const styles = useStyleConfig('HorizontalRuler', { variant })

  return <Box __css={styles} {...rest} as='hr' />
}

export default HR
