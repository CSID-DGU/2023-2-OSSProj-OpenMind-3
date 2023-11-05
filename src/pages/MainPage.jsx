// import React, { useState } from 'react';
import * as s from '../style/MainPage.style';
import Calendar from '../components/Calendar';
import plus from '../assets/icon/Add.svg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MainPage = () => {
  const [teamInfo, setTeamInfo] = useState([]);
  const [teamMembers, setTeamMembers] = useState();
  const params = useParams();
  const teamId = Number(params.teamId.substring(1));
  const accessToken = sessionStorage.getItem('accessToken');
  const lectureName = localStorage.getItem('lectureName');
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/team/${teamId}/members`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(200);
          return response.data;
        }
        if (response.status === 400) {
          console.log(400);
          const responseData = response.data;
          const errorMessages = Object.values(responseData.error).join('\n');
          alert(errorMessages);
          throw new Error();
        }
      })
      .then((data) => {
        setTeamInfo(data);
        setTeamMembers(data.userResponses);
      });
  }, []);

  return (
    <s.Wrapper>
      <s.LeftContainer>
        <Calendar />
      </s.LeftContainer>
      <s.RightContainer>
        <s.ContainerBox>
          <s.BoxHeader>
            <s.BoxTitle>{teamInfo.teamName}</s.BoxTitle>
            <s.AddButton src={plus}></s.AddButton>
          </s.BoxHeader>
          <div
            className='table-responsive project-list'
            style={{
              height: '220px',
              overflowY: 'auto',
            }}
          >
            <table className='table project-table table-centered table-nowrap'>
              <thead>
                <tr>
                  <th scope='col'></th>
                  <th scope='col' style={{ textAlign: 'center' }}>
                    학번
                  </th>
                  <th scope='col' style={{ textAlign: 'center' }}>
                    전공
                  </th>
                  <th scope='col' style={{ textAlign: 'center' }}>
                    이름
                  </th>
                </tr>
              </thead>
              <tbody>
                {teamMembers &&
                  teamMembers.map((item, index) => (
                    <tr
                      key={`teamMember_${index + 1}`}
                      style={{ textAlign: 'center' }}
                    >
                      <th scope='row'>{index + 1}</th>
                      <td>{item.studentId}</td>
                      <td>{item.major}</td>
                      <td>{item.name}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </s.ContainerBox>
        <s.ContainerBox>
          <s.BoxHeader>
            <s.BoxTitle>회의록</s.BoxTitle>
            <s.AddButton src={plus}></s.AddButton>
          </s.BoxHeader>
          <div
            className='table-responsive project-list'
            style={{ height: '220px', overflowY: 'auto' }}
          >
            <table className='table project-table table-centered table-nowrap'>
              <thead>
                <tr>
                  <th scope='col'></th>
                  <th scope='col' style={{ textAlign: 'center' }}>
                    제목
                  </th>
                  <th scope='col' style={{ textAlign: 'center' }}>
                    날짜
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ textAlign: 'center' }}>
                  <th scope='row'>1</th>
                  <td>제안서 PPT 제작</td>
                  <td>2023.09.23</td>
                </tr>
                <tr style={{ textAlign: 'center' }}>
                  <th scope='row'>2</th>
                  <td>제안서 발표 준비</td>
                  <td>2023.09.22</td>
                </tr>
                <tr style={{ textAlign: 'center' }}>
                  <th scope='row'>3</th>
                  <td>팀플 주제 정하기</td>
                  <td>2023.09.18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </s.ContainerBox>
      </s.RightContainer>
    </s.Wrapper>
  );
};

export default MainPage;
