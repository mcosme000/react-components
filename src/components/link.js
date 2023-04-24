import { useContext } from 'react'
import NavigationContext from '../context/navigation'

const Link = ({ to, children }) => {
  // I call the NavigationContext and use destructuring to take only the function
  const { Navigate } = useContext(NavigationContext)

  const handleClick = (e) => {
    e.preventDefault()
    Navigate(to)
  }

  return (
    <a onClick={handleClick}>{children}</a>
  )
}

export default Link;
