import React from 'react';
import PropTypes from 'prop-types';

/** what a fancy component oh boy oh gee */
function HelloWorld({message}) {
    return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
    /** message to display*/
    message: PropTypes.string
};

HelloWorld.defaultProps = {
    message: 'World'
};

export default HelloWorld;