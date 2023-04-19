import ButtonPage from './pages/ButtonPage'
import Accordion from './components/Accordion'

const App = () => {

  const items = [
    {
      id: 1,
      label: 'Lemon Tarts',
      content: 'THe lemon is amazin in tarts and smells good'
    },
    {
      id: 2,
      label: 'About Tailwind',
      content: 'Best practices and things to avoid while using Tailwind'
    },
    {
      id: 3,
      label: 'Can I use CSS on a project?',
      content: 'Should I go to CSS or use SASS?'
    }
  ]

  return (
    <div className="p-5">
      <Accordion items={items}/>
      <ButtonPage />

    </div>
  )
}

export default App;
