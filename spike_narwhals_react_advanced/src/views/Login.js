import React from 'react'

function Login() {
  return (
    <div>
        <h2>LOGIN</h2>
        <input type="text" value={userName}/>
        <input type="text" value={password}/>
        <button>login</button>
    </div>
  )
}

export default Login