import React from 'react'
import { TextField } from '@mui/material'

interface CustomTextFieldProps {
  value: string
  name: string
  inputLabel: string
  type?: string
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
        sx={{
          '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
              borderColor: 'white',
            },
          },
        }}
      />
    </div>
  )
}

export default CustomTextField
