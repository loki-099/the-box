import React, { useEffect, useState } from 'react'

const Box = ({width, height, children}) => {

  return (
    <div className={`${width} ${height} bg-black ring-[12px] ring-primaryWhite border-primaryBlack border-[12px] ring-inset p-12`}>
      {children}
    </div>
  )
}

export default Box