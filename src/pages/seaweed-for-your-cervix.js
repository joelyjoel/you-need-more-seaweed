import React from 'react';
import ReactDOM from 'react-dom';
import {PageHeader} from 'components/PageHeader.js'

import './global.scss';
import './seaweed-for-your-cervix.scss'

import seaweedForYourCervix from '../images/seaweed-for-your-cervix-thumbnail.jpg';

ReactDOM.render(<PageHeader />, document.getElementById('page-header-wrapper'));
ReactDOM.render(<img src={seaweedForYourCervix} />, document.getElementById('top-image'));
