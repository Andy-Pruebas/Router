import React, {Component} from 'react';
import './css/login.css'

class Login extends Component{
    render(){
        return(
            <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100">
                <div className="login100-pic js-tilt" data-tilt>
                  <img src={require('./images/cultura.png')}alt="IMG" />
                </div>
                <form className="login100-form validate-form">
                  <span className="login100-form-title">
                    Iniciar Sesión
                  </span>
                  <div className="wrap-input100 validate-input" data-validate="DNI obligatorio">
                    <input className="input100" type="text" name="email" placeholder="DNI" />
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Contraseña obligatoria">
                    <input className="input100" type="password" name="pass" placeholder="Contraseña" />
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      <i className="fa fa-lock" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="container-login100-form-btn">
                    <a className="login100-form-btn" href="/Menu">
                      Ingresar
                    </a>
                  </div>
                  <div className="container-login100-form-btn">
                    <a className="login100-form-btn" href="/Registro">
                      Registrarse
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;