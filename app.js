let labels1 = ['Male', 'Female'];
let data1 = [34, 23];
let colors1 = ['blue', 'green'];

let mychart1 = document.getElementById("myChart1");

let chart1 = new Chart(mychart1, {
  type: 'doughnut',
  data: {
    labels: labels1,
    datasets: [ {
      data: data1,
      backgroundColor: colors1
    }]
  },
  options: {
    title: {
      text: "Gender",
      display: true
    }
  }
});


let labels2 = ['Sass', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Vue.js'];
let data2 = [123372, 121034, 122345, 120355, 124553, 114356];
let colors2 = ['blue', 'green', '#44f544', '#b7f544', '#e3c82b', '#5ae3e7'];

let mychart2 = document.getElementById("myChart2");

let chart2 = new Chart(mychart2, {
  type: 'bar',
  data: {
    labels: labels2,
    datasets: [ {
      data: data2,
      backgroundColor: colors2
    }]
  },
  options: {
    title: {
      text: "web Development",
      display: true
    },
    legend: {
      display: false
    }
  }
});


let labels3 = ['HTML', 'CSS', 'JavaScript', 'mySQL', 'PHP'];

let mychart3 = document.getElementById("myChart3");

let chart3 = new Chart(mychart3, {
  type: 'radar',
  data: {
    labels: labels3,
    datasets: [ 
        {
        label: 'Site1',
        fill: true,
        backgroundColor: '#b7f4f771',
        pointBordercolor: '#a5f4f8',
        pointBackgroundColor: '#436a6b',
        data: [90, 80, 50, 50, 75]
      },
      {
        label: 'Site2',
        fill: true,
        backgroundColor: '#81f1767c',
        pointBordercolor: '#58b84f',
        pointBackgroundColor: '#305e2c',
        data: [80, 100, 20, 80, 55]
      }
    ]
  },
  options: {
    title: {
      text: "web Development",
      display: true
    }
  }
});


let labels4 = ['Apple', 'Samsung', 'Huawei', 'oppo', 'LG', 'nokia'];
let data4 = [42542, 23244, 13423, 67898, 4354, 12324];
let colors4 = ['blue', 'green', '#44f544', '#b7f544', '#e3c82b', '#5ae3e7'];

let mychart4 = document.getElementById("myChart4");

let chart4 = new Chart(mychart4, {
  type: 'pie',
  data: {
    labels: labels4,
    datasets: [ {
      data: data4,
      backgroundColor: colors4
    }]
  },
  options: {
    title: {
      text: "Mobile Phone",
      display: true
    }
  }
});