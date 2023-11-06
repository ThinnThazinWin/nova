import React from 'react'

const Label = ({name, applicant, residential}) => {
  return (
    <div className="text-md font-medium  w-1/3 after:content-['*'] after:ml-0.5 after:text-red-500">{name}</div>
  )
}

export default Label