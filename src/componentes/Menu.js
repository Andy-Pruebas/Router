import React, {Component} from 'react';
import Diabetes from './Diabetes';
import './css/login.css';


class Menu extends Component{

    constructor(props){
        super(props);
        this.state = {
            enfermedades:[],
            isFetch: true
        }
    }

    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/http://proyectoin.herokuapp.com/apis/infos')
        .then((response) => {
            return response.json()
        })
        .then((enfer)=>{
            this.setState({enfermedades:enfer, isFetch: false})
        })
    }
    render(){

        if(this.state.isFetch){
            return(
                <div className="body"><span className="login100-form-title">
                Cargando
              </span></div>
            );
        }
        const enferm = this.state.enfermedades[1].info
        const enferm3 = this.state.enfermedades[3].info
        const enfermg = this.state.enfermedades[0].info
        const enferm2 = this.state.enfermedades[2].info
        const enferm4 = this.state.enfermedades[4].info
        const enferm5 = this.state.enfermedades[5].info
        const enferm6 = this.state.enfermedades[6].info
        const enferm13 = this.state.enfermedades[12].info
        const enferm14 = this.state.enfermedades[13].info
        const enferm15 = this.state.enfermedades[14].info

            return(
                <div className="body">
                    <h1><b>OMS</b></h1>{enfermg}<br/>
                    <h1><b>Diabetes</b></h1>{enferm2}<br/>{enferm3}<br/>
                    <h1><b>Tipos de Diabetes</b></h1>- {enferm13}<br/>- {enferm14}<br/>- {enferm15}<br/>
                    <h1><b>Anemia</b></h1>{enferm}<br/>
                    <h1><b>Tipos de Anemia</b></h1>- {enferm4}<br />- {enferm5}<br/>- {enferm6}<br/>
                    <div className="container-login100-form-btn">
                        <a className="login100-form-btn" href="/EncDiabetes">
                            Realizar encuesta para la Diabetes
                        </a>
                    </div>
                    <div className="container-login100-form-btn">
                        <a className="login100-form-btn" href="/EncAnemia">
                            Realizar encuesta para la Anemia
                        </a>
                    </div>
                </div>
                );
        }

}

export default Menu;