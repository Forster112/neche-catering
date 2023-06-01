import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.$primary ? "#33548A" : "#EAEDF3"};
  color: ${(props) =>
    props.$primary ? "#EAEDF3" : "#33548A"};

  &:hover {
    background: ${(props) =>
      props.$primary ? "#5a7baf" : "#EAEDF3"};
    border: ${(props) =>
      props.$primary
        ? "2px solid #33548a"
        : "2px solid #000"};

    color: ${(props) =>
      props.$primary ? "#EAEDF3" : "#33548A"};
  }

  font-size: ${(props) => props["font-size"] || "1rem"};
  padding: 7px 2px;
  border: 2px solid #33548a;
  border-radius: 5px;
  width: ${(props) => props.width || "125px"};
  transition: 0.2s;
`;

export const PopularBtn = styled.button`
  background: transparent;
  color: #eaedf3;
  font-size: 1.05rem;
  padding: 2px;
  border: none;
  width: ${(props) => props.width || "85px"};
  height: ${(props) => props.height || "40px"};
  border-radius: 5px;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.background || "#ff2626"};
  width: ${(props) => props.width || "30px"};
  height: ${(props) => props.height || "30px"};
  padding: 2px;
  border-radius: 50%;
  cursor: ${(props) =>
    props.$primary ? "pointer" : "default"};
  transition: 0.3s;

  @media only screen and (max-width: 400px) {
    width: ${(props) => (props.$icon ? "50px" : null)};
    height: ${(props) => (props.$icon ? "50px" : null)};
  }
`;

export const ServiceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: ${(props) =>
    props.$primary ? "row" : "column"};
  gap: 30px;
  background: #add0ef;
  color: #000;
  border-radius: 5px;
  transition: 0.3s;
  padding: ${(props) => props.padding || "20px"};
  width: ${(props) => props.width};
  font-family: "RocknRoll One", sans-serif !important;

  &:hover {
    transform: ${(props) =>
      props.$primary ? "translateY(-10px)" : "none"};
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Istok Web", sans-serif;
  gap: ${(props) => props.gap || "5px"};
  padding: ${(props) => props.padding || "20px"};
  border: 2px solid #add0ef;
  background: #eaedf3;
  margin-bottom: 30px;
`;

export const DeliveryStatus = styled.span`
  background: ${(props) => {
    if (props.stats === "$green") return "#06952c";
    if (props.stats === "$red") return "red";
    if (props.stats === "$yellow") return "yellow";
  }};
  color: #000000;
  padding: 3px;
  border-radius: 5px;
`;
