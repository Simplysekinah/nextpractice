import Link from 'next/link'
import React from 'react'

const Notfound = () => {
  return (
    <>
    <div>
        <div>Not-found</div>
        <p>Sorry you press the wrong path</p>
        <Link href={"/"}>Return home</Link>
    </div>
    </>
  )
}

export default Notfound