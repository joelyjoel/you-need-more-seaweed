import React from 'react';

import './ThumbnailMenu.scss';

export function ThumbnailMenu(props) {
  return <div className='thumbnail-menu'>
    {props.children}
  </div>
}

/** An individual menu item. */
export function ThumbnailMenuItem(props) {
  if(!props.href)
    console.warn('ThumbnailMenu item has no destination')
  
  const handleClick = () => location.href = props.href

  return <div className='thumbnail-menu-item' onClick={handleClick}>
    {props.img ? <img src={props.img} /> : null}
    <label>{props.label}</label>
  </div>
}