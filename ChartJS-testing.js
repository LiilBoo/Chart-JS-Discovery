const barCanvas = document.querySelector('#barCanvas');


const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ["Singapore","Tokyo","Seoul","Hong kong"],
        datasets: [{
            data: [240, 120, 140, 130],
            backgroundColor: [
                "crimson",
                "lightgreen",
                "lightblue",
                "violet"
            ]
        }]
    },
    options: {
        scales:{
            y: {
                suggestedMax: 500,
                ticks: {
                    font: {
                        size:18
                    }
                }
            },
            x: {
                ticks: {
                    font:{
                        size: 18
                    }
                }
            }
        }
    }
});

/**
 * Pie Chart
 */

const pieCanvas = document.querySelector('#pieCanvas');

const pieChart = new Chart(pieCanvas, {
    type: "pie",
    data: {
        labels: [
            "Nationale",
            "Criterium",
            "Interclub",
        ],
        datasets:[{
            data: [300,150,100],
            backgroundColor: [
                "rgb(255,99,132)",
                "rgb(54,162,235)",
                "rgb(255,205,86)",
            ],
            hoverOffset: 30
        }]
    }
});

/**
 * Line Canvas
 */

const lineCanvas = document.querySelector('#lineCanvas');

const lineChart = new Chart(lineCanvas, {
    type: "line",
    data: {
        labels: ["2019","2020","2021"],
        datasets: [{
            label: "Adhérents",
            data: [150, 150, 230],
            fill: true,
            backgroundColor: "lightblue",
            tension: 0.4
        }]
    },
    options: {
        elements: {
            point: {
                pointBorderColor: "#333"
            }
        },
        scales: {
            y: {
                ticks: {
                    color: "#333"
                },
                suggestedMin: 15,
                suggestedMax: 300
            },
            x: {
                ticks: {
                    color: "#333"
                }
            }
        }
    }
})