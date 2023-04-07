import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.$primary ? "#33548A" : "#EAEDF3"};
  color: ${(props) =>
    props.$primary ? "#EAEDF3" : "#33548A"};

  &:hover {
    background: ${(props) =>
      props.$primary ? "#EAEDF3" : "#33548A"};

    color: ${(props) =>
      props.$primary ? "#33548A" : "#EAEDF3"};
  }

  font-size: 1.05rem;
  padding: 7px 2px;
  border: 2px solid #33548a;
  border-radius: 5px;
  width: 125px;
  transition: 0.9s
`;
