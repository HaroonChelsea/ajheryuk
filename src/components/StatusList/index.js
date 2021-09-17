import React from 'react';
import {View, FlatList} from 'react-native';
import Status from '../Status';
import styles from './style';

const StatusList = ({statuses}) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={statuses}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Status status={item} />}
      />
    </View>
  );
};

export default StatusList;
