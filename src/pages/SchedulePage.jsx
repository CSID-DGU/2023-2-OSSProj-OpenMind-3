import React from 'react';
import * as s from '../style/SchedulePage.style';
import ScheduleTable from '../components/ScheduleTable';
import { useParams } from 'react-router-dom';

const SchedulePage = () => {
  return (
    <s.Wrapper>
      <s.LeftContainer>
        <ScheduleTable type={0} />
      </s.LeftContainer>
      <s.RightContainer>
        <ScheduleTable type={1} />
      </s.RightContainer>
    </s.Wrapper>
  );
};

export default SchedulePage;
