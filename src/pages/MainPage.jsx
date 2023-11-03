// import React, { useState } from 'react';
import * as s from '../style/MainPage.style';
import Calendar from '../components/Calendar';
import plus from '../assets/icon/Add.svg';

const MainPage = () => {
  // const [teamInfo, setTeamInfo] = useState([]);

  return (
    <s.Wrapper>
      <s.LeftContainer>
        <Calendar />
      </s.LeftContainer>
      <s.RightContainer>
        <s.ContainerBox>
          <s.BoxHeader>
            <s.BoxTitle>팀원 정보</s.BoxTitle>
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
                {/* {teamInfo.teamFellow.map((fellow, index) => ( */}
                <tr style={{ textAlign: 'center' }}>
                  <th scope='row'>1</th>
                  <td>2019111615</td>
                  <td>경영정보학과</td>
                  <td>한수정</td>
                </tr>
                <tr style={{ textAlign: 'center' }}>
                  <th scope='row'>2</th>
                  <td>2019111615</td>
                  <td>경영정보학과</td>
                  <td>한수정</td>
                </tr>
                <tr style={{ textAlign: 'center' }}>
                  <th scope='row'>3</th>
                  <td>2019111615</td>
                  <td>경영정보학과</td>
                  <td>한수정</td>
                </tr>
              </tbody>
            </table>
          </div>
        </s.ContainerBox>
        <s.ContainerBox>
          <s.BoxHeader>
            <s.BoxTitle>팀원 정보</s.BoxTitle>
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
