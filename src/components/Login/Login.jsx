import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Lock, Eye, EyeOff, AlertCircle, LogIn } from 'lucide-react'
import './Login.css'

// ✅ Credentials — change these anytime
const VALID_USERNAME = 'admin'
const VALID_PASSWORD = 'vikra@2024'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.')
      return
    }

    setLoading(true)
    setTimeout(() => {
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        localStorage.setItem('vikra_auth', 'true')
        onLogin()
      } else {
        setError('Invalid username or password. Please try again.')
        setLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="login-page">
      {/* Background effects */}
      <div className="login-bg" />
      <div className="login-grid" />
      <div className="login-particles">
        {[1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="login-particle" />
        ))}
      </div>
      <div className="login-wave" />

      {/* Card */}
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Logo */}
        <div className="login-logo">
          <div className="login-logo-icon">
            <svg viewBox="0 0 54 62" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="44">
              <text x="27" y="9" textAnchor="middle" fontSize="7" fontWeight="700" letterSpacing="2.5" fill="url(#llg1)" fontFamily="sans-serif">VIKRA</text>
              <polygon points="27,13 50,28 40,52 14,52 4,28" stroke="url(#llg1)" strokeWidth="1.2" fill="none"/>
              <line x1="27" y1="13" x2="27" y2="52" stroke="url(#llg2)" strokeWidth="0.8" opacity="0.5"/>
              <line x1="4" y1="28" x2="50" y2="28" stroke="url(#llg2)" strokeWidth="0.8" opacity="0.5"/>
              <line x1="27" y1="13" x2="14" y2="52" stroke="url(#llg2)" strokeWidth="0.8" opacity="0.4"/>
              <line x1="27" y1="13" x2="40" y2="52" stroke="url(#llg2)" strokeWidth="0.8" opacity="0.4"/>
              <circle cx="27" cy="28" r="2" fill="url(#llg1)"/>
              <defs>
                <linearGradient id="llg1" x1="4" y1="13" x2="50" y2="52" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0099cc"/><stop offset="1" stopColor="#00ccee"/>
                </linearGradient>
                <linearGradient id="llg2" x1="4" y1="13" x2="50" y2="52" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0099cc" stopOpacity="0.7"/><stop offset="1" stopColor="#00ccee" stopOpacity="0.7"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="login-logo-text">
            <span className="login-logo-name">VIKRA</span>
            <span className="login-logo-sub">Ocean Tech Pvt Ltd</span>
          </div>
        </div>

        {/* Heading */}
        <div className="login-heading">
          <h2>Welcome Back</h2>
          <p>Sign in to access the portal</p>
        </div>

        {/* Form */}
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {/* Username */}
          <div className="login-field">
            <label className="login-label">Username</label>
            <div className="login-input-wrap">
              <span className="login-input-icon"><User size={16} /></span>
              <input
                id="login-username"
                type="text"
                className={`login-input ${error ? 'error-input' : ''}`}
                placeholder="Enter username"
                value={username}
                onChange={e => { setUsername(e.target.value); setError('') }}
                autoComplete="username"
                autoFocus
              />
            </div>
          </div>

          {/* Password */}
          <div className="login-field">
            <label className="login-label">Password</label>
            <div className="login-input-wrap">
              <span className="login-input-icon"><Lock size={16} /></span>
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                className={`login-input ${error ? 'error-input' : ''}`}
                placeholder="Enter password"
                value={password}
                onChange={e => { setPassword(e.target.value); setError('') }}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="login-eye"
                onClick={() => setShowPassword(p => !p)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <motion.div
              className="login-error"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle size={15} />
              {error}
            </motion.div>
          )}

          {/* Submit */}
          <button
            type="submit"
            id="login-submit-btn"
            className="login-btn"
            disabled={loading}
          >
            {loading ? (
              <><div className="login-spinner" /> Signing in...</>
            ) : (
              <><LogIn size={18} /> Sign In</>
            )}
          </button>
        </form>

        <div className="login-footer">
          &copy; {new Date().getFullYear()} Vikra Ocean Tech Pvt Ltd &mdash; <a href="mailto:bda@vikraoceantech.com">Contact Support</a>
        </div>
      </motion.div>
    </div>
  )
}
