/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

import './App.css'

import Text from '@shared/Text'
import Button from '@shared/Button'
import Input from '@shared/Input'
import TextField from '@shared/TextField'

const bold = css`
  font-weight: 900;
`
const containerStyles = css`
  background-color: pink;
  ${bold};
`

function App() {
  return (
    <div className="App">
      <Text typography="t1" display="block" color="red">
        T1
      </Text>
      <Text typography="t2">T2</Text>
      <Text typography="t3">T3</Text>
      <Text typography="t4">T4</Text>
      <Text typography="t5">T5</Text>
      <Text typography="t6">T6</Text>
      <div style={{ height: 10, width: '100%', background: 'white' }}>
        <Button disabled={true} color="success">
          클릭해 주세요
        </Button>
        <Button color="error" weak={true}>
          클릭해 주세요
        </Button>
        <Button full={true}>클릭해 주세요</Button>
      </div>
      {/* <Input aria-invalid="true" placeholder="로그인" /> */}
      <TextField label="아이디" helpMessage="아이디를 입력해 주세요" />
      <TextField hasError={true} label="패스워드" />
    </div>
  )
}

export default App
