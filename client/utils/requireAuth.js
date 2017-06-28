import React from 'react';

import PropTypes from 'prop-types';

let requireAuth = () => {
    console.log(this)
};

requireAuth.contextTypes = {
    router: PropTypes.object.isRequired
};

return connect()(requireAuth);