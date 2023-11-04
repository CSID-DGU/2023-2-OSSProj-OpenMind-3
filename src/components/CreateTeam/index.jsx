import * as s from './CreateTeam.style';
import axios from '../../api/AxiosC.js';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const CreateTeam = () => {
  const userName = localStorage.getItem('userName');
  const params = useParams();
  const lectureId = Number(params.lectureId.substring(1));
  console.log(lectureId);

  useEffect(() => {});

  return (
    <>
      <s.Text>{userName}님이 속한 팀 리스트</s.Text>

      <s.SelectContainer>
        <s.SelectList>
          {/* {lectures.map((item) => (
            <s.SelectItem key={`lectureItem_${item.id}`}>
            <s.LinkItem to={'/teamspace/team'}>{item.name}</s.LinkItem>
            </s.SelectItem>
          ))} */}
        </s.SelectList>
      </s.SelectContainer>
      <s.TeamCreateButton>팀 생성</s.TeamCreateButton>
    </>
  );
};
