import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { RootStackPramrsList } from './type';
import QuestionScreen from '../screens/QuestionScreen';
import NumberList from '../screens/NumberList';
import AnswerScreen from '../screens/AnswerScreen';

const RootStackNacigator = () => {
    const Stack = createNativeStackNavigator<RootStackPramrsList>();
  return (
    <Stack.Navigator
     initialRouteName='QuestionScreen'
     screenOptions={{headerShown : false}}
    >
        <Stack.Screen name={'QuestionScreen'} component={QuestionScreen} />
        <Stack.Screen name={'NumberList'} component={NumberList} />
        <Stack.Screen name={'AnswerScreen'} component={AnswerScreen} />
    </Stack.Navigator>
  )
}

export default RootStackNacigator