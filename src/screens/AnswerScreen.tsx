import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RootStackScreenprops } from '../navigations/type'
import Data from '../api/db.json'

type Props = RootStackScreenprops<'AnswerScreen'>

const AnswerScreen = ({navigation, route}: Props) => {

  const {questionId, itemNumber} =  route.params;
  const [anwser,setAnswer] = useState<string>()
  useEffect(()=>{
    const answers = Data.answers;

    const ans = answers.find(answer => answer.questionNo === questionId && answer.answerNo === itemNumber);
    
    setAnswer(ans?.answerResult);
  },[questionId, itemNumber]);
  
  return (
    <View>
      <Text>{anwser}</Text>
    </View>
  )
}

export default AnswerScreen