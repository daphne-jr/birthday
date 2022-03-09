import React from 'react';
import { Scores } from 'container/game/basic-type/scores';
import { RandomWord } from 'container/game/basic-type/random-word';
import { UserInput } from 'container/game/basic-type/user-input';
import styles from './index.m.less';

export function BasicTypeGame() {
  return (
    <div className={styles.basicTypeGame}>
      <div className={styles.paper}>
        <Scores />
        <div className={styles.centerBorder}>
          <RandomWord />
          <UserInput />
        </div>
      </div>
    </div>
  );
}
