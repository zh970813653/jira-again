import React from 'react'
import {Rate} from 'antd'

interface PinProps extends React.ComponentProps<typeof Rate> {
    checked: boolean
    onCheckedChange?: (check: boolean) => void
}

const Pin = (props: PinProps) => {
    const {checked,onCheckedChange,...result} = props
    const handlerChange = (num: number) => {
        onCheckedChange?.(!!num)
    }
  return (
    <Rate count={1} value={checked ? 1 : 0} onChange={handlerChange} {...result}></Rate>
  )
}

export default Pin
