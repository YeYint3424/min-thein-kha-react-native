import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackPramrsList = {
    QuestionScreen : undefined;
    NumberList : {
        questionId : number;
    }
    AnswerScreen : {
        questionId : number;
        itemNumber : number;
    }
}

export type RootStackScreenprops<T extends keyof RootStackPramrsList> = NativeStackScreenProps<RootStackPramrsList, T>;