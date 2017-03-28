# react-native-CountDowntimer
倒计时控件,只需要添加一个结束时间。适用于商品秒杀页面等等。

<img src="art.png" alt="art">


## 参数Props
### date
iso 格式 或者 js dates格式的结束时间。

## 使用demo
``` javascript
import CountDownReact from './CountDownReact'

 <CountDownReact
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

