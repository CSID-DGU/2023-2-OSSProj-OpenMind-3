import { useEffect, useState } from 'react';
import * as s from './Select.style.js';
import axios from '../../api/AxiosC.js';

export const Select = () => {
  const [lectures, setLectures] = useState([]);
  const accessToken = sessionStorage.getItem('accessToken');
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/lecture`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(200);
          return response.data;
        }
        if (response.status === 400) {
          console.log(400);
          const responseData = response.data;
          const errorMessages = Object.values(responseData.error).join('\n');
          alert(errorMessages);
          throw new Error();
        }
      })
      .then((data) => {
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
