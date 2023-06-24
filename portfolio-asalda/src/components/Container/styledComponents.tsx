import styled from "styled-components";
import type { IContainerProperties } from "./types";

const StyledContainer = styled.div.attrs({
  classname: "styled-container",
})<IContainerProperties>`
  ${({
    align = "unset",
    background,
    bgColor = "trasparent",
    display = "block",
    height = "auto",
    justify = "unset",
    width = "auto",
    wrap = "unset",
  }): string => `
    align-items: ${align};
    background: ${background};
    background-color: ${bgColor};
    width: ${width};
    height: ${height};
    display: ${display};
    justify-content: ${justify};
    flex-wrap: ${wrap};                                                  
  `}
`;

export { StyledContainer };
