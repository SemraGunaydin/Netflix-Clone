import React from 'react'

const Error = ({info}) => {
  return (
    <div className="text-center my-20 ">
        <p className="mb-10">Sorry, unexpected error occured</p>

        <p className="font-bold p-2">{info}</p>

        <p className="mt-5">Please, try again later.</p>
    </div>
  )
}

export default Error;