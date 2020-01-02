 

export const noMoreThan5 = (pieChart) => {
    const maxData = pieChart.chart.config.data.datasets[0].data; 
    if(maxData.length > 5){
         
        console.warn("Visualize no more than 5 categories per pie chart. Read more here https://chartjs-runtime-vis-linter.now.sh/rules/#no-more-than-5-in-pie");
    }
}