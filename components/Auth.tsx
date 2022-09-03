import React, { useState } from 'react'
import { supabase } from '../utils/supabaseClient' // ①

export const Auth: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email }) // ②
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Sign in</h1>
      <div>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault()
            handleLogin(email)
          }}
          disabled={loading}
        >
          <span>{loading ? 'Loading' : 'Send magic link'}</span>
        </button>
      </div>
    </div>
  )
}