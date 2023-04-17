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
  small
  }) => {

  const classes = classnames('px-3 py-2 text-sm tracking-wide shadow-custom border-black border-2 mb-3 text-white', {
    'text-black': primary,
    'bg-gray-700': secondary,
    'bg-blue-500': success,
    'bg-red-600': cancel,
    'rounded-md': rounded,
    'rounded-full': pill,
    'max-w-xs': large,
    'text-xs px-3 py-1 font-bold': small
    });

  return (
    <button className={classes}>{children}</button>
  )
}

export default Button
