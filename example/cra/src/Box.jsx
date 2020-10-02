import React from 'react';
import styled from 'styled-components';

const BoxCommon = styled.div`
  height: 50px;
  background-color: #aaa;
`;

const BoxBig = styled(BoxCommon)`
  width: 200px;
`;

const BoxSmall = styled(BoxCommon)`
  width: 100px;
`;

export default function Box({size}) {
  const isBig = size === 'big';
  return (
    isBig
      ? <BoxBig>큰 박스</BoxBig>
      : <BoxSmall>작은 박스</BoxSmall>
  )
};