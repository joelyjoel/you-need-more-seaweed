import React, { Component } from 'react';
import { UndulatingText } from './UndulatingText';

import './PageHeader.scss';

import kelp from 'images/kelp.gif';


export class PageHeader extends Component {
    render() {
        return (
            <header className='page-header'>

              <a href='./home.html' className='returnhome'>
                <img src={kelp} />
                <label>return home</label>
              </a>

              <h1 class='website-title'><UndulatingText text='you need more seaweed'></UndulatingText></h1>
            </header>
        );
    }
}