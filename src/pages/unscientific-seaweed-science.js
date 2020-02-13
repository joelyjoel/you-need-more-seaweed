import React from 'react';
import ReactDOM from 'react-dom';
import {PageHeader} from 'components/PageHeader.js'

import './global.scss';
import './unscientific-seaweed-science.scss';

ReactDOM.render(<PageHeader />, document.getElementById('page-header-wrapper'));

import img1 from 'images/unscientific-seaweed-science-1.jpg';
import img2 from 'images/unscientific-seaweed-science-2.jpg';
import img3 from 'images/margaretgatty_algae15.jpg';
import img4 from 'images/unscientific-seaweed-science-4.jpg';

ReactDOM.render(<img src={img1} />, document.getElementById('image-wrapper-1'));
ReactDOM.render(<img src={img2} />, document.getElementById('image-wrapper-2'));
ReactDOM.render(<img src={img3} />, document.getElementById('image-wrapper-3'));
ReactDOM.render(<img src={img4} />, document.getElementById('image-wrapper-4'));