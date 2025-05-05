import * as React from 'react'
import { FaCircle } from 'react-icons/fa6'

interface ListWithCircleProps {
  title: string
  items: { label: string; description: string }[]
}

const ListWithCircle: React.FC<ListWithCircleProps> = ({ title, items }) => {
  return (
    <div className="w-full flex-col flex gap-2">
      <h3 className="font-bold text-sm">{title}</h3>

      <ul className="flex flex-col w-full gap-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-4 ">
            <FaCircle size={10} />
            <div>
              <span className="font-medium">{item.label}</span>: {item.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListWithCircle
