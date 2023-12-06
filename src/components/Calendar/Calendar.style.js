import styled from 'styled-components';

export const FullCalendarContainer = styled.div`
  .calendar-wrapper {
    width: 100%;
    height: 100%;
  }

  .fc {
    width: 100%;
  }
  /* 일요일 날짜: 빨간색 */
  .fc-day-sun a {
    color: red;
  }

  /* 토요일 날짜: 파란색 */
  .fc-day-sat a {
    color: blue;
  }

  //toolbar
  .fc .fc-toolbar.fc-header-toolbar {
    margin: 0;
    padding: 0 40px;
    background-color: #f59c00;
    height: 50px;
    font-weight: 600;
    font-size: 12px;
    line-height: 29px;
    color: white;
    border-radius: 20px 20px 0px 0px;
  }

  // toolbar 버튼
  .fc .fc-button-primary {
    background: #f59c00;
    border: none;
    outline: none;

    span {
      font-weight: 500;
      font-size: 28px;
    }
    .active {
      background: #f59c00;
      outline: none;
      border: 1px solid #f59c00;
    }
  }

  .fc .fc-customButton-button {
    background-color: #f59c00;
    :hover {
      outline: none;
    }
    :active {
      background: #f59c00;
      outline: none;
    }
  }
  // 요일 부분
  .fc-theme-standard th {
    height: 25px;
    padding-top: 3px;
    border: 1px solid #dddee0;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #7b7b7b;
  }
`;
