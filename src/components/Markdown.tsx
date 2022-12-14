import {
  Box,
  Code,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Table,
  Text,
  Tr,
  UnorderedList
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Markdown = ({children}: {children?: string}) => {
  if (!children) {
    return null
  }

  return (
    <div>
      <ReactMarkdown
        children={children}
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({node, children, ...props}) => (
            <Link {...props} target='_blank'>{children}</Link>
          ),
          h1: ({node, children, ...props}) => (
            <Heading size='lg' mt={5} mb={4} {...props}>{children}</Heading>
          ),
          h2: ({node, children, ...props}) => (
            <Heading size='md' mt={5} mb={4} {...props}>{children}</Heading>
          ),
          h3: ({node, children, ...props}) => (
            <Heading size='sm' mt={5} mb={4} {...props}>{children}</Heading>
          ),
          ol: ({node, children, ...props}) => (
            <OrderedList {...props}>{children}</OrderedList>
          ),
          ul: ({node, children, ...props}) => (
            <UnorderedList {...props}>{children}</UnorderedList>
          ),
          li: ({node, children, ...props}) => (
            <ListItem {...props}>{children}</ListItem>
          ),
          p: ({node, children, ...props}) => (
            <Text fontWeight='medium' mb={4}>{children}</Text>
          ),
          table: ({node, children, ...props}) => (
            <Box overflowX='auto' maxW='full'>
              <Table {...props}>{children}</Table>
            </Box>
          ),
          tr: ({node, children, ...props}) => (
            <Tr {...props}>{children}</Tr>
          ),
          code: ({node, children, ...props}) => (
            <Code {...props}>{children}</Code>
          )
        }}
      />
    </div>
  )
}

export default Markdown
