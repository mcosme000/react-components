import Link from './components/link'
import Route from './components/route'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropDownPage'

const App = () => {

  return (
    <div className="components m-3">
      <h1>App</h1>
      <div className="flex flex-col">
        <Link to="/button">Button</Link>
        <Link to="/accordion">Accordion</Link>
        <Link to="/dropdown">Dropdown</Link>
        <div>
          <Route path="/accordion">
            <AccordionPage/>
          </Route>
          <Route path="/dropdown">
            <DropdownPage />
          </Route>
        </div>
      </div>
    </div>
  )
}

export default App;
