import { AiOutlineArrowDown as Arrow } from "react-icons/ai";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import DetailsBox from "./DetailsBox.js"
export default function SummaryBox({
  selectedBox,
  toggleSelectedBox,
  boxName,
}) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(selectedBox === boxName);
  }, [selectedBox]);
  return (
    <>
      <IconContext.Provider value={{ color: "#4D65A8", size: "24px" }}>
        <StyledSummary
          isOpen={isOpen}
          onClick={() => toggleSelectedBox(boxName)}
        >
          <h3>{boxName}</h3>
          <Arrow
            style={isOpen ? { display: "none" } : { display: "initial" }}
          />
        </StyledSummary>
        <DetailsBox boxName={boxName} isOpen={isOpen}/>
      </IconContext.Provider>
    </>
  );
}
const StyledSummary = styled.button`
  width: 290px;
  height: 44px;
  background: rgba(224, 209, 237, 0.62);
  border-radius: ${({ isOpen }) => (isOpen ? "5px 5px 0 0" : "5px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  margin-top: 8px;
  border: none;
  h3 {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: #4d65a8;
  }
`;
