import { colorBlind } from './color-blind'
import { noMoreThan4Lines } from './no-more-than-4-lines';
import { cutYAxis } from '../common/cut-y-axis';

export const checkLineChart = (x) => {
    noMoreThan4Lines(x)
    colorBlind(x)
    cutYAxis(x)
}
