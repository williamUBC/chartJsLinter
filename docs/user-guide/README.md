# User Guide

## :cd: Installation

Via [npm](https://www.npmjs.com/):
```bash
npm install --save-dev chartjs-runtime-vis-linter
```

Via [yarn](https://yarnpkg.com/):
```bash
yarn add -D chartjs-runtime-vis-linter
```

::: tip Requirements
- Node.js v10.16.3 and above
:::

## :book: Usage


```js
import { Chart } from 'chart.js'
import { checkBarChart, checkPieChart, checkLineChart } from 'chartjs-runtime-vis-linter'
const canvas = document.getElementByTagName('canvas')[0]
const ctx = canvas.getContext('2d');
const chart = new Chart(ctx, {
  ...
});
checkLineChart(chart)
```
