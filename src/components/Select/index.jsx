import { useEffect, useState } from 'react';
import * as s from './Select.style.js';
import lectureAPI from '../../api/lectureAPI.js';

export const Select = () => {
  const [lectures, setLectures] = useState([]);

  const userName = localStorage.getItem('userName');

  useEffect(() => {
    lectureAPI.getLectureList().then((data) => {
      setLectures(data.lectureList);
    });
  }, []);

  return (
    <>
      <s.Text>{userName}님의 강의실</s.Text>
      <s.SelectContainer>
        <s.SelectList>
          {lectures.map((item) => (
            <s.SelectItem key={`lectureItem_${item.id}`}>
              <s.LinkItem
                to={`:${item.id}`}
                onClick={() => localStorage.setItem('lectureName', item.name)}
              >
                {item.name}
              </s.LinkItem>
            </s.SelectItem>
          ))}
        </s.SelectList>
      </s.SelectContainer>
    </>
  );
};
