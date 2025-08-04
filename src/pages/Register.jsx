import React, { useState } from 'react'

const Register = () => {
  const [password, setPassword] = useState("");
  const [passwordok, setPasswordok] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validarDatos = (e) => {
        e.preventDefault()
        if(email === '' || password === '' || passwordok === '') {
            setError(true)
            return
        } else if (passwordok != password || password.length < 6) {
            setError(true)
            return
        }
        alert("Datos Ingresados son Correctos")
        setError(false)
        setEmail("")
        setPassword("")
        setPasswordok("")
    }

    const resetDatos = (e) => {
        e.preventDefault()
        setError(false)
        setEmail("")
        setPassword("")
        setPasswordok("")
    }

  return (
      <>
      <form className="formulario" onSubmit={validarDatos}>
        <h1>Registro</h1>
        {error ? <p>Todos los campos son obligatorios o Contraseña no Coincide</p> : null}
        <div className="form-group">
          <label>E-mail</label>
          <input type="text" name="email" className="form-control" placeholder="Email Obligatorio" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" placeholder="Pass Obligatorio" onChange={(e) => setPassword(e.target.value)} value={password}
          />
        </div>
         <div className="form-group">
          <label>Confirmar Password</label>
          <input type="password" name="passwordok" className="form-control" placeholder="Pass Obligatorio" onChange={(e) => setPasswordok(e.target.value)} value={passwordok}
          />
        </div>
        <hr />
        <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
            Enviar
            </button>
            <button type="submit" className="btn btn-primary" onClick={resetDatos}>
            Reset
            </button>
        </div>
      </form>
    </>
  )
}

export default Register
