import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.$primary ? "#33548A" : "#EAEDF3"};
  color: ${(props) =>
    props.$primary ? "#EAEDF3" : "#33548A"};

  &:hover {
    background: ${(props) =>
      props.$primary ? "#000" : "#EAEDF3"};
    border: ${(props) =>
      props.$primary
        ? "2px solid #33548a"
        : "2px solid #000"};

    color: ${(props) =>
      props.$primary ? "#EAEDF3" : "#33548A"};
  }

  font-size: 1.05rem;
  padding: 7px 2px;
  border: 2px solid #33548a;
  border-radius: 5px;
  width: 125px;
  transition: 0.3s;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props=>props.background};
  width: ${props=>props.width};
  height: ${props=>props.height};
  padding: 2px;
  border-radius: 50%;
  cursor: ${props=>props.$primary ? "pointer": "default"};
  transition: 0.3s;
`;

export const ServiceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  background: #add0ef;
  border-radius: 5px;
  transition: 0.3s;
  padding: 20px;
  font-family: "RocknRoll One", sans-serif !important;

  &:hover {
    transform: translateY(-10px);
  }
`;


IconWrap.defaultProps = {
  "width": "30px",
  "height": "30px",
  "background": "#ff2626"
}