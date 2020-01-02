import {consistentColors} from './consistent-colors'
import { orderedBarChart } from './ordered';
import { cutYAxis } from '../common/cut-y-axis';
import { checkXTickRotation} from './only-horizontal-labels'

 export const checkBarChart = (x) => {
    consistentColors(x)
    orderedBarChart(x)
    cutYAxis(x)
    checkXTickRotation(x)
}
