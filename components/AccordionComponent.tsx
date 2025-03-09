import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { PiListBold, PiListThin } from 'react-icons/pi'
import { FaCheck } from 'react-icons/fa6'
import { TbLockHeart } from 'react-icons/tb'

const AccordionComponent: React.FC = () => {
  const items = [
    {
      label: 'Noções básicas de SQL',
      id: 123,
      content: [
        {
          label: 'Linhas e colunas',
          id: 1,
          completed: new Date(),
        },
        {
          label: 'Seleção de dados',
          id: 2,
          completed: new Date(),
        },
        {
          label: 'Agrupamento de dados',
          id: 3,
          completed: new Date(),
        },
      ],
      completed: new Date(),
    },
    {
      label: 'Junções e subconsultas',
      id: 122213,
      content: [
        {
          label: 'Linhas e colunas',
          completed: new Date(),
          id: 1,
        },
        {
          label: 'Seleção de dados',
          id: 2,
          completed: null,
        },
        {
          label: 'Agrupamento de dados',
          id: 3,
          completed: null,
        },
      ],
      completed: null,
    },
    {
      label: 'Junções e subconsultas',
      id: 1223453,
      content: [
        {
          label: 'Linhas e colunas',
          id: 1,
          completed: null,
        },
        {
          label: 'Seleção de dados',
          id: 2,
          completed: null,
        },
        {
          label: 'Agrupamento de dados',
          id: 3,
          completed: null,
        },
      ],
      completed: null,
    },
  ]

  return (
    <div className="flex flex-col w-full gap-6">
      {items.map((item, index) => (
        <Accordion
          key={item.id}
          disabled={index !== 0 && !items[index - 1]?.completed}
          sx={{
            backgroundColor: '#0d5c63',
            borderRadius: '0.5rem',
            '& .MuiAccordion-root': {
              borderRadius: '0.5rem',
            },
          }}
        >
          <AccordionSummary
            aria-controls={`panel-content-${item.id}`}
            id={`panel-header-${item.id}`}
            sx={{
              backgroundColor: '#44A1A0',
              padding: '1.2rem 1rem',
              justifyContent: 'center',
              borderRadius: '0.5rem',
              '& .MuiAccordionSummary-expandIconWrapper': {
                color: 'white',
              },
            }}
          >
            <span className="text-white items-center flex justify-center gap-4 w-full">
              {item.completed ? (
                <FaCheck className="text-primary-300" size={32} />
              ) : (
                <TbLockHeart className="text-primary-300" size={32} />
              )}

              {item.label}
            </span>
          </AccordionSummary>

          {item.content.map((content) => (
            <AccordionDetails
              className="bg-white flex flex-row items-center justify-between w-full"
              sx={{
                padding: '16px',
                borderBottom: '1px solid #ECEEEE',
              }}
              key={content.id}
            >
              <div className="flex flex-row items-center gap-4">
                <div className="bg-primary-200 p-2 rounded-full">
                  <PiListBold className="text-white" />
                </div>

                {content.label}
              </div>

              {content.completed ? (
                <FaCheck className="text-primary-300" size={20} />
              ) : (
                <TbLockHeart className="text-primary-300" size={20} />
              )}
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  )
}

export default AccordionComponent
