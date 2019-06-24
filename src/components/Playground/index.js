import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import {loadColors} from 'root/redux-core/actions/colors';

import {Cub} from './style';

const Playground = ({
                      colors,
                      loadColors,
                    }) => {

  useEffect(() => {
    loadColors();
  }, []);


  return (
      <main>
        {colors.data.length && (
            <Cub color={colors.data[0].value}/>
        )}

        <h1 onClick={loadColors}>Refresh API</h1>
      </main>
  );
};

const mapStateToProps = ({colors}) => ({
  colors,
});

const mapDispatchToProps = {
  loadColors,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playground);