import styled from 'styled-components';

export const Container = styled.div`
  width: 393px;
  min-height: 331px;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 32px;
  background-color: #4a56e2;
  overflow: hidden;
  border-collapse: collapse;
  border-spacing: 0;
  border: 0;
`;

export const Table = styled.table`
  width: 100%;
  border: none;
  text-align: center;
  font-family: 'Circe';
  font-style: normal;
  color: #ffffff;
`;

export const Thead = styled.thead`
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
  background-color: #6e78e8;
`;

export const Tbody = styled.tbody`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const RowHeading = styled.th`
  padding-top: 17px;
  padding-bottom: 16px;
`;

export const RowBody = styled.td`
  padding-top: 20px;
  padding-bottom: 24px;
`;

