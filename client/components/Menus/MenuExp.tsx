import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'

import { PiCurrencyEthFill } from 'react-icons/pi'
import { CardStyles } from '@/styles/headerStyles'
import { useAuth } from '@/contexts/useAuth'

const MenuExp: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const { user } = useAuth()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="menu-exp"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        sx={{ ...CardStyles, color: '#DBB736' }}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <PiCurrencyEthFill className="text-yellowIcon" size={20} />
        {user?.exp || 0}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '.MuiMenu-paper': {
            background: '#17373A',
          },
        }}
        MenuListProps={{
          'aria-labelledby': 'menu-exp',
        }}
      >
        <div className="w-full items-center p-6 justify-center flex flex-col gap-4">
          <span className="flex flex-row gap-2 text-yellowIcon">
            <PiCurrencyEthFill className="text-yellowIcon" size={20} /> Experiência
          </span>

          <span className="text-white">
            Cada vez que você avança para um novo módulo, você ganha experiência. Quanto mais
            módulos você completar, maior será sua experiência acumulada!
          </span>

          <span className="text-white text-sm mt-2 italic">
            Fique atento às recompensas de EXP enquanto progride no seu aprendizado.
          </span>
        </div>
      </Menu>
    </div>
  )
}

export default MenuExp
