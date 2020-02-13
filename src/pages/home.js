import React from 'react';
import ReactDOM from 'react-dom';
import {ThumbnailMenu, ThumbnailMenuItem} from 'components/ThumbnailMenu';
import { UndulatingText } from '../components/UndulatingText';

// Images
import statelySeaWeedThumbnail from 'images/stately-seaweed-thumbnail.jpg';
import ideaForADateThumbnail from 'images/idea-for-a-date-thumbnail.jpg';
import unscientificSeaweedScienceThumbnail from 'images/unscientific-seaweed-science-thumbnail.jpg';
import seaweedForYourCervixThumbnail from 'images/seaweed-for-your-cervix-thumbnail.jpg';

// Stylesheets
import './home.scss';
import './global.scss';

const mainMenu = <ThumbnailMenu>
  <ThumbnailMenuItem
    label='seaweed for your cervix'
    img={seaweedForYourCervixThumbnail}
    href='seaweed-for-your-cervix.html'
    />
  <ThumbnailMenuItem
    label='idea for a date'
    img={ideaForADateThumbnail}
    href='idea-for-a-date.html'
    />
  <ThumbnailMenuItem
    label='unscientific seaweed science'
    img={unscientificSeaweedScienceThumbnail}
    href='unscientific-seaweed-science.html'
    />
  <ThumbnailMenuItem 
    label='stately seaweed' 
    img={statelySeaWeedThumbnail} 
    href='stately-seaweed.html'
    />
</ThumbnailMenu>

ReactDOM.render(
  mainMenu,
  document.getElementById('main-menu'), 
)

ReactDOM.render(
  <UndulatingText text='you need more seaweed' />,
  document.getElementById('undulating-title')
)