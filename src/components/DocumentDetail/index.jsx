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
          <s.DateLabel>
            생성일: {new Date(document.createDate).toLocaleString()}
          </s.DateLabel>
          <s.AuthorLabel>작성자: {document.writer}</s.AuthorLabel>
          <s.ModalBody>
            <div
              className='view ql-editor'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(document.content),
              }}
            />
          </s.ModalBody>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </s.Wrapper>
  );
};

export default DocumentDetail;
