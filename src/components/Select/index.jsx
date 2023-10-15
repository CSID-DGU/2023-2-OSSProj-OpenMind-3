import * as s from './Select.style.js';

export const Select = () => {
  return (
    <>
      <s.Text>홍길동님의 강의실</s.Text>
      <s.SelectContainer>
        <s.SelectList>
          <s.SelectItem>
            <s.LinkItem to={'/teamspace/main'}>
              오픈소스소프트웨어프로젝트
            </s.LinkItem>
          </s.SelectItem>
          <s.SelectItem>
            <s.LinkItem to={'/teamspace/main'}>융합프로그래밍2</s.LinkItem>
          </s.SelectItem>
          <s.SelectItem>
            <s.LinkItem to={'/teamspace/main'}>
              오픈소스소프트웨어실습
            </s.LinkItem>
          </s.SelectItem>
          <s.SelectItem>
            <s.LinkItem to={'/teamspace/main'}>컴퓨터시스템</s.LinkItem>
          </s.SelectItem>
          <s.SelectItem>
            <s.LinkItem to={'/teamspace/main'}>융합캡스톤디자인</s.LinkItem>
          </s.SelectItem>
          <s.SelectItem>
            <s.LinkItem to={'/teamspace/main'}>자료구조및알고리즘1</s.LinkItem>
          </s.SelectItem>
        </s.SelectList>
      </s.SelectContainer>
    </>
  );
};
