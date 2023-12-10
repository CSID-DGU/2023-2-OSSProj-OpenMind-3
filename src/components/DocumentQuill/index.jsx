import { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as s from './DocumentQuill.style';

const DocumentQuill = () => {
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
        <s.TitleInputWrapper>
          <s.TitleInput placeholder='제목을 입력하세요' />
        </s.TitleInputWrapper>
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

export default DocumentQuill;
