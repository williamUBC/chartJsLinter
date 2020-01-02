# Rules

## bar-chart-consistent-colors
> Use consistent colors. Use one color for bar charts.



### :mag: Implementation

- [Rule source](https://github.com/youssefsharief/chartjs-runtime-vis-linter/blob/master/rules/bar/consistent-colors.js)


## bar-chart-ordered
> Order quantitaive values either from highest to lowest or from lowest to highest
This rule is automatically used when calling the checkBarChart method

### :books: Further reading
- [Order data](https://www.data-to-viz.com/caveat/order_data.html)

### :mag: Implementation

- [Rule source](https://github.com/youssefsharief/chartjs-runtime-vis-linter/blob/master/rules/bar/ordered.js)


## no-cut-y-axis
> This is disputable, but it is better to never cut the y-axis
This rule is automatically used when calling the checkBarChart method and when calling the checkLineChart method

### :books: Further reading
[To cut or not to cut the y-axis](https://www.data-to-viz.com/caveat/cut_y_axis.html)

### :mag: Implementation

- [Rule source](https://github.com/youssefsharief/chartjs-runtime-vis-linter/blob/master/rules/common/cut-y-axis.js)



## color-blind
> Do not use orange with green or use red with green 
This rule is automatically used when calling the checkLineChart method

### :books: Further reading
[More about colors in general](https://blog.datawrapper.de/colors/)

### :mag: Implementation

- [Rule source](https://github.com/youssefsharief/chartjs-runtime-vis-linter/blob/master/rules/line/color-blind.js)


## no-more-than-4-lines
> Do not have more than 4 lines in one graph
This rule is automatically used when calling the checkLineChart method

### :books: Further reading
[Spaghetti lines](https://www.data-to-viz.com/caveat/spaghetti.html)

### :mag: Implementation

- [Rule source](https://github.com/youssefsharief/chartjs-runtime-vis-linter/blob/master/rules/line/no-more-than-4-lines.js)

## no-more-than-5-in-pie
> Do not use more than 5 categories in a pie chart
This rule is automatically used when calling the checkPieChart method

### :books: Further reading
[The issue with pie chart](https://www.data-to-viz.com/caveat/pie.html)

### :mag: Implementation

- [Rule source](https://github.com/youssefsharief/chartjs-runtime-vis-linter/blob/master/rules/pie/no-more-than-5-pie.js)



## pie-chart-order
> Order slices correctly by first placing the largest  section at 12 o’clock stretching clockwise, and then placing the remaining sections consistently either clockwise or counter-clockwise in descending order.
This rule is automatically used when calling the checkPieChart method

### :books: Further reading
[How to Design Charts and Graphs](https://cdn2.hubspot.net/hub/53/file-863940581-pdf/Data_Visualization_101_How_to_Design_Charts_and_Graphs.pdf)

### :mag: Implementation

- [Rule source](https://github.com/youssefsharief/chartjs-runtime-vis-linter/blob/master/rules/pie/no-more-than-5-pie.js)


