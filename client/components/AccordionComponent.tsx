import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { FaBookOpen, FaCheck } from 'react-icons/fa6'
import { TbLockHeart, TbLockOpen } from 'react-icons/tb'
import DialogActivityDetails from './Dialog/DialogActivityDetails'
import CircularWithFixedValue from './CircularWithFixedValue'

import DialogInfoContent from './Dialog/DialogInfoContent'
import { ModuleType } from '@/types/Module'
import { useRequest } from '@/contexts/RequestContext'
import DialogExercise from './Dialog/DialogExercise'

const AccordionComponent: React.FC = () => {
  const { fetchRequest } = useRequest()
  const [currentContent, setCurrentContent] = React.useState<any>(undefined)
  const [openLesson, setOpenLesson] = React.useState<'redo' | 'view' | 'start' | null>(null)
  const [openModalDetails, setOpenModalDetails] = React.useState<boolean>(false)
  const [openInfoContent, setOpenInfoContent] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState(false)
  const [modules, setModules] = React.useState<ModuleType[]>([])
  const [contents, setContents] = React.useState<any[]>([])
  const [userProgressContents, setUserProgressContents] = React.useState<any[]>([])

  const handleClose = () => {
    setCurrentContent(undefined)
    setOpenLesson(null)
    setOpenModalDetails(false)
    setOpenInfoContent(false)
  }

  const isModuleUnlocked = (moduleId: string) => {
    const moduleContents = filterContentsInModule(moduleId)
    return moduleContents.every((content) =>
      userProgressContents.some((progress) => progress.contentId === content.id)
    )
  }

  const getUserProgress = async () => {
    setLoading(true)
    try {
      const response = await fetchRequest(`user-progress`, {
        method: 'GET',
      })

      console.log('response', response)

      setUserProgressContents(response || [])
    } catch (error) {
      console.log('Erro na requisição:', error)
    } finally {
      setLoading(false)
    }
  }

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

  const calculateProgress = (moduleContents: any[]) => {
    if (moduleContents?.length === 0) return 0

    const completedCount = moduleContents.filter((content) =>
      userProgressContents.some((progress) => progress.contentId === content.id)
    ).length

    return (completedCount / moduleContents.length) * 100
  }

  const filterContentsInModule = (moduleId: string) => {
    if (contents?.length === 0) return []

    return contents.filter((item) => item.moduleId === moduleId)
  }

  const getIconForLesson = (module: any, index: number, modules: any[]) => {
    const moduleContents = filterContentsInModule(module.id)
    const progress = calculateProgress(moduleContents)

    if (progress === 100) {
      return <CircularWithFixedValue value={100} />
    }

    if (index === 0) {
      return <CircularWithFixedValue value={progress} />
    }

    if (index > 0 && !isModuleUnlocked(modules[index - 1]?.id)) {
      return <TbLockHeart className="text-primary-300" size={32} />
    }

    return <CircularWithFixedValue value={progress} />
  }

  const getContentIcon = (isContentCompleted: boolean, previousContentCompleted: boolean) => {
    if (isContentCompleted) {
      return <FaCheck className="text-primary-300" size={20} />
    }

    if (previousContentCompleted) {
      return <TbLockOpen className="text-primary-300" size={20} />
    }

    return <TbLockHeart className="text-primary-300" size={20} />
  }

  React.useEffect(() => {
    getModules()
    getContents()
    getUserProgress()
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
      <DialogExercise
        open={!!openLesson}
        typeExercises={openLesson}
        onClose={handleClose}
        content={currentContent}
        onUpdateContents={() => {
          getModules()
          getContents()
          getUserProgress()
        }}
      />

      <DialogActivityDetails
        open={openModalDetails}
        content={currentContent}
        onClose={handleClose}
        onOpenLesson={(value) => setOpenLesson(value)}
      />

      <DialogInfoContent open={openInfoContent} content={currentContent} onClose={handleClose} />

      {modules?.length > 0 &&
        modules.map((module, index) => {
          const isUnlocked = index === 0 || isModuleUnlocked(modules[index - 1]?.id)
          const contents = filterContentsInModule(module.id)

          return (
            <Accordion
              key={module.id}
              disabled={!isUnlocked}
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
                aria-controls={`panel-content-${module.id}`}
                id={`panel-header-${module.id}`}
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
                  {getIconForLesson(module, index, modules)}
                  {module.label}
                </span>
              </AccordionSummary>

              {contents.length > 0 &&
                contents.map((content, contentIndex) => {
                  const isContentCompleted = userProgressContents.some(
                    (progress) => progress.contentId === content.id
                  )
                  const previousContentCompleted =
                    contentIndex === 0 ||
                    userProgressContents.some(
                      (progress) => progress.contentId === contents[contentIndex - 1]?.id
                    )

                  return (
                    <AccordionDetails
                      key={content.id}
                      className="bg-white flex flex-row items-center justify-between w-full cursor-pointer"
                      sx={{
                        padding: '16px',
                        borderBottom: '1px solid #ECEEEE',
                      }}
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
                            if (isContentCompleted || previousContentCompleted) {
                              setCurrentContent(content)
                              if (isContentCompleted) {
                                const contentInUserProgress =
                                  userProgressContents.length > 0
                                    ? userProgressContents.find(
                                        (item) => item.contentId === content.id
                                      )
                                    : null

                                const currentContent = contentInUserProgress
                                  ? {
                                      ...content,
                                      ...contentInUserProgress,
                                      id: content.id,
                                      userProgressId: contentInUserProgress.id,
                                    }
                                  : content

                                setCurrentContent(currentContent)

                                setOpenModalDetails(true)
                              } else {
                                setOpenLesson('start')
                              }
                            }
                          }}
                        >
                          <span className="flex-grow">{content.label}</span>
                          <span className="justify-end">
                            {getContentIcon(isContentCompleted, previousContentCompleted)}
                          </span>
                        </div>
                      </div>
                    </AccordionDetails>
                  )
                })}
            </Accordion>
          )
        })}
    </div>
  )
}

export default AccordionComponent
