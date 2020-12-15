import React from 'react'

const Button = ({
  onClick,
  type = 'button',
  style,
  className,
  children,
}) => (
  <button
    className={className}
    style={style}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button