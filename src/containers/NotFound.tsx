import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 100px;
  text-align: center;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <h3>Sorry, page not found!</h3>
    </Wrapper>
  );
}
