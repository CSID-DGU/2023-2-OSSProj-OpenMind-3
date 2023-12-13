import { useEffect, useState } from 'react';
import * as s from './Select.style.js';
import lectureAPI from '../../api/lectureAPI.js';

export const Select = () => {
  const [lectures, setLectures] = useState([]);

  const userName = localStorage.getItem('userName');

  const getLectureList = () => {
    lectureAPI.getLectureList().then((data) => {
      if (data) {
        setLectures(data?.lectureList);
      } else {
        window.location.reload();
      }
    });
  };

  const accessToken = sessionStorage.getItem('accessToken');
  useEffect(() => {
    if (accessToken) getLectureList();
  });

  return (
    <s.Wrapper>
      <>
        <s.Text>{userName}님의 강의실</s.Text>
        <s.SelectContainer>
          <s.SelectList>
            {accessToken ? (
              lectures &&
              lectures?.map((item) => (
                <s.SelectItem key={`lectureItem_${item.id}`}>
                  <s.LinkItem
                    to={`:${item.id}`}
                    onClick={() =>
                      localStorage.setItem('lectureName', item.name)
                    }
                  >
                    {item.name}
                  </s.LinkItem>
                </s.SelectItem>
              ))
            ) : (
              <p>Loading....</p>
            )}
          </s.SelectList>
        </s.SelectContainer>
      </>
    </s.Wrapper>
  );
};
