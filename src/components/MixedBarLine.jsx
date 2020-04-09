import React, { Component } from 'react'
import {Bar, Line, Pie, Chart} from 'react-chartjs-2'
import pattern from 'patternomaly'


export default class MixedBarLine extends Component {
    constructor(props){
        super(props)
        this.chartReference = React.createRef()
        this.state={
            data:{
                datasets:[{
                    label: 'Population',
                    data: [
                        12252023,
                        6718903,
                        3015268,
                        2872347,
                        2669342,
                        2512070
                    ],
                    backgroundColor: [
                        pattern.draw('diagonal','rgba(255, 99, 132, 0.6)'),
                        pattern.draw('diagonal-right-left','rgba(54, 162, 235, 0.6)'),
                        pattern.draw('zigzag-vertical','rgba(255, 206, 86, 0.6)'),
                        pattern.draw('line-vertical','rgba(75, 192, 192, 0.6)'),
                        pattern.draw('diamond','rgba(153, 102, 255, 0.6)'),
                        pattern.draw('zigzag-horizontal', 'rgba(255, 159, 64, 0.6)'),
                    ],                   
                    borderWidth:0.5,
                    borderColor:'#777',
                    hoverBorderWidth:1,
                    hoverBorderColor: '#000',
                    order:2
                },
                {
                    label: 'Covid19 confirmed cases per state',
                    data:[
                        900000,
                        600000,
                        500000,
                        450000,
                        300000,
                        250000
                    ],
                    type: 'line',
                    backgroundColor:'rgba(0,0,0,0)',
                    pointBackgroundColor: 'black',
                    pointBorderColor: 'black',
                    showLine: false,
                    pointStyle:'line',
                    pointRadius:0,
                    pointHoverRadius:0,
                    borderWidth:3,
                    hoverBorderWidth:3,
                    order: 1

                }],
                labels:['São Paulo', 'Rio de Janeiro', 'Brasilia', 'Salvador', 'Fortaleza', 'Belo Horizonte']
            },
            widthScreen: 0, 
            heightScreen: 0 
        }       
        //  Chart.plugins.register({
        //     updated: false,
        //     beforeDraw: function() {
        //        var barWidth = this.chartReference.current.props.data.datasets[0]._meta[0].data[0]._model.width
        //        var line = this.chartReference.current.props.data.datasets[1]
        //        line.pointRadius = barWidth / 2;
        //        line.pointHoverRadius = barWidth / 2;
        //        if (!this.updated) {
        //           this.chartReference.update();
        //           this.updated = true;
        //        }
        //     }
        //  })
        
    }

    updateDimensions = () => {
        this.setState({ widthScreen: window.innerWidth, heightScreen: window.innerHeight });       
        this.handleWindowResize();
    }    
      
   
    handleWindowResize() {
        let barWidth = this.chartReference.current.props.data.datasets[0]._meta[0].data[0]._model.width;
       
        let data =  this.state.data  

        if(data.datasets[1].pointRadius != Math.round(barWidth/2) ){
            data.datasets[1].pointRadius = Math.round(barWidth/2)
            data.datasets[1].pointHoverRadius = Math.round(barWidth/2)
            this.setState({data:data})
        }
        console.log('bar' ,this.chartReference.current.props.data.datasets[0]._meta[0].data[0]._model.width)
        console.log(data.datasets[1].pointRadius)
    }
    
    componentDidMount(){        
        window.addEventListener('resize', this.updateDimensions);
        this.handleWindowResize();  
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateDimensions);       
    }

    render(){
        return(
        <div className="chart">
            <h1>Chart Component</h1>
            <Bar ref={this.chartReference}
                data = {this.state.data}
                options = {
                    {
                        title:{
                            display:true,
                            text:'Largest Cities in Brazil',
                            fontSize:25
                        },
                        legend:{
                            display:true,
                            position:'right',
                            labels:{
                                fontColor:'#000'
                            }
                        },
                        layout:{
                            padding:{
                                left:100,
                                right:100,
                                bottom:100,
                                top:0
                            }
                        },
                        tooltips:{
                            enabled:true
                        }

                    }
                    
                }
            />
        </div>
        )
    }
}

