import { Notes } from 'container/canvas/notes';
import React from 'react';

import styles from './index.m.less';

export function Canvas() {
  return <div className={styles.notes}><Notes /></div>;
}
