import { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as s from './DocumentQuill.style';
import { useParams } from 'react-router-dom';
import documentAPI from '../../api/documentAPI';

const DocumentQuill = () => {
  const userName = localStorage.getItem('userName');
  const params = useParams();
  const teamId = Number(params.teamId.substring(1));

  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  const [content, setContent] = useState('');

  // const [quillData, setQuillData] = useState({
  //   id: teamId,
  //   title: '',
  //   content: content,
  //   writer: userName,
  //   createDate: formattedDate,
  // });

  const quillRef = useRef(null);
  const titleRef = useRef(null);

  const createDocuments = (quillData) => {
    documentAPI.createDocument(quillData).then((data) => {
      if (data) {
        window.alert('회의록이 등록되었습니다!');
        window.location.reload();
      } else {
        window.alert('실패');
      }
    });
  };

  const submitDocument = () => {
    const quillData = {
      teamId: teamId,
      title: titleRef.current.value,
      content: content,
      writer: userName,
      createDate: formattedDate,
    };
    createDocuments(quillData);
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setQuillData({
    //   ...quillData,
    //   content: quillRef.current.value,
    //   [name]: value,
    // });
    console.log(name, value);
  };
  return (
    <>
      <s.QuillWrapper>
        <s.TitleInputWrapper>
          <s.TitleInput
            placeholder='제목을 입력하세요'
            name='title'
            ref={titleRef}
          />
        </s.TitleInputWrapper>
        <ReactQuill
          name='content'
          style={{ width: '60vw', height: '55vh' }}
          ref={quillRef}
          modules={modules}
          formats={formats}
          value={content}
          onChange={setContent}
        />
      </s.QuillWrapper>
      <s.ButtonWrapper>
        <s.SaveButton onClick={submitDocument}> 저장</s.SaveButton>
      </s.ButtonWrapper>
    </>
  );
};

export default DocumentQuill;
