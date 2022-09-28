 /*  xmlhttp = new XMLHttpRequest()
var url = "http://127.0.0.1:5500//data.json"
xmlhttp.open("GET", url,true)
xmlhttp.send()
// console.log(url)
xmlhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText)
        // console.log(data)
        var data = JSON.parse(day)
        console.log(data)
    }
}*/
 let myChart = document.getElementById('canvas').getContext('2d');

  let massSpendChart = new Chart(myChart, {
    // const spend = new Chart(ctx, {
    type: 'bar',
    data:{
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets:[{
            label: 'Amount',
            data:[
             "17.45",
            '34.91',
            '52.36', 
            '31.07',
            '23.39', 
            '43.28', 
            '25.48'
            ],
            backgroundColor:[
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'
            ],
            borderRadius: 5,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
              },
           /* tooltip: {
                mode: 'index',
                intersect: false
                }, */
        },
      /*  hover: {
            mode: 'nearest',
            intersect: false
            }, */
        scales: {
            x: {
                display: true,
                borderWidth: 0,
                lineWidth: 0,
                grid:{
                display: false,
                }
             },
            y: {
                display: false,
                grid:{
                display: false,
                }
          },
        },
        tooltips: {
            enabled: false,
          },
    }
});
       