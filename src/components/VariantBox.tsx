import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react'

type VariantBoxProps = BoxProps & {
  variant?: string
}

const VariantBox = (props: VariantBoxProps) => {
  const { variant, ...rest } = props
  const styles = useStyleConfig('VariantBox', { variant })

  return <Box __css={styles} {...rest} />
}

export default VariantBox
