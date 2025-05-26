import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import { FaHeart } from 'react-icons/fa6'
import { PiCurrencyEthFill } from 'react-icons/pi'
import { CardStyles } from '@/styles/headerStyles'
import { useAuth } from '@/contexts/useAuth'

const stylesRecoveringLives = {
  height: '2.8rem',
  background: '#0D5C63',
  color: '#f2f2f2',
  fontSize: '1rem',
  width: '100%',
  textTransform: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 600,
  borderRadius: '0.5rem',
}

const MenuHearth: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const { user, accessToken } = useAuth()

  const [life, setLifes] = React.useState<number>(user?.life || 0)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const messageLifes = React.useMemo(() => {
    if (life === 3) return 'Você está com todas as 3 vidas!'

    if (life === 0) return 'Recupere vidas! ou espere elas recarregarem novamente'

    return 'Você está com 2 vidas! Ainda é possível continuar, mas cuidado: a cada erro, uma vida será perdida.'
  }, [life])

  return (
    <div>
      <Button
        id="menu-hearth"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        sx={{ ...CardStyles, color: '#dc2626' }}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FaHeart className="text-red-600" size={20} /> 3
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
          'aria-labelledby': 'menu-hearth',
        }}
      >
        <div className="w-full items-center p-6 justify-center flex flex-col gap-9">
          <div className="gap-4 flex flex-col">
            <div className="w-full flex gap-4 justify-center">
              <FaHeart className={life === 3 ? 'text-red-600' : 'text-red-950'} size={30} />
              <FaHeart className={life > 1 ? 'text-red-600' : 'text-red-950'} size={30} />
              <FaHeart className={life === 0 ? 'text-red-950' : 'text-red-600'} size={30} />
            </div>

            <span className="text-white text-base">{messageLifes}</span>
          </div>

          <Button className="w-full text-base" disabled={life === 3} sx={stylesRecoveringLives}>
            <span style={{ flex: 1, textAlign: 'center' }}>Recuperar vidas</span>

            {life !== 3 && (
              <span className="text-yellowIcon flex flex-row items-center">
                <PiCurrencyEthFill className="text-yellowIcon" size={20} />
                100
              </span>
            )}
          </Button>
        </div>
      </Menu>
    </div>
  )
}

export default MenuHearth
