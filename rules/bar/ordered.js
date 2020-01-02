 

export const orderedBarChart = (barChart) => {
    if (barChart.chart.data.datasets.length !== 1) {
        return
    }
    const arr = barChart.data.datasets[0].data;
    const sortedArr = [...arr].sort((a,b) => a - b)
    const sortedArrInOtherDirection = [...arr].sort((a,b) => b - a)
    if (arr.join() !== sortedArr.join() && arr.join() !== sortedArrInOtherDirection.join()) {
        console.warn('It is better to order your data Read more here https://chartjs-runtime-vis-linter.now.sh/rules/#bar-chart-ordered')
    }
}
