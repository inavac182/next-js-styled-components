'use client'

import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000;
`;

const Text = styled.p`
  padding: 20px;
`;

export default function Home() {
  return (
    <Main>
      <Text>Example NextJS with Styled components</Text>
    </Main>
  );
}
