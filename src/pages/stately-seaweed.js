import React from 'react';
import ReactDOM from 'react-dom';
import {PageHeader} from 'components/PageHeader';
import {UndulatingText} from 'components/UndulatingText';

import './global.scss';
import './stately-seaweed.scss';

ReactDOM.render(<PageHeader />, document.getElementById('page-header-wrapper'));
ReactDOM.render(<UndulatingText text='stately seaweed' />, document.getElementById('stately-title'));