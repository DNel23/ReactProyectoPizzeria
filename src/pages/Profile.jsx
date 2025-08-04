import React from 'react'

const Profile = () => {
  return (
    <form className="formulario" >
            <h1>Perfil Registrado</h1>
            <div className="form-group">
                <label>E-mail</label>
                <input type="text" name="email" className="form-control" placeholder="nelsondonoso@gmail.com" />
            </div>
            <hr />
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                Cerrar Sesión
                </button>
            </div>
        </form>
  )
}

export default Profile
