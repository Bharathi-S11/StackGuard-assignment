import React from 'react'

const logoUrl =
  'https://res.cloudinary.com/dmrxth4it/image/upload/v1762337976/Screenshot_2025-11-05_154537_zmhcgg.png'

const AuthLayout = ({title, subtitle, children}) => (
  <div className="auth-layout">
    <div className="auth-left">
      <div className="placeholder-box">
        <img
          src="https://res.cloudinary.com/dmrxth4it/image/upload/v1762343032/images_i6ym45.webp"
          alt="Image/Illustrate"
          className="image-style"
        />
      </div>
    </div>

    <div className="auth-right">
      <div className="auth-box">
        <div className="auth-brand">
          <img src={logoUrl} alt="logo" className="logo" />
          <h2 className="brand">Stackguard</h2>
        </div>
        <h3>{title}</h3>
        <p className="subtitle">{subtitle}</p>
        {children}
      </div>
    </div>
  </div>
)

export default AuthLayout
