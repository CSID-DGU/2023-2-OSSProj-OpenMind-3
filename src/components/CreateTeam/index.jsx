import * as s from './CreateTeam.style';
import axios from '../../api/AxiosC.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import clear from '../../assets/icon/Clear.svg';

export const CreateTeam = () => {
  const params = useParams();
  const lectureId = Number(params.lectureId.substring(1));
  const [teamList, setTeamList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createTeam, setCreateTeam] = useState({
    lectureId: lectureId,
    teamName: '',
  });
  const userName = localStorage.getItem('userName');
  const accessToken = sessionStorage.getItem('accessToken');

  //팀 생성 버튼 클릭했을 때
  const handleClickCreateButton = () => {
    setIsModalOpen((prev) => !prev);
  };

  const TeamCreateModalStyle = {
    overlay: {
      backgroundColor: ' rgba(0, 0, 0, 0.4)',
      width: '100%',
      height: '100vh',
      zIndex: '10',
      position: 'fixed',
      top: '0',
      left: '0',
    },
    content: {
      width: '360px',
      height: '180px',
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

  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setCreateTeam({
      ...createTeam,
      [name]: value,
    });
    console.log(createTeam);
  };

  //팀명 작성 후 확인버튼 클릭 시
  const handleClickModalButton = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/team`, createTeam, {
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
          console.log(response);
          const responseData = response.data;
          const errorMessages = Object.values(responseData.error).join('\n');
          alert(errorMessages);
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data);
        refreshTeamList();
        handleClickCreateButton();
      })
      .catch((error) => {});
  };

  const refreshTeamList = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/lecture/${lectureId}/teams`, {
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
        setTeamList(data.teamResponses);
        console.log(data.teamResponses);
        localStorage.setItem('lectureId', lectureId);
      });
  };

  useEffect(() => {
    refreshTeamList();
  }, []);

  return (
    <>
      <s.Text>{userName}님이 속한 팀 리스트</s.Text>

      <s.SelectContainer>
        <s.SelectList>
          {teamList.map((item) => (
            <s.SelectItem key={`teamItem_${item.teamId}`}>
              <s.LinkItem to={`/teamspace/main/:${item.teamId}`}>
                {item.teamName}
              </s.LinkItem>
            </s.SelectItem>
          ))}
        </s.SelectList>
      </s.SelectContainer>
      <s.TeamCreateButton onClick={handleClickCreateButton}>
        팀 생성
      </s.TeamCreateButton>
      <Modal
        isOpen={isModalOpen}
        style={TeamCreateModalStyle}
        onRequestClose={() => {
          handleClickCreateButton();
        }} // 오버레이나 esc를 누르면 핸들러 동작
        ariaHideApp={false}
      >
        <s.ClearButton onClick={handleClickModalButton} src={clear} />
        <s.ModalWrapper>
          <s.ModalText>생성할 팀 이름을 작성해주세요.</s.ModalText>
          <s.ModalInput
            type='text'
            name='teamName'
            onChange={handleModalChange}
          />
          <s.ModalButtonWrapper>
            <s.ModalButton onClick={handleClickModalButton}>확인</s.ModalButton>
          </s.ModalButtonWrapper>
        </s.ModalWrapper>
      </Modal>
    </>
  );
};
