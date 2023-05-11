import React,{ComponentProps} from 'react'
import {Select} from 'antd'


type SelectProps = React.ComponentProps<typeof Select>


const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));

interface IdSelectProps extends Omit<SelectProps,'value'|'options'|'onChange'> {
    value?: number | string
    onChange?: (value?: unknown) => void;
    defaultOptionName?: string;
    options?: { name: string; id: number }[];
}

const IdSelect = (props: IdSelectProps) => {
    const { value, onChange, defaultOptionName, options, ...restProps } = props;
  return (
    <Select 
        value={options?.length? toNumber(value): 0}
        onChange={(value) => onChange?.(toNumber(value) || undefined)}
        {...restProps}
    >
        {
            defaultOptionName ?  <Select.Option value={0} >{defaultOptionName}</Select.Option> : null
        }
      {props.options?.map(option => {
        return (
            <Select.Option key={option.id} value={option.id} >{option.name}</Select.Option>
        )
      })}
    </Select>
  )
}

export default IdSelect
