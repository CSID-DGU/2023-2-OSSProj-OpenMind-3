import React from 'react';
import * as s from '../style/SchedulePage.style';
import ScheduleTable from '../components/ScheduleTable';
import { useParams } from 'react-router-dom';
import ScheduleTableTeam from '../components/ScheduleTableTeam';

const SchedulePage = () => {
  return (
    <s.Wrapper>
      <s.LeftContainer>
        <ScheduleTable />
      </s.LeftContainer>
      <s.RightContainer>
        <ScheduleTableTeam />
      </s.RightContainer>
    </s.Wrapper>
  );
};

export default SchedulePage;
