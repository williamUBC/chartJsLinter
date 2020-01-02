

export const checkPieLargeOnePos = (pieChart) => {
    const maxData = pieChart.chart.config.data.datasets[0].data;
    const zeroPosVal = maxData[0];
    for (let index = 0; index < maxData.length; index++) {
        const element = maxData[index];
        if (element > zeroPosVal) {
            console.warn(`Order slices correctly by first placing the largest  section at 12 o’clock stretching clockwise, and then placing the remaining sections consistently either clockwise or counter-clockwise in descending order. Read more here https://chartjs-runtime-vis-linter.now.sh/rules/#pie-chart-order`);
        }
    }
}