import React, {useState, useEffect} from 'react';

import {connect} from 'react-redux';
import {loadColors} from 'root/redux-core/actions/colors';

import {Cub, Wrap} from './style';

const Playground = ({
                      colors,
                      loadColors,
                    }) => {
  const [, refresh] = useState();

  useEffect(
      () => {
        const id = setTimeout(handleRefresh, 5000);
        return () => clearInterval(id);
      },
      [colors]
  );

  const handleRefresh = () => {
    handleLoadColors();
    refresh();
  };

  const handleLoadColors = () => {
    const wrapNode = document.getElementById('colors-wrapper');
    const compStyles  = window.getComputedStyle(wrapNode);

    const width = compStyles.getPropertyValue('width');
    const height = compStyles.getPropertyValue('height');

    loadColors({count: 1000, width, height});
  };

  return (
      <Wrap id='colors-wrapper'>
        {!!colors.data.length && (
            colors.data.map(color => (
                <Cub
                    key={color.value}
                    color={color.value}
                    x={color.coordinates.x}
                    y={color.coordinates.y}
                />
            ))
        )}

        <h1 onClick={handleLoadColors}>Refresh API</h1>
      </Wrap>
  );
};

const mapStateToProps = ({colors}) => ({
  colors,
});

const mapDispatchToProps = {
  loadColors,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playground);