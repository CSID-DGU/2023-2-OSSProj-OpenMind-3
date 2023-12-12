import * as s from './DocumentDetail.style';
import DOMPurify from 'isomorphic-dompurify';
import 'react-quill/dist/quill.core.css';
import documentAPI from '../../api/documentAPI';
import { useEffect, useState } from 'react';
const DocumentDetail = ({ documentId }) => {
  const [document, setDocument] = useState();

  const getDocument = () => {
    documentAPI.getDocument(documentId).then((data) => {
      console.log(data);
      setDocument(data);
    });
  };

  useEffect(() => {
    getDocument();
    console.log(documentId);
  }, []);
  return (
    <s.Wrapper>
      {document ? (
        <>
          <s.ModalHeader>{document.title}</s.ModalHeader>
          <p>생성일: {document.createDate}</p>
          <p>작성자: {document.writer}</p>
          <div
            className='view ql-editor' // react-quill css
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(document.content),
            }}
          />
        </>
      ) : (
        <>
          <div></div>
        </>
      )}
    </s.Wrapper>
  );
};

export default DocumentDetail;
