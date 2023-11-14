import React, { useRef, useState } from 'react';
import * as s from '../style/DocumentPage.style';
import { useParams } from 'react-router-dom';
import plus from '../assets/icon/WhiteAdd.svg';
import pen from '../assets/icon/pen.svg';
import trash from '../assets/icon/trash.svg';
import List from '../assets/icon/List.svg';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DocumentPage = () => {
  const [clickedAddDocument, setClickedAddDocument] = useState(false);
  const params = useParams();
  const teamId = Number(params.teamId.substring(1));

  const handleClickAddButton = () => {
    setClickedAddDocument((prev) => !prev);
  };

  const WriteDocument = () => {
    const [value, setValue] = useState();
    const quillRef = useRef(null);

    const modules = {
      toolbar: [
        [{ font: [] }],
        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image'],
        ['clean'],
      ],
    };
    const formats = [
      'font',
      'size',
      'header',
      'color',
      'background',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'indent',
      'link',
      'image',
    ];
    return (
      <>
        <s.QuillWrapper>
          <ReactQuill
            style={{ width: '60vw', height: '66vh' }}
            ref={quillRef}
            modules={modules}
            formats={formats}
            value={value}
            onChange={setValue}
          />
        </s.QuillWrapper>
        <s.ButtonWrapper>
          <s.SaveButton>저장</s.SaveButton>
        </s.ButtonWrapper>
      </>
    );
  };
  const DocumentList = () => {
    return (
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
                  <s.Icon src={pen}></s.Icon>

                  <s.Icon src={trash}></s.Icon>
                </td>
              </tr>
            </tbody>
          </table>
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

      {clickedAddDocument ? <WriteDocument /> : <DocumentList />}
    </s.Wrapper>
  );
};

export default DocumentPage;
