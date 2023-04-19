import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { useState } from 'react'
import '../styles/accordion.css'

const Accordion = ({ items }) => {
  // we set the first section as expanded
  const [expanded, setExpanded] = useState(-1)

  const handleClick= (index) => {
    expanded === index ? setExpanded(-1) : setExpanded(index)
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expanded

    return (
      <div key={item.id}>
        <div className="flex items-center justify-between p-2 border-b-2 cursor-pointer">
          <h3 onClick={() => handleClick(index)} className="font-bold">{item['label']}</h3>
          <span className="mr-4 text-2xl text-blue-800">{isExpanded ? <BiCaretUp /> : <BiCaretDown />}</span>
        </div>
        {isExpanded && <div className="p-4 border-l-4 border-blue-400 bg-white">{item.content}</div>}
      </div>
    )
  })

  return(
    <div className="accordion w-auto bg-slate-50">
      {renderedItems}
    </div>
  )
}

export default Accordion

// About the const content:
// when comparing with &&, it will return the last truthy value
