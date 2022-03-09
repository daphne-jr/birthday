import { StarOutlined, TrophyOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { EMenuMode } from 'lib/constant';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.m.less';

const { SubMenu } = Menu;

export function CanvasNavigationBar() {
  return (
    <div className={styles.navigationBar}>
      <Menu mode={EMenuMode.horizontal}>
        <SubMenu key="games" icon={<TrophyOutlined />} title="Games">
          <Menu.Item key="basic-typing-game">
            <Link to="/game">Basic Typing Game</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="canvas" icon={<StarOutlined />}>
          <Link to="/canvas">Canvas</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
