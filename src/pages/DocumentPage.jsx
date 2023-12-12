import React, { useEffect, useRef, useState } from 'react';
import * as s from '../style/DocumentPage.style';
import { useNavigate, useParams } from 'react-router-dom';
import plus from '../assets/icon/WhiteAdd.svg';
import pen from '../assets/icon/pen.svg';
import trash from '../assets/icon/trash.svg';
import List from '../assets/icon/List.svg';
import Modal from 'react-modal';
// import { Quill } from 'react-quill';
import DocumentQuill from '../components/DocumentQuill';
import documentAPI from '../api/documentAPI';
import DocumentDetail from '../components/DocumentDetail';

const DocumentPage = () => {
  const [clickedAddDocument, setClickedAddDocument] = useState(false);
  const params = useParams();
  const teamId = Number(params.teamId.substring(1));
  const [content, setContent] = useState('');
  const [selectedDocumentId, setSelectedDocumentId] = useState();

  const handleClickAddButton = () => {
    setClickedAddDocument((prev) => !prev);
  };

  ///회의록 리스트
  const DocumentList = ({ content, setContent }) => {
    const [documentList, setDocumentList] = useState([]);
    const [isOpenDocumentModal, setIsOpenDocumentModal] = useState(false);
    const userName = localStorage.getItem('userName');

    const getDocumentList = () => {
      documentAPI.getDocumentList(teamId).then((data) => {
        console.log(data);
        setDocumentList(data);
      });
    };
    const DocumentModalStyle = {
      overlay: {
        backgroundColor: ' rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100vh',
        zIndex: '10',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '99999',
      },
      content: {
        width: 'fit-content',
        height: 'fit-content',
        zIndex: '150',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
        backgroundColor: 'white',
        overflow: 'auto',
      },
    };

    const openDocumentModal = () => {
      setIsOpenDocumentModal(true);
    };
    const closeDocumentModal = () => {
      setIsOpenDocumentModal(false);
    };

    useEffect(() => {
      getDocumentList();
    }, []);
    return (
      <s.DocumentListContainer>
        <div
          className='table-responsive project-list'
          style={{
            height: '400px',
            overflowY: 'auto',
          }}
        >
          <>
            <table className='table project-table table-centered table-nowrap'>
              <thead>
                <tr>
                  <th scope='col'></th>
                  <th scope='col' style={{ textAlign: 'center' }}>
                    제목
                  </th>
                  <th scope='col' style={{ textAlign: 'center' }}>
                    수정일
                  </th>
                  <th scope='col' style={{ textAlign: 'center' }}>
                    작성자
                  </th>
                  <th scope='col' style={{ width: '100px' }}></th>
                </tr>
              </thead>
              <tbody>
                {documentList.map((item, index) => (
                  <tr
                    className={'document_list'}
                    style={{ textAlign: 'center' }}
                    onClick={() => {
                      setSelectedDocumentId(item.id);
                      openDocumentModal();
                      console.log(item.id);
                    }}
                  >
                    <th scope='row'>{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.createDate}</td>
                    <td>{item.writer}</td>
                    <td>
                      <s.Icon src={pen}></s.Icon>

                      <s.Icon src={trash}></s.Icon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        </div>
        <Modal
          isOpen={isOpenDocumentModal}
          style={DocumentModalStyle}
          onRequestClose={closeDocumentModal} // 오버레이나 esc를 누르면 핸들러 동작
          ariaHideApp={false}
        >
          <DocumentDetail documentId={selectedDocumentId} />
        </Modal>
      </s.DocumentListContainer>
    );
  };

  return (
    <s.Wrapper>
      <s.DocumentListContainerHeader>
        <s.HeaderLabel>
          {clickedAddDocument ? '회의록 작성' : '회의록 목록'}
        </s.HeaderLabel>
        {clickedAddDocument ? (
          <s.AddButton src={List} onClick={handleClickAddButton} />
        ) : (
          <s.AddButton src={plus} onClick={handleClickAddButton} />
        )}
      </s.DocumentListContainerHeader>

      {clickedAddDocument ? (
        <DocumentQuill content={content} setContent={setContent} />
      ) : (
        <DocumentList content={content} setContent={setContent} />
      )}
    </s.Wrapper>
  );
};

export default DocumentPage;
