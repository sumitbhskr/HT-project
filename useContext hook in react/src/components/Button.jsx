import { useContext } from 'react'
import Component1 from 'postcss/lib/comment'
import {counterContext} from '../context/context'


const Button = ({count}) => {
  return (
    <div>
      <Button><span><Component1  count={count}/></span>I am a button</Button>
    </div>
  )
}

export default Button
