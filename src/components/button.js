import '../styles/button.css'

const Button = ({
  children,
  primary,
  secondary,
  rounded,
  outline
  }) => {
  return (
    <button>{children}</button>
  )
}

export default Button
