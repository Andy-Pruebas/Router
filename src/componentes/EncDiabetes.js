import React, {Component} from 'react';
import './css/bootstrap.min.css';
import './css/estilo.css';
import './css/encuestas.css';
import './css/login.css'

class EncDiabetes extends Component{
    render(){
        return(
            <div className="body">
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="w3-container">
                                <div className="w3-panel w3-white w3-round-xlarge">
                                        <h1><b>Encuesta sobre la diabetes</b></h1>   
                                        <p><b>¿Que es la diabetes?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p1a1" className="styled" type="checkbox" />
                                                <label for="p1a1">
                                                    Es una enfermedad que se muestra cuando el páncreas no produce insulina; por consecuencia no se regula el azúcar en la sangre.
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p1a2" className="styled" type="checkbox" />
                                                <label for="p1a2">
                                                    Es una enfermedad en la que la médula ósea produce glóbulos blancos anómalos que lleva consigo células dañadas.
                                                </label>
                                        </div>            
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p1a3" className="styled" type="checkbox" />
                                            <label for="p1a3">
                                                Es una enfermedad que se caracteriza por un defecto en la coagulación de sangre por deficiencias o faltas<br/> en los factores que intervienen.
                                            </label>
                                        </div>  
                                        ----------------------------------------------------------------------------------
                                        <p><b>¿Cuántos tipos de diabetes se han registrado, a quienes afecta?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p2a1" className="styled" type="checkbox" />
                                                <label for="p2a1">
                                                        3 tipos. Tipo 1 frecuenta en los niños, Tipo 2 en los jóvenes, y Tipo 3 en adultos.
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p2a2" className="styled" type="checkbox" />
                                                <label for="p2a2">
                                                        4 tipos. Tipo 1 frecuenta en niños, Tipo 2 en jóvenes, Tipo 3 en adultos, 4 casos especiales sin una edad especifica.
                                                </label>
                                        </div>            
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p2a3" className="styled" type="checkbox" />
                                            <label for="p2a3">
                                                    2 tipos. Tipo 1 frecuenta en niños, Tipo 2 frecuenta en personas mayores.
                                            </label>
                                        </div>
                                        ---------------------------------------------------------------------------------- 
                                        <p><b>¿Cuáles son los síntomas de la diabetes?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p3a1" className="styled" type="checkbox" />
                                                <label for="p3a1">
                                                        Dolor en los músculos, cansancio, piel pálida, Nauseas.
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p3a2" className="styled" type="checkbox" />
                                                <label for="p3a2">
                                                        Mucha sed, orinar con frecuencia, pérdida de peso, Visión borrosa.
                                                </label>
                                        </div>            
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p3a3" className="styled" type="checkbox" />
                                            <label for="p3a3">
                                                    Ausencia del hambre, acidez estomacal, Fiebre y escalofríos.
                                            </label>
                                        </div>
                                        ---------------------------------------------------------------------------------- 
                                        <p><b>¿Cuál es el origen de la diabetes en niños y adultos respectivamente?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p4a1" className="styled" type="checkbox" />
                                                <label for="p4a1">
                                                        Fiebre frecuente, sangrados fecuentes, mala alimentación.
                                                </label>
                                        </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p4a2" className="styled" type="checkbox" />
                                                    <label for="p4a2">
                                                            No hacer actividad física, fumar, estrés.
                                                    </label>
                                        </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p4a3" className="styled" type="checkbox" />
                                                    <label for="p4a3">
                                                        No realizar actividad física, fumar, llevar una alimentación desbalanceada.
                                                    </label>
                                        </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p4a4" className="styled" type="checkbox" />
                                                <label for="p4a4">
                                                        No está determinado aún.
                                                </label>
                                        </div>   
                                        ---------------------------------------------------------------------------------- 
                                        <p><b>¿Cuáles son los factores de riesgo en la diabetes tipo 2?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p5a1" className="styled" type="checkbox" />
                                                <label for="p5a1">
                                                        Edad, síndromes genéticos, exposición a sustancias químicas.
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p5a2" className="styled" type="checkbox" />
                                                <label for="p5a2">
                                                        Hipertensión arterial, anomalías en el vaso sanguíneo, medicamentos anticoagulantes.
                                                </label>
                                        </div>            
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p5a3" className="styled" type="checkbox" />
                                            <label for="p5a3">
                                                    Obesidad, no hacer actividad física, fumar, historia de hiperglucemia.
                                            </label>
                                        </div>
                                        ----------------------------------------------------------------------------------  
                                        <p><b>¿Cuáles son las complicaciones que puedo obtener por padecer de diabetes?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p6a1" className="styled" type="checkbox" />
                                                <label for="p6a1">
                                                        Accidente vascular cerebral, ataque al corazón, vasos sanguíneos debilitados.
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p6a2" className="styled" type="checkbox" />
                                                <label for="p6a2">
                                                        Complicaciones con los órganos internos, tener muchas urgencias médicas, aumento de riesgo de enfermedades cardiacas.
                                                </label>
                                        </div>            
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p6a3" className="styled" type="checkbox" />
                                            <label for="p6a3">
                                                    Sangrados frecuentes, daños en las articulaciones, sangre en la orina.
                                            </label>
                                        </div>      
                                        ----------------------------------------------------------------------------------  
                                        <p><b>¿Qué acciones se deben tomar para la prevención y manejo de la diabetes?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p7a1" className="styled" type="checkbox" />
                                                <label for="p7a1">
                                                        Hacer actividad física, tener una dieta guiada por un nutriólogo, cuidado personal de pies.
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p7a2" className="styled" type="checkbox" />
                                                <label for="p7a2">
                                                        Reconocer síntomas de sangrado, ejercicio arduo, tomar medicamentos indicados por el doctor.
                                                </label>
                                        </div>            
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p7a3" className="styled" type="checkbox" />
                                            <label for="p7a3">
                                                    Tomar medicamentos sin el consentimiento de su médico,consumir cualquier tipo de<br/> alimento sin restricciones, hacerse revisiones cada vez que sienta dolor.
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

export default EncDiabetes;