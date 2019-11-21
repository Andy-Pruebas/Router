import React, {Component} from 'react';
import './css/bootstrap.min.css';
import './css/estilo.css';
import './css/encuestas.css';
import './css/login.css'

class EncAnemia extends Component{
    render(){
        return(
            <div className="body">
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="w3-container">
                                    <div className="w3-panel w3-white w3-round-xlarge">
                                            <h1><b>Encuesta sobre la anemia</b></h1>   
                                            <p><b>¿Que es la anemia?</b></p>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p1a1" className="styled" type="checkbox"   />
                                                    <label for="p1a1">
                                                            Es una afección por lo cual la hemoglobina está disminuida en los glóbulos rojos, teniendo como resultado<br/> deficiencia de hierro y vitaminas.
                                                    </label>
                                                </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p1a2" className="styled" type="checkbox"   />
                                                    <label for="p1a2">
                                                            Es una enfermedad y transtorno en la sangre que se caracteriza por la baja produccion de globulos blancos,<br/> los cuales combaten a los germenes,virus, bacterias.
                                                    </label>
                                            </div>            
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p1a3" className="styled" type="checkbox"   />
                                                <label for="p1a3">
                                                        Es una enfermedad hereditaria que afecta al metabolismo lo cual hace que se acumule el hierro de manera excesiva<br/> y estos afecten lor organos.
                                                </label>
                                            </div>  
                                            ----------------------------------------------------------------------------------
                                            <p><b>¿A quienes afecta con mayor frecuencia?</b></p>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p2a1" className="styled" type="checkbox"   />
                                                    <label for="p2a1">
                                                            A las personas que tienen una mala alimentación.
                                                    </label>
                                                </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p2a2" className="styled" type="checkbox"   />
                                                    <label for="p2a2">
                                                            Frecuenta en las  personas que no hacen actividad física, y no tienen una buena calidad de sueño.
                                                    </label>
                                            </div>            
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p2a3" className="styled" type="checkbox"   />
                                                <label for="p2a3">
                                                        Solo se presenta en niños que no tienen una buena rutina alimenticia.
                                                </label>
                                            </div>
                                            ---------------------------------------------------------------------------------- 
                                            <p><b>¿Cuáles son los síntomas de la anemia?</b></p>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p3a1" className="styled" type="checkbox"   />
                                                    <label for="p3a1">
                                                            Fatiga extrema, piel pálida, dolor de cabeza o mareos, dolor en el pecho.
                                                    </label>
                                                </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p3a2" className="styled" type="checkbox"   />
                                                    <label for="p3a2">
                                                            Malestar general, debilidad, vértigo, cambios de humor.
                                                    </label>
                                            </div>            
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p3a3" className="styled" type="checkbox"   />
                                                <label for="p3a3">
                                                        Dolor abdominal, falta de energía, perdida de vello corporal, perdida de peso.
                                                </label>
                                            </div>
                                            ---------------------------------------------------------------------------------- 
                                            <p><b>¿Qué complicaciones trae padecer de anemia?</b></p>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p4a1" className="styled" type="checkbox"   />
                                                    <label for="p4a1">
                                                            Cansancio intenso,problemas cardiacos, muerte, complicaciones en el embarazo.
                                                    </label>
                                            </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                    <input id="p4a2" className="styled" type="checkbox"   />
                                                        <label for="p4a2">
                                                                Sangrado intenso, dolores musculares, fatiga extrema.
                                                        </label>
                                            </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                    <input id="p4a3" className="styled" type="checkbox"   />
                                                        <label for="p4a3">
                                                                Anomalías en las células de la sangre, fiebre intensa, baja defensa del cuerpo.
                                                        </label>
                                            </div> 
                                            ---------------------------------------------------------------------------------- 
                                            <p><b>¿Qué acciones podemos tomar para prevenir la anemia?</b></p>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p5a1" className="styled" type="checkbox"   />
                                                    <label for="p5a1">
                                                            Evitar a las personas fumadoras es decir cualquier producto que pueda irritar los pulmones.
                                                    </label>
                                                </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p5a2" className="styled" type="checkbox"   />
                                                    <label for="p5a2">
                                                            Consumir alimentos ricos en hierro, como carnes, mariscos, hígado, frutas secos, etc.
                                                    </label>
                                            </div>            
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p5a3" className="styled" type="checkbox"   />
                                                <label for="p5a3">
                                                        Evitar consumir alimentos inorgánicos y no usar cubiertos o artefactos de uso compartido en lugares públicos.
                                                </label>
                                            </div>
                                    </div>
                                </div>       
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EncAnemia;