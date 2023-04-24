import Link from './components/link'

const App = () => {

  return (
    <div className="components m-3">
      <h1>App</h1>
      <div className="flex flex-col">
        <Link to="/button">Button</Link>
        <Link to="/accordion">Accordion</Link>
        <Link to="/dropdown">Dropdown</Link>
      </div>
    </div>
  )
}

export default App;
