import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


function Overview() {

    const options = {

        responsive: true,

        plugins: {
            legend: {
                display: true,
                align:'end',
                
                labels: {
                    boxHeight:10,
                    usePointStyle: true,
                    font: {
                        family: "Poppins', sans-serif",
                        textAlign: 'left',
                        weight:'lighter',
                    }
                }
            },

            title: {
                display: false,
                text: 'Overview',
            },

            tooltip:{
                padding:15,
                backgroundColor: '#1FCB4F',
                displayColors: false,
                titleFont:'lighter',
                titleFontSize:40,
            },
        },
        scales: {
          y:{
            
          }
        },

        elements: {
            line: {
                tension: 0.5,
                borderWidth: 2,
            },
        }
      };
      
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dez'];
      
      const data = {
        labels,
        datasets: [
          {
            label:'Income',
            data: [300, 900, 200, 220, 550, 500, 400, 50, 800, 400, 450, 450],
              borderColor: "#1FCB4F",
              backgroundColor:"#FFC01E",
          },
          {
            label: 'Expenses',
            data: [180, 60, 280, 220, 230, 290, 550, 300, 500, 500, 650, 650],
              borderColor: "#FFC01E",
              backgroundColor:"#1FCB4F",
          },
        ],
      };
      
    return(
        <section className="box">
            <h3>Overview</h3>
            <Line options={options} data={data} />
        </section>
    )
}

export default Overview;