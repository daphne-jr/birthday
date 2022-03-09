/* eslint-disable max-len */
import * as React from 'react';
import randomWord from 'random-words';

import styles from './index.m.less';

interface IState {
  score: number;
  wrongScore: number;
  level: number;
  rWord: string;
  isRecord: boolean;
}

class BasicTypeGame extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      score: 0,
      wrongScore: 0,
      level: 1,
      rWord: randomWord(),
      isRecord: false,
    };
  }

  type: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { rWord, isRecord } = this.state;
    const wordTyped = event.target.value;
    if (wordTyped.toLowerCase() === rWord) {
      this.setState((prevState) => {
        const prevScore = prevState.score;
        const prevWrongScore = prevState.wrongScore;
        const newLevel = Math.ceil((prevScore - prevWrongScore + 1) / 10);
        return {
          score: prevScore + 1,
          level: newLevel,
          rWord: randomWord({ exactly: newLevel }).join(' '),
          isRecord: false,
        };
      });
      event.target.value = '';
    } else if (!rWord.startsWith(wordTyped.toLowerCase()) && !isRecord) {
      this.setState((prevState) => {
        const prevScore = prevState.wrongScore;
        return {
          wrongScore: prevScore + 1,
          isRecord: true,
        };
      });
    }
  };

  render() {
    const {
      level, wrongScore, score, rWord,
    } = this.state;
    return (
      <div className="gameCanvas">
        Level
        {' '}
        {level}
        <br />
        Wrong Score:
        {' '}
        {wrongScore}
        <br />
        Score:
        {' '}
        {score}
        <div className="ySpace" />
        <div className="h1">
          {rWord}
        </div>
        <div className="gameSpace" />
        <div className="justifyCenter">
          <form>
            <input
              className="reactText"
              type="text"
              name="textgame"
              onKeyPress={(event) => {
                if (event.which === 13 /* Enter */) {
                  event.preventDefault();
                }
              }}
              onChange={this.type}
            />
          </form>
        </div>
        <div className="ySpace" />
      </div>
    );
  }
}

export default BasicTypeGame;
