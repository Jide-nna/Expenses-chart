var xmlhttp = new XMLHttpRequest()
var url = "http://127.0.0.1:5500//data.json"
xmlhttp.open("GET", url,true)
xmlhttp.send()
// console.log(url)
xmlhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText)
        // console.log(data)
        day = data.day_population.map(function(elem) {
            return elem.day
        })
        console.log(day)
    }
}
 let myChart = document.getElementById('canvas').getContext('2d');

  let massSpendChart = new Chart(myChart, {
    // const spend = new Chart(ctx, {
    type: 'bar',
    data:{
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets:[{
            label: 'Amount',
            data:["200",'100','400', '700', '800', '900', '800'
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
            borderRadius: 8,
        }]
    },
    options:{}
})
/* 
    options: {
        scales: false,
            y: {
                beginAtZero: true
            } 
        }
}); */
       