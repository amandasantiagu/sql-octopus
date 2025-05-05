import React from 'react'

interface EmptyCardProps {
  message: string
}

const EmptyCard: React.FC<EmptyCardProps> = ({ message = '' }) => {
  return (
    <div className="flex flex-col gap-2 p-4 border rounded-lg bg-primary-200 shadow-md">
      {message}
    </div>
  )
}

export default EmptyCard
