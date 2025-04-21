import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { PiListBold } from 'react-icons/pi'
import { FaBookOpen, FaCheck } from 'react-icons/fa6'
import { TbLockHeart } from 'react-icons/tb'
import DialogActivityDetails from './Dialog/DialogActivityDetails'
import DialogActivity from './Dialog/DialogActivity'
import CircularWithFixedValue from './CircularWithFixedValue'
import { ModuleType } from '@/types/Module'

const AccordionComponent: React.FC = () => {
  const [currentContent, setCurrentContent] = React.useState<any>(undefined)
  const [openLesson, setOpenLesson] = React.useState<boolean>(false)
  const [openModalDetails, setOpenModalDetails] = React.useState<boolean>(false)

  const handleClose = () => {
    setCurrentContent(undefined)
    setOpenLesson(false)
    setOpenModalDetails(false)
  }

  const calculateProgress = (content: any[]) => {
    const completedCount = content.filter((item) => item.completed).length
    return (completedCount / content.length) * 100
  }

  const getIconForLesson = (item: any, index: number, lessons: any[]) => {
    if (item.completed && index === 0) {
      return <CircularWithFixedValue value={100} />
    }

    if (!item.completed && index === 0) {
      const progress = calculateProgress(item.content)
      return <CircularWithFixedValue value={progress} />
    }

    if (index > 0 && !lessons[index - 1]?.completed) {
      return <TbLockHeart className="text-primary-300" size={32} />
    }

    const progress = calculateProgress(item.content)
    return <CircularWithFixedValue value={progress} />
  }

  const lessons: ModuleType[] = [
    {
      label: 'Noções básicas de SQL',
      id: 123,
      content: [
        {
          label: 'Linhas e colunas',
          id: 1,
          moduleId: 123,
          completed: new Date(),
          duration: 2330,
          hits: 88,
          exp: 50,
        },
        {
          label: 'Seleção de dados',
          id: 2,
          moduleId: 123,
          completed: new Date(),
          duration: 2330,
          hits: 88,
          exp: 50,
        },
        {
          label: 'Agrupamento de dados',
          id: 3,
          moduleId: 123,
          completed: new Date(),
          duration: 2330,
          hits: 88,
          exp: 50,
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
          exp: 60,
          moduleId: 122213,
          id: 1,
          hits: 98,
        },
        {
          label: 'Seleção de dados',
          id: 2,
          completed: null,
          moduleId: 122213,
        },
        {
          label: 'Agrupamento de dados',
          id: 3,
          completed: null,
          moduleId: 122213,
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
          moduleId: 1223453,
        },
        {
          label: 'Seleção de dados',
          id: 2,
          completed: null,
          moduleId: 1223453,
        },
        {
          label: 'Agrupamento de dados',
          id: 3,
          completed: null,
          moduleId: 1223453,
        },
      ],
      completed: null,
    },
  ]

  return (
    <div
      id="list-learn"
      className="flex flex-col w-full gap-6 p-1"
      style={{
        maxHeight: 'calc(100vh - 200px)',
        overflowY: 'auto',
      }}
    >
      <DialogActivity open={openLesson} onClose={handleClose} content={currentContent} />

      <DialogActivityDetails
        open={openModalDetails}
        content={currentContent}
        onClose={handleClose}
        onOpenLesson={() => setOpenLesson(true)}
      />

      {lessons.map((item, index) => (
        <Accordion
          key={item.id}
          disabled={index !== 0 && !lessons[index - 1]?.completed}
          className="rounded border-none shadow-none flex flex-col"
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
              {getIconForLesson(item, index, lessons)}

              {item.label}
            </span>
          </AccordionSummary>

          {item.content.map((content, contentIndex) => {
            const getContentIcon = () => {
              if (content.completed) {
                return <FaCheck className="text-primary-300" size={20} />
              }

              if (contentIndex === 0) {
                return null
              }

              const previousContent = item.content[contentIndex - 1]
              if (previousContent?.completed) {
                return null
              }

              const previousToPreviousContent = item.content[contentIndex - 2]
              if (previousToPreviousContent?.completed) {
                return <TbLockHeart className="text-primary-300" size={20} />
              }

              return <TbLockHeart className="text-primary-300" size={20} />
            }

            return (
              <AccordionDetails
                className="bg-white flex flex-row items-center justify-between w-full cursor-pointer"
                sx={{
                  padding: '16px',
                  borderBottom: '1px solid #ECEEEE',
                }}
                key={content.id}
              >
                <div className="flex flex-row items-center gap-4 w-full">
                  <div
                    className="bg-primary-200 p-2 rounded-full shadow-lg"
                    style={{
                      boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                    }}
                  >
                    <FaBookOpen className="text-white" />
                  </div>

                  <div
                    className="flex flex-row justify-between items-center w-full"
                    onClick={() => {
                      const isFirstContent = contentIndex === 0
                      const previousCompleted =
                        contentIndex > 0 && item.content[contentIndex - 1]?.completed

                      if (content.completed) {
                        setCurrentContent(content)
                        setOpenModalDetails(true)
                      } else if (isFirstContent || previousCompleted) {
                        setCurrentContent(content)
                        setOpenLesson(true)
                      }
                    }}
                  >
                    <span className="flex-grow"> {content.label}</span>
                    <span className="justify-end">{getContentIcon()}</span>
                  </div>
                </div>
              </AccordionDetails>
            )
          })}
        </Accordion>
      ))}
    </div>
  )
}

export default AccordionComponent
