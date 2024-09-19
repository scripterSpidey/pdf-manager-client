import React from 'react'


type AppButtonProps = {
  text: string,
  click: () => void;
  className?: string
}

const AppButton = ({ text, click, className }: AppButtonProps) => {
  return (
    <button
      onClick={click}
      className={`bg-primary-color h-auto block py-2 px-5 rounded-md text-white hover:bg-white hover:text-primary-color transition-colors duration-300 font-semibold text-xl ${className}`}>
      {text}
    </button>
  )
}

export default AppButton