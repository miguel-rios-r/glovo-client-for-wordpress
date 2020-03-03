import React from 'react'

const LoginForm = () => {
  return (
    <div className = "container">
      <div className = "row">
        <div className = "col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" class="form-text text-muted">Ingrese el correo registrado en Glovo Bussines</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <button type="submit" class="btn btn-primary">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm