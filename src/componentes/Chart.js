import React,{Component}from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2'; 

class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['Pregunta1','Pregunta2','Pregunta3','Pregunta4','Pregunta5'
                ,'Pregunta6','Pregunta7'],
                datasets:[
                    {   
                        label:'Repuestas',
                        data:[
                            2,
                            2,
                            2,
                            2,
                            2,
                            2,
                            2
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(255.100,126,0.6)',
                            'rgba(75,192,192,0.6)',
                            'rgba(153,102,255,0.6)',
                            'rgba(55, 159, 64,0.6)',
                            'rgba(255,99,132,0.6)'
                        ]
                    }
                ]
            }
        }
    }
    static defaultProps={
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right'
    }
    render(){
        return(
            <div className="chart">
                 <Bar 
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.state.displayTitle,
                            text:'Total de las respuestas',
                            fontSize:25
                        },
                        legend:{
                            display:this.state.displayLegend,
                            position:this.state.legendPosition
                        }
                    }}
                />
            </div>  
        )
    }
}
export default Chart;