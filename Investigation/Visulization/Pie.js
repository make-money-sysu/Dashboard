option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['<500','500~1000','1000~1500','1500~2000','2000~3000','3000~5000','5000~10000','>10000']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius : [0, 70],
            
            // for funnel
            x: '20%',
            width: '40%',
            funnelAlign: 'right',
            max: 1548,
            
            itemStyle : {
                normal : {
                    label : {
                        position : 'inner'
                    },
                    labelLine : {
                        show : false
                    }
                }
            },
            data:[
                {value:524, name:'大一'},
               	{value:581, name:'大二'},
               	{value:597, name:'大三'},
                {value:298, name:'大四'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius : [100, 140],
            
            // for funnel
            x: '60%',
            width: '35%',
            funnelAlign: 'left',
            max: 1048,
            
            data:[
                {value:21, name:'<500'},
                {value:111, name:'500~1000'},
                {value:533, name:'1000~1500'},
                {value:523, name:'1500~2000'},
                {value:413, name:'2000~3000'},
                {value:380, name:'3000~5000'},
                {value:26, name:'5000~10000'},
                {value:13, name:'>10000'}
            ]
        }
    ]
};
var ecConfig = require('echarts/config');
myChart.on(ecConfig.EVENT.PIE_SELECTED, function (param){
    var selected = param.selected;
    var serie;
    var str = '当前选择： ';
    for (var idx in selected) {
        serie = option.series[idx];
        for (var i = 0, l = serie.data.length; i < l; i++) {
            if (selected[idx][i]) {
                str += '【系列' + idx + '】' + serie.name + ' : ' + 
                       '【数据' + i + '】' + serie.data[i].name + ' ';
            }
        }
    }
    document.getElementById('wrong-message').innerHTML = str;
})
                    