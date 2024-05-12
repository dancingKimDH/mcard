/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import React from 'react'
import logo from './logo.svg'
import './App.css'

import Text from '@shared/Text'
import Button from '@shared/Button'

const bold = css`
  font-weight: 900;
`
const containerStyles = css`
  background-color: pink;
  ${bold};
`

function App() {
  return (
    <div className="App" css={containerStyles}>
      <Text typography="t1" display="block" color="red">
        T1
      </Text>
      <Text typography="t2">T2</Text>
      <Text typography="t3">T3</Text>
      <Text typography="t4">T4</Text>
      <Text typography="t5">T5</Text>
      <Text typography="t6">T6</Text>
      <div style={{ height: 10, width: '100%', background: 'white' }}>
        <Button>클릭해 주세요</Button>
        <Button>클릭해 주세요</Button>
        <Button>클릭해 주세요</Button>
      </div>
    </div>
  )
}

export default App
