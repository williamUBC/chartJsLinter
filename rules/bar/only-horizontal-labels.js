export const checkXTickRotation = (barChart) => {
    const rotation = barChart.scales['x-axis-0'].labelRotation;
    if(rotation > 60){
        console.warning("Use horizontal labels. Avoid steep diagonal or vertical type, as it can be difficult to read.")
    }
}