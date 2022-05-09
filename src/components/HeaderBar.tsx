import styled from "styled-components";
import Filter from "./Filter";
import SearchIcon from "../img/searchIcon.png";
import CalendarIcon from "../img/calendarIcon.png";

const Container = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #c4c4c4;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
`;

const HeaderBar = () => {
  return (
    <Container>
      <Filter iconSrc={SearchIcon} label={"전체 헤드라인"} />
      <Filter iconSrc={CalendarIcon} label={"전체 날짜"} />
      <Filter label={"전체 국가"} />
    </Container>
  );
};

export default HeaderBar;