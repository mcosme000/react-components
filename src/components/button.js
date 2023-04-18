import classnames from 'classnames'

const Button = ({
  children,
  primary,
  secondary,
  success,
  cancel,
  rounded,
  pill,
  large,
  small,
  ...rest
  }) => {

  const classes = classnames(rest.className, 'flex items-center px-3 py-2 text-sm tracking-wide shadow-custom border-black border-2 mb-3', {
    'text-black': primary,
    'bg-gray-700 text-white': secondary,
    'bg-blue-500 text-white': success,
    'bg-red-600 text-white': cancel,
    'rounded-md': rounded,
    'rounded-full': pill,
    'max-w-xs': large,
    'text-xs px-3 py-1 font-bold': small
    });

  return (
    <button {...rest} className={classes}>{children}</button>
  )
}

export default Button
