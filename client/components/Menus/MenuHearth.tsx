import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import { FaHeart } from 'react-icons/fa6'
import { PiCurrencyEthFill } from 'react-icons/pi'
import { CardStyles } from '@/styles/headerStyles'
import { useAuth } from '@/contexts/useAuth'
import { useRequest } from '@/contexts/RequestContext'
import { useToast } from '@/contexts/toast'
import { User } from '@/types/User'

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
  const [loading, setLoading] = React.useState(false)

  const open = Boolean(anchorEl)
  const { fetchRequest } = useRequest()
  const { showToast } = useToast()
  const { user, updateUser } = useAuth()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const addLife = async () => {
    setLoading(true)
    try {
      await fetchRequest(`users/${user?.id}/add-life`, {
        method: 'POST',
      })

      await fetchRequest(`users/${user?.id}/remove-exp`, {
        method: 'POST',
        body: { exp: -100 },
      })

      const currentUser = {
        ...user,
        life: (user?.life || 0) + 1,
        exp: user?.exp && user?.exp - 100,
      } as User

      updateUser(currentUser)

      handleClose()

      showToast('Vida adicionada com sucesso', 'success')
    } catch (error) {
      showToast(error?.message || 'Erro na requisição', 'error')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const hasBtn = React.useMemo(() => {
    if (!user || !user.life || !user.exp) return true

    return !!(user?.life === 3 || (user?.life < 3 && user?.exp < 100))
  }, [user])

  const messageLifes = React.useMemo(() => {
    if (user?.life === 3) return 'Você está com todas as 3 vidas!'

    if (user?.life === 0) return 'Recupere vidas! ou espere elas recarregarem novamente'

    return 'Você está com 2 vidas! Ainda é possível continuar, mas cuidado: a cada erro, uma vida será perdida.'
  }, [user?.life])

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
        <FaHeart className="text-red-600" size={20} /> {user?.life || 0}
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
              <FaHeart
                className={user?.life && user?.life === 3 ? 'text-red-600' : 'text-red-950'}
                size={30}
              />
              <FaHeart
                className={user?.life && user?.life > 1 ? 'text-red-600' : 'text-red-950'}
                size={30}
              />
              <FaHeart className={user?.life === 0 ? 'text-red-950' : 'text-red-600'} size={30} />
            </div>

            <span className="text-white text-base">{messageLifes}</span>
          </div>

          <Button
            className="w-full text-base"
            disabled={hasBtn}
            sx={stylesRecoveringLives}
            onClick={addLife}
          >
            <span style={{ flex: 1, textAlign: 'center' }}>Recuperar vidas</span>

            {!hasBtn && (
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
