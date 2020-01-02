

export const colorBlind = (chart) => {
    let isGreenFound = false
    let isRedOrOrangeFound = false
    for (const line of chart.data.datasets) {
        const matches = line.borderColor.match(/\((.*?)\)/);
        const rgb = matches[1].split(',').map(strNum => parseInt(strNum, 10))
        const hue = getHue(rgb[0], rgb[1], rgb[2])
        if (isHueGreen(hue)) {
            isGreenFound = true
        } else if (isHueRedOrOrange(hue)) {
            isRedOrOrangeFound = true
        }
    }
    if (isRedOrOrangeFound && isGreenFound) {
        console.warn('This chart is problematic for color blinds. Read more here https://chartjs-runtime-vis-linter.now.sh/rules/#color-blind')
    }
}


const isHueGreen = (hue) => hue > 97 && hue < 151
const isHueRedOrOrange = (hue) => (hue > 347 && hue <= 360) || (hue >= 0 && hue <= 32)

function getHue(r, g, b) {
    let h;
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b);

    if (max === r) {
        h = (g - b) / (max - min);
    }
    else if (max === g) {
        h = 2 + (b - r) / (max - min);
    }
    else if (max === b) {
        h = 4 + (r - g) / (max - min);
    }
    h = h * 60; // find the sector of 60 degrees to which the color belongs
    // https://www.pathofexile.com/forum/view-thread/1246208/page/45 - hsl color wheel

    if (h > 0) {
        return Math.floor((h > 360) ? (h - 360) : h);
    }
    else {
        return Math.floor(360 + h);
    }
}