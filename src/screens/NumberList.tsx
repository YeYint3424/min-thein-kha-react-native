import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Data from '../api/db.json';
import {RootStackScreenprops} from '../navigations/type';

interface Props extends RootStackScreenprops<'NumberList'> {}
const NumberList = ({navigation, route}: Props) => {
  const {questionId} = route.params;
  const hundleNumber = (item: string) => {
    switch (item) {
      case '၁':
        item = '1';
        break;
      case '၂':
        item = '2';
        break;
      case '၃':
        item = '3';
        break;
      case '၄':
        item = '4';
        break;
      case '၅':
        item = '5';
        break;
      case '၆':
        item = '6';
        break;
      case '၇':
        item = '7';
        break;
      case '၈':
        item = '8';
        break;
      case '၉':
        item = '9';
        break;
      case '၁၀':
        item = '10';
        break;
    }
    navigation.navigate('AnswerScreen', {
      questionId,
      itemNumber: Number(item),
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Data.numberList}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        style={styles.Nolist}
        numColumns={9}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.singleNo}
            onPress={() => hundleNumber(item)}>
            <Text style={styles.center}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  Nolist: {
    backgroundColor: 'brown',
  },
  singleNo: {
    width: 35,
    height: 35,
    backgroundColor: 'blue',
    padding: 5,
    margin: 2,
  },
  center: {
    textAlign: 'center',
    color: 'white',
  },
});

export default NumberList;
