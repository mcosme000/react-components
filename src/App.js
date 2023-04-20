import Dropdown from './components/Dropdown'

const App = () => {

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
      <Dropdown options={options}/>
    </div>
  )
}

export default App;
