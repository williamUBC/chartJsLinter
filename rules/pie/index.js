import { checkPieLargeOnePos } from './pie-order'
import { noMoreThan5 } from './no-more-than-5-pie';


export const checkPieChart = (x) => {
    checkPieLargeOnePos(x)
    noMoreThan5(x)
}