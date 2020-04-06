import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'
import pattern from 'patternomaly'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            chartData:{
                labels:['São Paulo', 'Rio de Janeiro', 'Brasilia', 'Salvador', 'Fortaleza', 'Belo Horizonte'],
                datasets:[{                
                    label:'Population',
                    data:
                    [   12252023,
                        6718903,
                        3015268,
                        2872347,
                        2669342,
                        2512070
                    ],
                    //backgroundColor:'green',
                    backgroundColor: [
                        pattern.draw('diagonal','rgba(255, 99, 132, 0.6)'),
                        pattern.draw('diagonal-right-left','rgba(54, 162, 235, 0.6)'),
                        pattern.draw('zigzag-vertical','rgba(255, 206, 86, 0.6)'),
                        pattern.draw('line-vertical','rgba(75, 192, 192, 0.6)'),
                        pattern.draw('diamond','rgba(153, 102, 255, 0.6)'),
                        pattern.draw('zigzag-horizontal', 'rgba(255, 159, 64, 0.6)'),
                    ],
                    // borderWidth:0.5,
                    // borderColor:'#777',
                    // hoverBorderWidth:1,
                    // hoverBorderColor: '#000'                    
                }] 
            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }

    render() {
        return (
            <div className="chart">
                <h1>Chart Component</h1>

                <Bar
                  data={this.state.chartData}
                //   width={100}
                //   height={50}
                  options={{
                    title:{
                        display:this.props.displayTitle,
                        text:'Largest Cities in Brazil',
                        fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition,
                        labels:{
                            fontColor:'#000'
                        }
                    },
                    layout:{
                        padding:{
                            left:50,
                            right:0,
                            bottom:0,
                            top:0
                        }
                    },
                    tooltips:{
                        enabled:true
                    }
                  }}
                />
            </div>
        )
    }
}

