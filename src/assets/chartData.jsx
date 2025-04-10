// export const dataLine = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//         {
//             label: 'Sales',
//             data: [65, 59, 80, 81, 56, 55, 60],
//             fill: false,
//             backgroundColor: 'rgba(75,192,192,0.4)',
//             borderColor: 'rgba(75,192,192,1)',
//         },
//     ],
// };

// export const dataBar = {
//     labels: ['Product A', 'Product B', 'Product C', 'Product D'],
//     datasets: [
//         {
//             label: 'Quantity',
//             data: [12, 19, 3, 5],
//             backgroundColor: 'rgba(153, 102, 255, 0.2)',
//             borderColor: 'rgba(153, 102, 255, 1)',
//             borderWidth: 1,
//         },
//     ],
// };


import dayjs from 'dayjs';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dataValues = [20, 20, 20, 81, 20, 20, 20, 20, 20, 20, 20, 20];
const activeMonthIndex = dayjs().month();
const pastMonthColor = '#96E2D6';
const activeMonthColor = 'rgb(251, 146, 60)';
const futureMonthColor = 'rgba(150, 226, 214, 0.5)';

const backgroundColors = labels.map((_, index) => {
  if (index < activeMonthIndex) {
    return pastMonthColor;
  } else if (index === activeMonthIndex) {
    return activeMonthColor;
  } else {
    return futureMonthColor;
  }
});

const borderColors = labels.map((_, index) => {
  if (index < activeMonthIndex) {
    return pastMonthColor;
  } else if (index === activeMonthIndex) {
    return activeMonthColor;
  } else {
    return futureMonthColor;
  }
});

export const dataM = {
  labels: labels,
  datasets: [{
    label: 'Monthly Data',
    data: dataValues,
    backgroundColor: backgroundColors,
    borderColor: borderColors,
    borderWidth: 1,
    barThickness: 15, 
    maxBarThickness: 20,
  }]
};