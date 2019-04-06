
option = {
    title : {
        text: '生活支出领域',
        subtext: '结果可能存在偏差'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        orient : 'vertical',
        x : 'right',
        y : 'bottom',
        data:['男生','女生']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    polar : [
       {
           indicator : [
               { text: '伙食', max: 800},
               { text: '购置衣物', max: 800},
               { text: '交通通讯', max: 400},
               { text: '日常交际', max: 400},
               { text: '学习用品', max: 400},
               { text: '娱乐旅游', max: 800}
            ]
        }
    ],
    calculable : true,
    series : [
        {
            name: '男生VS女生',
            type: 'radar',
            data : [
                {
                    value : [686, 327, 47, 35, 53, 240],
                    name : '男生'
                },
                 {
                    value :[746, 675, 60, 21, 44, 189],
                    name : '女生'
                }
            ]
        }
    ]
};
                    