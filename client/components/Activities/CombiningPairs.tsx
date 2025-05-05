import React, { useState, useEffect } from 'react'
import { DndContext, useDraggable, useDroppable, DragEndEvent } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

interface Props {
  data: any
  onChange: (newAnswer: any) => void
}

const Draggable: React.FC<{
  id: string
  children: React.ReactNode
}> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  )
}

const Droppable: React.FC<{
  id: string
  children: React.ReactNode
}> = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({ id })

  const style = {
    backgroundColor: isOver ? '#44A1A0' : undefined,
    borderRadius: '1rem',
  }

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  )
}

const CombiningPairs: React.FC<Props> = ({ data, onChange }) => {
  const [pairs, setPairs] = useState<any[]>([])
  const [draggedId, setDraggedId] = useState<string | null>(null)

  const handleDragStart = ({ active }: { active: any }) => {
    setDraggedId(active.id)
  }

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) {
      setDraggedId(null)
      return
    }

    // Encontra o índice do item arrastado e do alvo
    const draggedIndex = pairs.findIndex((pair) => pair.value === active.id)
    const targetIndex = pairs.findIndex((pair) => pair.label === over.id)

    if (draggedIndex === -1 || targetIndex === -1) {
      setDraggedId(null)
      return
    }

    const newPairs = [...pairs]
    const temp = newPairs[targetIndex].value
    newPairs[targetIndex].value = newPairs[draggedIndex].value
    newPairs[draggedIndex].value = temp

    setPairs(newPairs)
    onChange(newPairs)
    setDraggedId(null)
  }

  useEffect(() => {
    if (pairs.length > 0) return

    const shuffledDescriptions = [...data.data]
      .sort(() => Math.random() - 0.5)
      .map((option: any) => option.value)

    const initialPairs = data.data.map((option: any, index: number) => ({
      label: option.label,
      value: shuffledDescriptions[index],
    }))

    setPairs(initialPairs)
    onChange(initialPairs)
  }, [data.data, onChange, pairs.length])

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="w-full flex flex-col gap-6 py-4">
        <span className="text-white text-base w-full">{data?.description}</span>

        <div className="flex flex-col w-full gap-2">
          {pairs.map((pair: any) => (
            <div
              key={pair.label}
              className="flex flex-col items-center text-center gap-2 p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-200"
            >
              <div className="uppercase col-span-2 text-xs">{pair.label}</div>

              <Droppable id={pair.label}>
                <div
                  className={`p-1 rounded-lg w-full min-h-8 ${!pair.value ? 'bg-primary-50 text-primary-30' : ''}`}
                >
                  {pair.value ? (
                    <Draggable id={pair.value}>
                      <div className="bg-white text-primary rounded-lg p-2 text-xs cursor-move">
                        {pair.value}
                      </div>
                    </Draggable>
                  ) : (
                    <div className="text-xs">Arraste aqui</div>
                  )}
                </div>
              </Droppable>
            </div>
          ))}
        </div>
      </div>
    </DndContext>
  )
}

export default CombiningPairs
