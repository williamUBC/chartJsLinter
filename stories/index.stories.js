import { Chart } from 'chart.js'
import { checkBarChart } from '../rules/bar/index'
import { checkPieChart } from '../rules/pie/index'
import { checkLineChart } from '../rules/line/index'


export default {
    title: 'Demo',
};


export const barChartWithNoWarnings = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Asia", "Africa", "Europe", "North America", "Latin America"],
            //data locates in : barChart -> chart -> data -> datasets/labels
            //title locates in: barChart -> chart -> config
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: "#3e95cd",
                    data: [5267, 2478, 784, 734, 433]
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });

    checkBarChart(barChart)
    return canvas
};



// export const barChartWitBadLabels = () => {
//     const canvas = document.createElement('canvas')
//     const ctx = canvas.getContext('2d');
//     const barChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ["Asia", "Africa", "Europe", "North America", "Latin America"],
//             //data locates in : barChart -> chart -> data -> datasets/labels
//             //title locates in: barChart -> chart -> config
//             datasets: [
//                 {
//                     label: "Population (millions)",
//                     backgroundColor: "#3e95cd",
//                     data: [5267, 2478, 784, 734, 433]
//                 }
//             ]
//         },
//         options: {
//             scales: {
//                 xAxes: [{
//                     display: true,
//                     ticks: {
//                         maxRotation: 90,
//                         minRotation: 65
//                     },
//                     barPercentage: 1,
//                     categoryPercenatge: 1
//                 }]
//             }
//         },
//         legend: { display: false },
//         title: {
//             display: true,
//             text: 'Predicted world population (millions) in 2050'
//         }
//     })
//     checkBarChart(barChart)
//     return canvas
// };






export const barChartWithDifferentColorsAnNotOrdered = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            //data locates in : barChart -> chart -> data -> datasets/labels
            //title locates in: barChart -> chart -> config
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: [2478, 5267, 734, 784, 433]
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });

    checkBarChart(barChart)
    return canvas
};



export const CutYAxisBarChart = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Asia", "Africa", "Europe", "North America", "Latin America"],
            //data locates in : barChart -> chart -> data -> datasets/labels
            //title locates in: barChart -> chart -> config
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: "#3e95cd",
                    data: [5267, 2478, 784, 734, 433]
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 300,
                    }
                }]
            },
            legend: { display: false },
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });

    checkBarChart(barChart)
    return canvas
};


export const pieChartWithNoWarnings = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    const pie = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Asia", "Africa", "Europe", "Latin America"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#8e5ea2", "#3e95cd", "#3cba9f", "#e8c3b9"],
                data: [5267, 2478, 734, 784]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
    checkPieChart(pie)
    return canvas
};

export const unorderedPieChart = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    const pie = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Africa", "Asia", "Europe", "Latin America"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                data: [2478, 5267, 734, 784]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
    checkPieChart(pie)
    return canvas
};

export const pieChartWith6Categories = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    const pie = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America", "Antarctic"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#F781BF"],
                data: [2478, 5267, 734, 784, 433, 100]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
    checkPieChart(pie)
    return canvas
};





export const lineChartWithNoWarnings = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            },
            {
                label: 'My Second dataset',
                borderColor: 'rgb(77, 255, 51)',
                data: [10, 20, 35, 6, 10, 10, 25]
            },
            {
                label: 'My Third dataset',
                borderColor: 'rgb(51, 216, 255)',
                data: [2, 11, 6, 21, 30, 50, 15]
            },
            ]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 10,
                        stepValue: 5,
                        max: 60
                    }
                }]
            }
        }
    });
    checkLineChart(chart)
    return canvas
};



export const lineChartWithManyLines = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            },
            {
                label: 'My Second dataset',
                borderColor: 'rgb(77, 255, 51)',
                data: [10, 20, 35, 6, 10, 10, 25]
            },
            {
                label: 'My Third dataset',
                borderColor: 'rgb(51, 216, 255)',
                data: [2, 11, 6, 21, 30, 50, 15]
            },
            {
                label: 'My Fourth dataset',
                borderColor: 'rgb(255, 234, 51)',
                data: [4, 21, 16, 41, 10, 40, 25]
            },
            {
                label: 'My Fifth dataset',
                borderColor: 'rgb(194, 51, 255)',
                data: [1, 11, 5, 21, 60, 10, 5]
            }
            ]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 10,
                        stepValue: 5,
                        max: 60
                    }
                }]
            }
        }
    });
    checkLineChart(chart)
    return canvas
};


export const greenWithRedLineCharts = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                borderColor: 'rgb(255, 0, 0)',
                data: [0, 10, 5, 2, 20, 30, 45]
            },
            {
                label: 'My Second dataset',
                borderColor: 'rgb(77, 255, 51)',
                data: [10, 20, 35, 6, 10, 10, 25]
            },
            {
                label: 'My Third dataset',
                borderColor: 'rgb(51, 216, 255)',
                data: [2, 11, 6, 21, 30, 50, 15]
            },
            ]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 10,
                        stepValue: 5,
                        max: 60
                    }
                }]
            }
        }
    });
    checkLineChart(chart)
    return canvas
};



export const greenWithOrangeLineCharts = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                borderColor: 'rgb(255, 90, 0)',
                data: [0, 10, 5, 2, 20, 30, 45]
            },
            {
                label: 'My Second dataset',
                borderColor: 'rgb(77, 255, 51)',
                data: [10, 20, 35, 6, 10, 10, 25]
            },
            {
                label: 'My Third dataset',
                borderColor: 'rgb(51, 216, 255)',
                data: [2, 11, 6, 21, 30, 50, 15]
            },
            ]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 10,
                        stepValue: 5,
                        max: 60
                    }
                }]
            }
        }
    });
    checkLineChart(chart)
    return canvas
};




export const cutYAxisLineChart = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My Second dataset',
                    borderColor: 'rgb(77, 255, 51)',
                    data: [10, 20, 35, 6, 10, 10, 25]
                },
            ]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        min: 5
                    }
                }]
            }
        }
    });
    checkLineChart(chart)
    return canvas
};