import styled from "styled-components";

/**
 * Hide the label from users, but not screenreaders
 */
export const Tag = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default Tag;
