 

export const cutYAxis = (barChart) => {
    if(barChart.scales['y-axis-0'].start) {
        console.warn('Do not cut y-axis. Read more here https://chartjs-runtime-vis-linter.now.sh/rules/#no-cut-y-axis' )
    }
}

