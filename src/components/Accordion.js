import { BiCaretDown } from "react-icons/bi";
import { BiCaretUp } from "react-icons/bi";
import { useState } from 'react'
import '../styles/accordion.css'

const Accordion = ({ items }) => {
  // we set the first section as expanded
  const [expanded, setExpanded] = useState(0)

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expanded

    return (
      <div key={item.id} className={isExpanded ? 'expanded' : 'collapsed'}>
        <div className="flex items-center">
          <h3 onClick={() => setExpanded(index)}>{item['label']}</h3>
          {isExpanded ? <BiCaretUp /> : <BiCaretDown />}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    )
  })

  return(
    <div className="w-auto bg-blue-300">
      {renderedItems}
    </div>
  )
}

export default Accordion

// About the const content:
// when comparing with &&, it will return the last truthy value
