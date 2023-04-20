import { useState } from 'react'

const Dropdown = ({options}) => {
  const [show, setShow] = useState(false)
  const [option, setOption] = useState('')


  const showDropdown = () => {
    setShow(!show)
  }

  const handleOption = (option) => {
    setOption(option.label)
    setShow(false)
  }

  const select = option || 'Select'
  const renderOptions = options.map((option, index) => {
    return (
      <div key={index}>
        <p onClick={() => handleOption(option)}>{option.label}</p>
      </div>
    )
  })

  return (
    <div className="p-5">
      <h1>Choose the spicy level 🔥</h1>
      <h3 onClick={showDropdown}>{select}</h3>
      <div>
        {show && renderOptions }
      </div>
    </div>
  )
}

export default Dropdown;
