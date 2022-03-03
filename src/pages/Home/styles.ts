import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 32px;
  background: var(--background);
`;

export const PeopleContainer = styled.div`
  width: ${window.innerWidth / 6}px;
  height: ${window.innerWidth / 6}px;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
`;

export const PeopleName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: var(--text);
  border-bottom: 1px solid #ccc;
`;

export const PeopleInfoContainer = styled.div`
  width: 100%;
`;

export const PeopleInfoType = styled.strong`
  color: var(--text);
  font-size: 14px;
`;

export const PeopleInfo = styled.span`
  color: var(--text);
  font-size: 14px;
`;
