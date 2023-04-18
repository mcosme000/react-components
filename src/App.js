import ButtonPage from './pages/ButtonPage'
import Accordion from './components/Accordion'

const App = () => {

  const items = [
    {
      label: 'Lemon Tarts',
      content: 'THe lemon is amazin in tarts and smells good'
    },
    {
      label: 'About Tailwind',
      content: 'Best practices and things to avoid while using Tailwind'
    },
    {
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
