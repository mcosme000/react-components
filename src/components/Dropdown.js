import { useState, useEffect, useRef } from 'react'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Panel from './Panel'

const Dropdown = ({options, selection, onSelect}) => {
  const [show, setShow] = useState(false)

  // our reference is our dropdown component
  const divEl = useRef();

  // this gets called when we first load the screen
  useEffect(() => {
    const handler = (event) => {
      // first we check if there is a reference in the component.
      if (!divEl.current) {
        return;
      }
      // if the click is not inside the dropdown, we want to hide it.
      if (!divEl.current.contains(event.target)) {
        setShow(false)
      };
    };

    document.addEventListener('click', handler, true);

    // this gets called when our dropdown is removed from the screen
    return () => {
      document.removeEventListener('click', handler)
    };
  }, []);


  const showDropdown = () => {
    setShow(!show)
  }

  const handleOption = (option) => {
    setShow(false)
    onSelect(option);
  }

  const select = selection || 'Select'

  const renderOptions = options.map((option, index) => {
    return (
      <div key={index}>
        <p onClick={() => handleOption(option)} className="px-3 py-2 rounded hover:bg-blue-200">{option.label}</p>
      </div>
    )
  })

  return (
    <div ref={divEl} className="p-5 w-80">
      <h1 className="mb-1.5 p-1">Choose the spicy level 🔥</h1>
      <div>
        <Panel onClick={showDropdown} className="flex items-center justify-between border-blue-500">
          <h3>{select}</h3>
          {show ? <BiChevronUp className="text-lg"/> : <BiChevronDown className="text-lg"/>}
        </Panel>
        {show && <Panel className="mt-1.5">{renderOptions}</Panel>}
      </div>
    </div>
  )
}

export default Dropdown;
