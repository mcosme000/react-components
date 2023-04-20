import { useState } from 'react'

const Dropdown = ({options, selection, onSelect}) => {
  const [show, setShow] = useState(false)

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
        <p onClick={() => handleOption(option)} className="px-3 py-2 border-b">{option.label}</p>
      </div>
    )
  })

  return (
    <div className="p-5 w-80">
      <h1 className="mb-1.5 p-1">Choose the spicy level 🔥</h1>
      <div>
        <h3 onClick={showDropdown} className="px-3 py-2 border-2 rounded cursor-pointer">{select}</h3>
        {show && <div className="mt-1.5 border-2 rounded cursor-pointer">{renderOptions}</div>}
      </div>
    </div>
  )
}

export default Dropdown;
