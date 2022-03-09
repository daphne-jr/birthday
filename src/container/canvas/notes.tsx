/* eslint-disable jsx-a11y/anchor-is-valid */
import { LikeFilled } from '@ant-design/icons';
import {
  PageHeader, Tag, Button, Row, Typography, Card,
} from 'antd';
import React from 'react';

import styles from './index.m.less';

const { Paragraph, Title } = Typography;

const content = (
  <div>
    <Title level={5} underline>Known Issues</Title>
    <Paragraph>
      Safari may have issues with downloading files,
      displaying images and playing chat alerts in canvas.
    </Paragraph>
    <Paragraph>
      If `http://` and `https://` contents are mixed in 1
      page, Canvas will display blank because of mixed content
      security settings. This is browser issue.
    </Paragraph>
  </div>
);

function Content({ children }:
  { children: React.ReactNode }) {
  return (
    <Row>
      {children}
    </Row>
  );
}

export function Notes() {
  return (
    <Card>
      <PageHeader
        title="Learning Canvas"
        className="site-page-header"
        subTitle="Introduction"
        tags={<Tag color="success">Important</Tag>}
        extra={[
          <Button
            key="1"
            href="https://canvas.northwestern.edu/courses/128385/pages/which-browser-should-i-use?module_item_id=1708726"
            target="_blank"
            rel="noreferrer noopener"
          >
            Reference
          </Button>,
        ]}
        avatar={{ icon: <LikeFilled /> }}
      >
        <Content>
          {content}
        </Content>
      </PageHeader>
    </Card>
  );
}
