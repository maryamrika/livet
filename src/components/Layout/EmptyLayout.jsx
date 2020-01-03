import React from 'react';
import { Content } from './';

const EmptyLayout = ({ children, ...restProps }) => (
  <main className="cr-app bg-light" {...restProps}>
    <Content fluid onClick={this.handleContentClick}>
      {children}
    </Content>
  </main>
);

export default EmptyLayout;
