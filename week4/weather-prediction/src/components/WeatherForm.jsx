import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const WeatherForm = () => {
  const { pathname } = useLocation();
  const [city, setCity] = useState(pathname.split("/")[2]);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const time = e.target.time.value;
    const city = e.target.city.value;
    if (city === "") return alert("도시를 입력해주세요");
    setCity(city);
    navigate(`/${time}/${city}`);
  };

  return (
    <St.FormWrapper>
      <St.Form onSubmit={onSubmit}>
        <select name="time">
          <option value="day">오늘</option>
          <option value="week">주간</option>
        </select>
        <input
          type="text"
          name="city"
          placeholder={city === "" ? "도시 명 ex)seoul" : city}
        />
        <button type="submit">검색</button>
      </St.Form>
    </St.FormWrapper>
  );
};

export default WeatherForm;

const St = {
  FormWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  `,

  Form: styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 1rem;

    & > select {
      width: 10rem;
      height: 4rem;
      padding: 0.5rem;
      margin: 0.5rem;
    }

    & > input {
      width: 20rem;
      height: 4rem;
      padding: 0.5rem;
      margin: 0.5rem;
    }

    & > button {
      width: 10rem;
      height: 4rem;
      padding: 0.5rem;
      margin: 0.5rem;
      background-color: aliceblue;
      border: none;
    }
  `,
};
