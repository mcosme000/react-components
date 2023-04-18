import { BiCaretDown } from "react-icons/bi";
import { BiCaretUp } from "react-icons/bi";

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <div>
        <div className="flex items-center">
          <h3>{item['label']}</h3>
          <BiCaretDown />
        </div>
        <p>{item['content']}</p>
      </div>
    )
  })

  return(
    <div>
      {renderedItems}
    </div>
  )
}

export default Accordion
