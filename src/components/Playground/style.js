import styled from 'styled-components';

export const Wrap = styled('main')`
  height: 70vh;
  overflow: hidden;
  position: relative;
  width: 90vw;
  margin: auto;
  border: 2px solid red;
`;

export const Cub = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.color,
    top: `${props.y || 0}px`,
    left: `${props.x || 0}px`,
  },
}))`
    width: 8px;
    height: 8px;
    position: absolute;
  `;
