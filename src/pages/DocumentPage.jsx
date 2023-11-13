import React from 'react';
import * as s from '../style/DocumentPage.style';
import { useParams } from 'react-router-dom';
import plus from '../assets/icon/WhiteAdd.svg';
import pen from '../assets/icon/pen.svg';
import trash from '../assets/icon/trash.svg';

const DocumentPage = () => {
  const params = useParams();
  const teamId = Number(params.teamId.substring(1));

  const handleClickAddButton = () => {};
  return (
    <s.Wrapper>
      <s.DocumentListContainerHeader>
        <s.HeaderLabel>회의록 목록</s.HeaderLabel>
        <s.AddButton src={plus} onClick={handleClickAddButton}></s.AddButton>
      </s.DocumentListContainerHeader>
      <s.DocumentListContainer>
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
                <td>제안서 PPT 제작</td>
                <td>2023.11.13</td>
                <td>테스트계정</td>
                <td>
                  <s.Icon src={pen} onClick={handleClickAddButton}></s.Icon>

                  <s.Icon src={trash} onClick={handleClickAddButton}></s.Icon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </s.DocumentListContainer>
    </s.Wrapper>
  );
};

export default DocumentPage;
