import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
export default ({ children }) => <Wrapper>{children}</Wrapper>;
