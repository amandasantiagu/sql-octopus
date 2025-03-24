import * as React from 'react'

interface Props {
  data: any
}

const CombiningPairs: React.FC<Props> = ({ data }) => {
  const [pairs, setPairs] = React.useState<any[]>([])
  const [draggingIndex, setDraggingIndex] = React.useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  // Handle drag start
  const handleDragStart = (index: number) => {
    setDraggingIndex(index)
  }

  // Handle drag over (hover)
  const handleDragOver = (index: number) => {
    setHoveredIndex(index)
  }

  // Handle drop
  const handleDrop = (targetIndex: number) => {
    console.log('draggingIndex', draggingIndex, 'targetIndex', targetIndex)
    if (draggingIndex === null || targetIndex === null || draggingIndex === targetIndex) return

    setPairs((prev) => {
      // Cria uma cópia imutável do array
      const updatedPairs = prev.map((pair) => ({ ...pair }))

      // Troca apenas os descriptions
      const temp = updatedPairs[targetIndex].description
      updatedPairs[targetIndex].description = updatedPairs[draggingIndex].description
      updatedPairs[draggingIndex].description = temp

      console.log('Updated Pairs:', updatedPairs) // Log para verificar
      return updatedPairs
    })

    // Reseta os índices
    setDraggingIndex(null)
    setHoveredIndex(null)
  }

  // Inicializa os pares com descriptions randomizados
  React.useEffect(() => {
    if (pairs.length > 0) return

    const shuffledDescriptions = [...data.options]
      .sort(() => Math.random() - 0.5)
      .map((option: any) => option.description)

    const initialPairs = data.options.map((option: any, index: number) => ({
      label: option.label,
      description: shuffledDescriptions[index],
    }))

    setPairs(initialPairs)
  }, [data.options, pairs])

  return (
    <div className="w-full flex flex-col gap-6 py-4">
      <span className="text-white text-base w-full">{data?.description}</span>

      <div className="flex flex-col w-full gap-4">
        <div className="w-full flex flex-col flex-wrap gap-4">
          {pairs.map((pair: any, index: number) => (
            <div
              key={pair.label}
              className={`flex flex-col items-center text-center gap-2 p-2 rounded-lg ${
                hoveredIndex === index ? 'bg-primary-200' : 'bg-primary-500'
              } text-white`}
              onDragOver={(e) => {
                e.preventDefault()
                handleDragOver(index)
              }}
              onDragLeave={() => setHoveredIndex(null)}
              onDrop={() => handleDrop(index)}
            >
              <div className="uppercase col-span-2 text-xs">{pair.label}</div>

              <div
                className={`p-1 rounded-lg w-full text-xs cursor-pointer ${
                  pair?.description ? 'bg-white text-primary' : 'bg-primary-50 text-primary-30'
                }`}
                draggable
                onDragStart={() => handleDragStart(index)}
              >
                {pair?.description || 'Arraste aqui'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CombiningPairs
