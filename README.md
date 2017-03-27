# react-native-CountDowntimer
A simple countdown component with React Native which Only needs a end time.

[中文](https://github.com/jackuhan/react-native-CountDowntimer/blob/master/README-CH.md)

<img src="art.png" alt="art">

## Props
### date
A string width valid date like isoformat or js dates

## Example
``` javascript
import CountDown from './CountDownReact'

 <CountDown
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

## Contact

QQ:1196681436

Weibo:http://www.weibo.com/u/1693069642

email:jackuhan@gmail.com

Welcome to pull request

