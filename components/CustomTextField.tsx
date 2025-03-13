import React from 'react'
import { TextField } from '@mui/material'

interface CustomTextFieldProps {
  value: string
  name: string
  inputLabel: string
  type?: string
}

export const sxTextField = {
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '& fieldset': {
      borderColor: 'white',
    },
  },
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  value,
  name,
  inputLabel,
  type = 'text',
}) => {
  return (
    <div className="flex flex-col gap-2">
      {inputLabel && <span className="text-white">{inputLabel}</span>}

      <TextField
        value={value}
        name={name}
        type={type}
        variant="outlined"
        size="small"
        fullWidth
        autoComplete="off"
        sx={sxTextField}
      />
    </div>
  )
}

export default CustomTextField
