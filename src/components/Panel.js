import classNames from 'classnames';

const Panel = ({ children, className, ...rest }) => {
  const finalClassNames = classNames(
    'px-3 py-2 border-2 rounded cursor-pointer',
    className
  );

  return (
    <div {...rest} className={finalClassNames}>{children}</div>
  )
}

export default Panel;
