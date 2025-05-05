import * as React from 'react'
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface CircularProgressWithLabelProps extends CircularProgressProps {
  value: number
}

function CircularProgressWithLabel(props: CircularProgressWithLabelProps) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{
          color: '#0D5C63',
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" sx={{ color: '#0D5C63' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  )
}

export default function CircularWithFixedValue({ value }: { value: number }) {
  const clampedValue = Math.min(Math.max(value, 0), 100)

  return <CircularProgressWithLabel value={clampedValue} />
}
