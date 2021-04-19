import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import './LineGraph.css'

function LineGraph() {

    const [graphData, setGraphData] = useState([]);

    const data = [
        {
            x: 10,
            y: 100
        },
        {
            x: 15,
            y: 20
        },
        {
            x: 20,
            y: 18
        },
        {
            x: 25,
            y: 7
        },
        {
            x: 30,
            y: 100
        },
        {
            x: 45,
            y: 100
        },
        {
            x: 55,
            y: 100
        },
        {
            x: 60,
            y: 20
        },
        {
            x: 65,
            y: 18
        },
        {
            x: 70,
            y: 7
        },
        {
            x: 75,
            y: 100
        },
        {
            x: 80,
            y: 100
        }

    ]

    const createMockData = () => {
        let data = [];
        let value = 50;
        for (var i = 0; i < 366; i++) {
            let date = new Date();
            date.setHours(0, 0, 0, 0);
            date.setDate(i);
            value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
            data.push({ x: date, y: value })
        }
        setGraphData(data)
    }

    useEffect(() => {
        createMockData();
    }, [])

    return (
        <div className="linegraph">
            <Line
                data={{
                    datasets: [
                        {
                            type: 'line',
                            data: graphData,
                            backgroundColor: 'black',
                            borderColor: '#5AC53B',
                            borderWidth: 2,
                            pointBorderColor: 'rgba(0, 0, 0, 0)',
                            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                            pointHoverBackgroundColor: '#5AC53B',
                            pointHoverBorderColor: '#000000',
                            pointHoverBorderWidth: 4,
                            pointHoverRadius: 6,
                        }
                    ]
                }
                }
                options={
                    {
                        maintainAspectRatio: false,
                        tooltips: { mode: "index", intersect: false },
                        legend: { display: false },
                        scales: {
                            xAxes: [{ type: "time", time: { format: "MM/DD/YY", tooltipFormat: "ll" } }],
                            yAxes: [{ ticks: { display: false } }]
                        }
                    }
                }
                type="Line"
            />
        </div>
    )
}

export default LineGraph
