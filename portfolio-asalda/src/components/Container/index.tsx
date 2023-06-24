import React from "react";

import { StyledContainer } from "./styledComponents";
import type { IContainerProperties } from "./types";

const Container: React.FC<IContainerProperties> = ({
  align,
  background,
  bgColor,
  children,
  display,
  height,
  justify,
  width,
  wrap,
}): JSX.Element => {
  return (
    <StyledContainer
      align={align}
      background={background}
      bgColor={bgColor}
      display={display}
      height={height}
      justify={justify}
      width={width}
      wrap={wrap}
    >
      {children}
    </StyledContainer>
  );
};

export { Container };
