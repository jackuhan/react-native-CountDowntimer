import React, { Component, PropTypes } from 'react'
import {
    StyleSheet,
    TouchableHighlight,
    Image,
    Text,
    View
} from 'react-native';

import CountDown from './CountDownReact'

const appDemo = React.createClass({


  render() {
    return <View style={{paddingTop:40,}}>
      <CountDown
          //date={new Date(parseInt(seckill.endTime))}
          date="2017-04-28T00:00:00+00:00"
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

      <CountDown
          //date={new Date(parseInt(seckill.endTime))}
          date="2017-04-28T00:00:00+00:00"
          days={{plural: 'Days ',singular: 'day '}}
          hours=':'
          mins=':'
          segs=''

          daysStyle={styles.cardItemTimeRemainTxt}
          hoursStyle={styles.cardItemTimeRemainTxt}
          minsStyle={styles.cardItemTimeRemainTxt}
          secsStyle={styles.cardItemTimeRemainTxt}
          firstColonStyle={styles.cardItemTimeRemainTxt}
          secondColonStyle={styles.cardItemTimeRemainTxt}
      />

      <CountDown
          //date={new Date(parseInt(seckill.endTime))}
          date="2017-04-28T00:00:00+00:00"
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
    </View>
  }
});


const styles = StyleSheet.create({

  cardItemTimeRemainTxt: {
    fontSize: 10,
    color: '#ee394b'
  },
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  },
  //时间文字
  time: {
    paddingHorizontal: 3,
    backgroundColor: 'rgba(85, 85, 85, 1)',
    fontSize: 12,
    color: 'white',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  //冒号
  colon: {
    fontSize: 12, color: 'rgba(85, 85, 85, 1)'
  }
});


export default appDemo
