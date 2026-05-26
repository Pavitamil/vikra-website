import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('React Error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#020b18',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '16px',
          color: '#f0f8ff',
          fontFamily: 'monospace',
          padding: '40px'
        }}>
          <h2 style={{ color: '#00b4d8', fontSize: '1.5rem' }}>⚠️ Runtime Error</h2>
          <pre style={{
            background: 'rgba(0,180,216,0.1)',
            border: '1px solid rgba(0,180,216,0.3)',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '800px',
            overflow: 'auto',
            fontSize: '0.85rem',
            color: '#ff6b6b'
          }}>
            {this.state.error?.toString()}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}
