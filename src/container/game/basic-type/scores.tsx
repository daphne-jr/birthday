import { useAtom } from 'jotai';
import React from 'react';
import { levelAtom, scoreAtom } from 'store/game/basic-type-store';

export function Scores() {
  const [score] = useAtom(scoreAtom);
  const [level] = useAtom(levelAtom);
  return (
    <>
      <div>
        Level:
        {' '}
        {level}
      </div>
      <div>
        Score:
        {' '}
        {score}
      </div>
    </>
  );
}
