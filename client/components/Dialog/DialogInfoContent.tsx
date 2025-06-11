import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import { IconButton } from '@mui/material'
import { IoMdClose } from 'react-icons/io'
import Select from '../templates/Select'
import All from '../templates/All'
import Exists from '../templates/Exists'
import NaturalJoin from '../templates/NaturalJoin'
import NotIn from '../templates/NotIn'
import Some from '../templates/Some'
import Union from '../templates/Union'
import Update from '../templates/Update'
import Where from '../templates/Where'
import OrderBy from '../templates/OrderBy'
import UnnaturalJoin from '../templates/UnnaturalJoin'
import Grant from '../templates/Grant'
import Restrictions from '../templates/Restrictions'
import OuterJoin from '../templates/OuterJoin'
import Revoke from '../templates/Revoke'

interface Props {
  open: boolean
  content: any
  onClose: () => void
}

const DialogInfoContent: React.FC<Props> = ({ open, content, onClose }) => {
  const template = React.useMemo(() => {
    if (!content?.label) return

    switch (content.label) {
      case 'Selecionando dados':
        return <Select />
      case 'Agrupamento de dados':
        return <All />
      case 'exists':
        return <Exists />
      case 'natural-join':
        return <NaturalJoin />
      case 'not-in':
        return <NotIn />
      case 'some':
        return <Some />
      case 'Unindo dados':
        return <Union />
      case 'update':
        return <Update />
      case 'Filtrando dados':
        return <Where />
      case 'Ordenando dados':
        return <OrderBy />
      case 'unnatural-join':
        return <UnnaturalJoin />
      case 'grant':
        return <Grant />
      case 'restrictions':
        return <Restrictions />
      case 'outer-join':
        return <OuterJoin />
      case 'revoke':
        return <Revoke />
      default:
        return <Revoke />
    }
  }, [content])

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth="lg"
      sx={{
        '& .MuiDialog-paper': {
          minWidth: '100%',
          background: '#0d5c63',
          minHeight: '100vh',
        },
      }}
    >
      <div className="flex flex-col gap-4 py-2">
        <div className="flex w-full gap-4 items-center p-2">
          <IconButton aria-label="close" onClick={onClose}>
            <IoMdClose className="text-gray-300" />
          </IconButton>

          <span className="text-white font-semibold w-full flex items-center">
            {content?.label}
          </span>
        </div>

        <hr className="border-0 h-[0.2rem] bg-primary-100 rounded-full" />
      </div>

      <div className="p-2 w-full flex flex-col items-center text-white h-max">{template}</div>
    </Dialog>
  )
}

export default DialogInfoContent
