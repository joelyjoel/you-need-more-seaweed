import React from 'react';
import ReactDOM from 'react-dom';

import './global.scss';
import './idea-for-a-date.scss'

// images
import exerpt1 from 'images/ideaforadate_exerpt1.jpg';
import exerpt2 from 'images/ideaforadate_exerpt2.jpg';
import exerpt3 from 'images/ideaforadate_exerpt3.jpg';
import { PageHeader } from '../components/PageHeader';
ReactDOM.render(<img src={exerpt1} />, document.getElementById('exerpt1-wrapper'));
ReactDOM.render(<img src={exerpt2} />, document.getElementById('exerpt2-wrapper'));
ReactDOM.render(<img src={exerpt3} />, document.getElementById('exerpt3-wrapper'));

ReactDOM.render(<PageHeader />, document.getElementById('page-header-wrapper'))