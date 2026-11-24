import React from 'react'

export default function Footer() {
  return (
    <footer className="footer footer-bar bg-black">
      <div className="container text-foot text-center " style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        columnGap:'10px'
      }}>
        <p className="mb-0 text-white-50">© 2013 - {new Date().getFullYear()}</p>  
      </div>
    </footer>
  )
}
