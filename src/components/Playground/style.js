import styled, {css} from 'styled-components';

export const Cub = styled('div')`
  width: 200px;
  height: 200px;
  
  ${props => props.color && css`
    background-color: ${props.color};
  `}
`;
