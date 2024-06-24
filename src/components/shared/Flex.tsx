import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface flexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}

const Flex = styled.div<flexProps>(({ align, justify, direction }) => ({
  display: 'flex',
  alignItems: align,
  justifyContent: justify,
  flexDirection: direction,
}))

export default Flex
