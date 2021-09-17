/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, ScrollView, SafeAreaView, FlatList} from 'react-native';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import Message from '../../components/Message';
import styles from './style';
import data from '../../constants/data';
import imagePaths from '../../constants/imagePaths';

const Messages = () => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header
          image={imagePaths.profileImage}
          online
          withBackground={false}
          headTitle="My Messages"
          messages={true}
        />
        <SearchInput
          value={search}
          placeholder="Search here"
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        data={data.messages}
        keyExtractor={item => item.username}
        renderItem={({item}) => <Message message={item} />}
      />
    </SafeAreaView>
  );
};

export default Messages;
