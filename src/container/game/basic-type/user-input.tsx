import { Input } from 'antd';
import randomWord from 'random-words';
import { ECorrect } from 'container/game/basic-type/constant';
import { useAtom } from 'jotai';
import React from 'react';
import {
  inputAtom, wordAtom, correctAtom, scoreAtom,
} from 'store/game/basic-type-store';
import { initIntArray } from 'lib/utils';

export function UserInput() {
  const [userValue, setUserValue] = useAtom(inputAtom);
  const [randWord, setRandWord] = useAtom(wordAtom);
  const [correctArr, setCorrectArr] = useAtom(correctAtom);
  const [score, setScore] = useAtom(scoreAtom);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { target: { value } } = event;
    const newCorrectArr = correctArr.slice(0);
    const lowerValue = value.toLowerCase();
    lowerValue.split('').forEach((c, i) => {
      if (c === randWord.charAt(i)) {
        newCorrectArr[i] = [ECorrect.wrong, ECorrect.fixed]
          .includes(correctArr[i]) ? ECorrect.fixed : ECorrect.correct;
        return;
      }
      newCorrectArr[i] = ECorrect.wrong;
    });
    if (lowerValue === randWord) {
      const newRandomWord = randomWord();
      setRandWord(newRandomWord);
      setCorrectArr(initIntArray(newRandomWord.length));
      setUserValue('');
      setScore(score + 1);
      return;
    }
    setCorrectArr(newCorrectArr);
    setUserValue(value);
  };

  return (
    <Input
      value={userValue}
      onChange={onChangeInput}
    />
  );
}
