# react-native-CountDowntimer
倒计时控件,只需要添加一个结束时间。适用于商品秒杀页面等等。

<img src="art.png" alt="art">


## 参数Props
### date
iso 格式 或者 js dates格式的结束时间。

## 使用demo
``` javascript
1.从npm安装 
//in package.json
"dependencies": {
    "react_native_countdowntimer":"1.0.2"
  }
//in your js code
import CountDownTimer from 'react_native_countdowntimer' 

2.直接使用本地代码
import CountDownReact from './CountDownReact' //


 <CountDownTimer
          //date={new Date(parseInt(endTime))}
          date="2017-11-28T00:00:00+00:00"
          days={{plural: 'Days ',singular: 'day '}}
          hours=':'
          mins=':'
          segs=''

          daysStyle={styles.time}
          hoursStyle={styles.time}
          minsStyle={styles.time}
          secsStyle={styles.time}
          firstColonStyle={styles.colon}
          secondColonStyle={styles.colon}
      />

```

## 联系方式

QQ:1196681436

Weibo:http://www.weibo.com/u/1693069642

email:jackuhan@gmail.com

欢迎提出意见，提交代码。

my-qq-group

