import randomWord from 'random-words';
import { useAtom } from 'jotai';
import { correctAtom, wordAtom } from 'store/game/basic-type-store';
import React, { useEffect } from 'react';

import { ECorrect } from 'container/game/basic-type/constant';
import { initIntArray } from 'lib/utils';
import styles from './index.m.less';

export function RandomWord() {
  const [randWord, setRandWord] = useAtom(wordAtom);
  const [correctArr, setCorrectArr] = useAtom(correctAtom);
  // init random word
  useEffect(() => {
    setRandWord(randomWord());
  }, []);
  // reset correctArr
  useEffect(() => {
    setCorrectArr(initIntArray(randWord.length));
  }, [randWord]);
  return (
    <div className={styles.randWord}>
      {randWord.split('').map((c, i) => {
        let className = '';
        if (correctArr[i] === ECorrect.correct) {
          className = styles.correct;
        } else if (correctArr[i] === ECorrect.wrong) {
          className = styles.wrong;
        } else if (correctArr[i] === ECorrect.fixed) {
          className = styles.fixed;
        }
        return <span key={i} className={className}>{c}</span>;
      })}
    </div>
  );
}
