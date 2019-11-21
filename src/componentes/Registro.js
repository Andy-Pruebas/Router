import React, {Component} from 'react';
import './css/registro.css';

class Registro extends Component{
    render(){
        return(
            <div className="limiter">
            <div className="container-login100">
                <div className="login100-more" style={{backgroundImage: 'url("images/ten.png")'}} />
                <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                    <form className="login100-form validate-form">
                    <span className="login100-form-title p-b-59">
                        Registrar
                    </span>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Apellidos</span>
                        <input className="input100" type="text" name="name" placeholder="Apellidos..." />
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Nombres</span>
                        <input className="input100" type="text" name="name" placeholder="Nombre..." />
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Email</span>
                        <input className="input100" type="text" name="email" placeholder="Email..." />
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">DNI</span>
                        <input className="input100" type="text" name="username" placeholder="DNI..." />
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Contraseña</span>
                        <input className="input100" type="text" name="pass" placeholder="*************" />
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Repetir contraseña</span>
                        <input className="input100" type="text" name="repeat-pass" placeholder="*************" />
                        <span className="focus-input100" />
                    </div>
                    
                    <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn" />
                            <button className="login100-form-btn" >
                                Registrar
                            </button>
                        </div>
                        <a href="/Login" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
                        Ingresar
                        <i className="fa fa-long-arrow-right m-l-5" />
                        </a>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Registro;