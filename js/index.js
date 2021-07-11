//柱状图一
(function () {
  // 一：实例化echarts对象（不是使用new来创建实例）
  var myEcharts = echarts.init(document.querySelector('.bar .chart'))
  // 二：指定配置项和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: 'axis',
      axisPointer: {     // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'   // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "1%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业"
        ],
        axisTick: {
          show: false,
          // alignWithLabel: true, //刻度和标签对其  
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
        axisLine: {   //不显示x坐标的样式
          show: false,
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            // 使用深浅的间隔色
            color: "rgba(255, 255, 255, .1)",
            width: "1"
          }
        },
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: 12
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };
  // 三：把配置项给实例对象
  myEcharts.setOption(option)
  // 四：让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myEcharts.resize()
  })
})();

//柱状图二
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 一：实例化echarts对象（不是使用new来创建实例）
  var myEcharts = echarts.init(document.querySelector('.bar2 .chart'))
  // 二：指定配置项和数据
  var option = {
    grid: {
      top: "10%",
      left: "20%",
      bottom: "10%",
      // containLabel: false,
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        //不显示y轴线条
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        },
      },
      {
        data: [702, 350, 610, 793, 664],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: 'bar',
        yAxisIndex: 0,
        data: [70, 34, 60, 78, 69],
        //柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        itemStyle: {
          // 柱子设为圆角
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%",
          color: "#fff"
        }
      },
      {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        barCategoryGap: 50,
        barWidth: 18,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };
  // 三：把配置项给实例对象
  myEcharts.setOption(option)
  // 四：让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myEcharts.resize()
  })
})();