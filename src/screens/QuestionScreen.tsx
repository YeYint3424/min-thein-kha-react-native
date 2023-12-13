import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import data from '../api/db.json';
import {RootStackScreenprops} from '../navigations/type';
import {useNavigation} from '@react-navigation/native';

type RenderItem = {
  item: {
    questionNo: number;
    questionName: string;
  };
};

type Props = RootStackScreenprops<'QuestionScreen'>;
type Navigation = Props['navigation'];
const QuestionListItem: FC<RenderItem> = ({item}) => {
  const navigation = useNavigation<Navigation>();
  const handleToNumberListScreen = () => {
    return navigation.navigate('NumberList', {
      questionId: item.questionNo,
    });
  };
  return (
    <TouchableOpacity style={styles.questions} onPress={handleToNumberListScreen}>
      <View style={styles.flex}>
        <Text style={[styles.textBlack, styles.No]}>{item.questionNo}</Text>
        <Text style={[styles.textBlack, styles.question]}>
          {item.questionName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const QuestionScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Search...'/>
      <FlatList
      data={data.questions}
      keyExtractor={item=>item.questionNo.toString()}
      renderItem={({item})=><QuestionListItem item={item}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  textBlack: {
    color: 'black',
    padding: 5,
  },
  question: {
    padding: 10,
    borderLeftWidth: 1,
    flex: 8,
    minHeight: 80,
    verticalAlign: 'middle',
  },
  No: {
    textAlign: 'center',
    flex: 1,
  },
  questions: {
    marginBottom: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default QuestionScreen;
