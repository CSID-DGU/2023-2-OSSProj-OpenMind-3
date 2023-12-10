import React, { useEffect, useRef, useState } from 'react';
import * as s from '../style/DocumentPage.style';
import { useParams } from 'react-router-dom';
import plus from '../assets/icon/WhiteAdd.svg';
import pen from '../assets/icon/pen.svg';
import trash from '../assets/icon/trash.svg';
import List from '../assets/icon/List.svg';
// import { Quill } from 'react-quill';
import DocumentQuill from '../components/DocumentQuill';
import documentAPI from '../api/documentAPI';

const DocumentPage = () => {
  const [clickedAddDocument, setClickedAddDocument] = useState(false);
  const params = useParams();
  const teamId = Number(params.teamId.substring(1));

  const handleClickAddButton = () => {
    setClickedAddDocument((prev) => !prev);
  };

  ///회의록 리스트
  const DocumentList = () => {
    const [documentList, setDocumentList] = useState([]);
    const userName = localStorage.getItem('userName');

    const getDocumentList = () => {
      documentAPI.getDocumentList(teamId).then((data) => {
        console.log(data);
        setDocumentList(data);
      });
    };

    useEffect(() => {
      getDocumentList();
    }, []);
    return (
      <s.DocumentListContainer>
        <div
          className='table-responsive project-list'
          style={{
            height: '220px',
            overflowY: 'auto',
          }}
        >
          {documentList.map((item) => (
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
                  <tr style={{ textAlign: 'center' }}>
                    <th scope='row'>1</th>
                    <td>{item.title}</td>
                    <td>2023.11.13</td>
                    <td>{userName}</td>
                    <td>
                      <s.Icon src={pen}></s.Icon>

                      <s.Icon src={trash}></s.Icon>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ))}
        </div>
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

      {clickedAddDocument ? <DocumentQuill /> : <DocumentList />}
    </s.Wrapper>
  );
};

export default DocumentPage;
