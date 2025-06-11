import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { FaBookOpen, FaCheck } from 'react-icons/fa6'
import { TbLockHeart } from 'react-icons/tb'
import DialogActivityDetails from './Dialog/DialogActivityDetails'
import CircularWithFixedValue from './CircularWithFixedValue'

import DialogInfoContent from './Dialog/DialogInfoContent'
import { ModuleType } from '@/types/Module'
import { useRequest } from '@/contexts/RequestContext'
import DialogExercise from './Dialog/DialogExercise'

const AccordionComponent: React.FC = () => {
  const [currentContent, setCurrentContent] = React.useState<any>(undefined)
  const [openLesson, setOpenLesson] = React.useState<boolean>(false)
  const [openModalDetails, setOpenModalDetails] = React.useState<boolean>(false)
  const [openInfoContent, setOpenInfoContent] = React.useState<boolean>(false)

  const handleClose = () => {
    setCurrentContent(undefined)
    setOpenLesson(false)
    setOpenModalDetails(false)
    setOpenInfoContent(false)
  }

  const { fetchRequest } = useRequest()
  const [loading, setLoading] = React.useState(false)
  const [modules, setModules] = React.useState<ModuleType[]>([])
  const [contents, setContents] = React.useState<any[]>([])

  const getContents = async () => {
    setLoading(true)
    try {
      const response = await fetchRequest('content', {
        method: 'GET',
      })

      setContents(response || [])
    } catch (error) {
      console.log('Erro na requisição:', error)
    } finally {
      setLoading(false)
    }
  }

  const getModules = async () => {
    setLoading(true)
    try {
      const response = await fetchRequest('module', {
        method: 'GET',
      })

      setModules(response || [])
    } catch (error) {
      console.log('Erro na requisição:', error)
    } finally {
      setLoading(false)
    }
  }

  const calculateProgress = (content: any[]) => {
    if (content?.length === 0) return 0

    const completedCount = content.filter((item) => item.completed).length
    return (completedCount / content.length) * 100
  }

  const filterContentsInModule = (moduleId: string) => {
    if (contents?.length === 0) return []

    return contents.filter((item) => item.moduleId === moduleId)
  }

  const getIconForLesson = (item: any, index: number, lessons: any[]) => {
    const listContent = filterContentsInModule(item.id)
    if (item?.completed && index === 0) {
      return <CircularWithFixedValue value={100} />
    }

    if (!item.completed && index === 0 && listContent?.length > 0) {
      const progress = calculateProgress(listContent)
      return <CircularWithFixedValue value={progress} />
    }

    if (index > 0 && !modules[index - 1]?.completed) {
      return <TbLockHeart className="text-primary-300" size={32} />
    }

    const progress = calculateProgress(listContent)
    return <CircularWithFixedValue value={progress} />
  }

  React.useEffect(() => {
    getModules()
    getContents()
  }, [])

  return (
    <div
      id="list-learn"
      className="flex flex-col w-full gap-6 p-1"
      style={{
        maxHeight: 'calc(100vh - 200px)',
        overflowY: 'auto',
      }}
    >
      <DialogExercise open={openLesson} onClose={handleClose} content={currentContent} />

      <DialogActivityDetails
        open={openModalDetails}
        content={currentContent}
        onClose={handleClose}
        onOpenLesson={() => setOpenLesson(true)}
      />

      <DialogInfoContent open={openInfoContent} content={currentContent} onClose={handleClose} />

      {modules?.length > 0 &&
        modules.map((item, index) => (
          <Accordion
            key={item.id}
            disabled={index !== 0 && !modules[index - 1]?.completed}
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
                {getIconForLesson(item, index, modules)}

                {item.label}
              </span>
            </AccordionSummary>

            {filterContentsInModule(item.id).length > 0 &&
              filterContentsInModule(item.id).map((content, contentIndex) => {
                const getContentIcon = () => {
                  const list = filterContentsInModule(item.id)
                  if (content.completed) {
                    return <FaCheck className="text-primary-300" size={20} />
                  }

                  if (contentIndex === 0) {
                    return null
                  }

                  const previousContent = list[contentIndex - 1]
                  if (previousContent?.completed) {
                    return null
                  }

                  const previousToPreviousContent = list[contentIndex - 2]
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
                        onClick={() => {
                          setCurrentContent(content)
                          setOpenInfoContent(true)
                        }}
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
                            contentIndex > 0 &&
                            filterContentsInModule(item.id)[contentIndex - 1]?.completed

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
