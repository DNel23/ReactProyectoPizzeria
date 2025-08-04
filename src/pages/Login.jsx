import React, { useState } from 'react'

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const validarDatos = (e) => {
            e.preventDefault()
            if(email === '' || password === '') {
                setError(true)
                return
            } else if (password.length < 6) {
                setError(true)
                return
            }
            alert("Autenticación Correcta")
            setError(false)
            setEmail("")
            setPassword("")
    }

  return (
    <div>
        <form className="formulario" onSubmit={validarDatos}>
            <h1>Login</h1>
            {error ? <p>Todos los campos son obligatorios o Contraseña tiene menos de 6 digitos</p> : null}
            <div className="form-group">
                <label>E-mail</label>
                <input type="text" name="email" className="form-control" placeholder="Ingrese EMail" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className="form-control" placeholder="Ingrese Password" onChange={(e) => setPassword(e.target.value)} value={password}
            />
            </div>
            <hr />
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                Enviar
                </button>
            </div>
        </form>
    </div>
  )
}

export default Login
