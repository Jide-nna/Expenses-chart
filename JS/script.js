 /* xmlhttp = new XMLHttpRequest()
var url = "http://127.0.0.1:5500//data.json"
xmlhttp.open("GET", url,true)
xmlhttp.send()
 console.log(url)
xmlhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText)
         console.log(data)
        var day = JSON.parse(day)
        console.log(day) 
    } 
} */
 let myChart = document.getElementById('canvas').getContext('2d');
 const data =["17.45", '34.91', '52.36',  '31.07', '23.39',  '43.28', '25.48' ]
const backgroundColor = []
 for(i = 0; i < data.length; i++){
    if(data[i] < 50){
        backgroundColor.push('hsl(10, 79%, 65%)')
    }else{
        backgroundColor.push('hsl(186, 34%, 60%)')
    }
}
  let massSpendChart = new Chart(myChart, {
    type: 'bar',
    data:{
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets:[{
            label: 'Amount',
            data: data,
            backgroundColor: backgroundColor,
            borderRadius: 5,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                callbacks: {
                    title: function(e){
                        ''
                    }
                }
             }
        },
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: false,
                        borderWidth: 0,
                        lineWidth: 0
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false,
                    }
                }
            },
            
        onHover: (event, chartElement) => {
            if(chartElement.length == 1){
                event.native.target.style.cursor = 'pointer'
            }else{
                event.native.target.style.cursor = ''
            }
        } 
     }
})  