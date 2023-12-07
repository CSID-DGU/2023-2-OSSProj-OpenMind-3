// import React, { useState } from 'react';
import * as s from '../style/MainPage.style';
import Calendar from '../components/Calendar';
import plus from '../assets/icon/Add.svg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import mainpageAPI from '../api/mainpageAPI';

const MainPage = () => {
  const [teamInfo, setTeamInfo] = useState([]);
  const [teamMembers, setTeamMembers] = useState();
  const [isStudentListModalOpen, setIsStudentListModalOpen] = useState(false);

  const [studentList, setStudentList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const params = useParams();
  const teamId = Number(params.teamId.substring(1));

  const formData = {
    membersId: checkedList,
    teamId: teamId,
  };

  //+버튼 눌렀을 때
  const handleClickAddButton = () => {
    setIsStudentListModalOpen((prev) => !prev);
    showStudentList();
    refreshTeamInfo();
  };

  // const handleClickAddEvent = () => {
  //   setIsAddEventModalOpen((prev) => !prev);
  // };

  //+버튼 눌렀을 때 나오는 모달에서 사용하는 get메소드
  const showStudentList = () => {
    mainpageAPI.getStudentList().then((data) => {
      setStudentList(
        data.userList
        // data.userList.filter(
        //   (item) => item.userId !== teamMembers.forEach((item) => item.userId)
        // )
      );
    });
  };

  const checkedItemHandler = (value, isChecked) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
      return;
    }
    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
      return;
    }
    return;
  };
  const checkHandler = (e, value) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
  };

  //모달의 초대버튼 눌렀을 때 사용하는 post메소드
  const addTeamMember = () => {
    mainpageAPI.addTeamMember(formData).then((data) => {
      console.log(data);
      setIsStudentListModalOpen(false);
      refreshTeamInfo();
    });
    refreshTeamInfo();
  };

  const refreshTeamInfo = () => {
    mainpageAPI.getTeamInfo(params).then((data) => {
      console.log(data);
      setTeamInfo(data);
      setTeamMembers(data.userResponses);
    });
  };

  //모달 style
  const StudentListModalStyle = {
    overlay: {
      backgroundColor: ' rgba(0, 0, 0, 0.4)',
      width: '100%',
      height: '100vh',
      zIndex: '10',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '9999',
    },
    content: {
      width: '400px',
      height: '500px',
      zIndex: '150',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'white',
      justifyContent: 'center',
      overflow: 'auto',
    },
  };

  useEffect(() => {
    refreshTeamInfo();
  }, []);

  return (
    <s.Wrapper>
      <s.LeftContainer>
        <Calendar teamId={teamId} />
      </s.LeftContainer>
      <s.RightContainer>
        {/* 팀원구성 */}
        <s.ContainerBox>
          <s.BoxHeader>
            <s.BoxTitle>{teamInfo.teamName}</s.BoxTitle>
            <s.AddButton
              src={plus}
              onClick={handleClickAddButton}
            ></s.AddButton>
            <Modal
              isOpen={isStudentListModalOpen}
              style={StudentListModalStyle}
              onRequestClose={handleClickAddButton} // 오버레이나 esc를 누르면 핸들러 동작
              ariaHideApp={false}
            >
              <div
                className='table-responsive project-list'
                style={{
                  height: '400px',
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
                    {studentList &&
                      studentList.map((item, index) => (
                        <tr
                          key={`studentList_${index + 1}`}
                          style={{ textAlign: 'center' }}
                        >
                          <th scope='row'>
                            <input
                              type='checkbox'
                              id={item.userId}
                              checked={checkedList.includes(item.userId)}
                              onChange={(e) => checkHandler(e, item.userId)}
                            />
                          </th>
                          <td>{item.studentId}</td>
                          <td>{item.major}</td>
                          <td>{item.name}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <s.Button onClick={addTeamMember}>초대</s.Button>
            </Modal>
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
                      key={`teamMember_${index}`}
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

        {/* 회의록 */}
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
