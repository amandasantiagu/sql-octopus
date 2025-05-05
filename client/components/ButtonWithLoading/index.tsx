import React, { useRef } from 'react'

import { Button, CircularProgress, Theme, SxProps, Tooltip } from '@mui/material'

export type TooltipType =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top'

type ButtonWithLoadingProps = {
  children?: React.ReactNode
  isLoading?: boolean
  disabled?: boolean
  /**
   * @default 'submit'
   */
  type?: 'submit' | 'reset' | 'button'
  /**
   * @default 'contained'
   */
  variant?: 'text' | 'contained' | 'outlined'
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  size?: 'small' | 'medium' | 'large'
  sx?: SxProps<Theme>
  className?: string
  hasOpen?: boolean
  id?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  tooltipText?: string
  tooltipPlacement?: TooltipType
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
}

export const ButtonWithLoading: React.FC<ButtonWithLoadingProps> = ({
  children,
  isLoading = false,
  disabled = false,
  type = 'submit',
  variant = 'contained',
  onClick,
  size,
  sx,
  className = 'hover:bg-neutral-100 hover:text-primary shadow-none',
  hasOpen = false,
  id = '',
  startIcon,
  endIcon,
  tooltipText = '',
  tooltipPlacement = 'top-start',
  color = 'primary',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <Tooltip title={tooltipText} placement={tooltipPlacement} arrow>
      <Button
        type={type}
        color={color}
        variant={variant}
        disabled={isLoading || disabled}
        onClick={onClick}
        aria-controls={hasOpen ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={hasOpen ? 'true' : undefined}
        size={size}
        ref={buttonRef}
        startIcon={startIcon}
        endIcon={endIcon}
        sx={sx}
        id={id}
        className={className}
      >
        {isLoading ? <CircularProgress color="secondary" size={20} /> : <>{children}</>}
      </Button>
    </Tooltip>
  )
}
