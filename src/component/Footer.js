import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
    <footer className='bg-light text-center'>
        <p>Copyright &copy; ${year}. All Rights Reserved.</p>
    </footer>
    </>
  )
}

export default Footer