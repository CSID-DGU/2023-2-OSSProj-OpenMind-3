import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  padding: 32px;
  background-color: #fff; // 밝은 배경색
  border-radius: 8px; // 모서리 둥글게
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // 그림자 효과 */
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.h2`
  margin: 0;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0; // 구분선
  font-size: 24px; // 제목 폰트 크기
  color: #333; // 제목 색상
  font-weight: 600; // 제목 두께
`;

export const ModalBody = styled.div`
  flex: 1; // 남은 공간 채우기
  margin-top: 24px;
  overflow-y: auto; // 내용이 길어지면 스크롤
  line-height: 1.6; // 줄 간격
  border-top: 1px solid #f0f0f0; // 구분선
`;

export const ModalFooter = styled.div`
  margin-top: 24px;
  text-align: right;
`;

export const DateLabel = styled.p`
  font-size: 16px;
  color: #666;
  margin: 4px 0; // 상하 여백
`;

export const AuthorLabel = styled.p`
  font-size: 16px;
  color: #666;
  margin: 4px 0;
`;

export const Content = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #444;
`;
