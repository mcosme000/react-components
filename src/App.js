import Dropdown from './components/Dropdown'
import { useState } from 'react';

const App = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option.label)
  }

  const options = [
    {
      id: 1,
      label: 'I don\'t like spicy food',
      value: 'no_spicy'
    },
    {
      id: 2,
      label: 'Mild curry',
      value: 'mild'
    },
    {
      id: 3,
      label: 'I can eat spicy foods',
      value: 'spicy'
    },
    {
      id: 4,
      label: 'I like seeing the world burn',
      value: 'extra spicy'
    }
  ]


  return (
    <div className="components m-3">
      <Dropdown
        options={options}
        selection={selection}
        onSelect={handleSelect}/>
    </div>
  )
}

export default App;
