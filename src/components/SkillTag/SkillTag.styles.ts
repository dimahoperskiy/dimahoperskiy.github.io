import styled from 'styled-components';
import { Tag } from 'antd';

export const StyledTag = styled(Tag)<{ $bigSize?: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: ${(p) => (p.$bigSize ? '18px' : '14px')};
  padding: ${(p) => (p.$bigSize ? '4px 12px' : '0 7px')};
`;
