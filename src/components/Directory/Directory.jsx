import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import SECTION_DATA from './section.data.js';
import './Directory.styles.scss';

const Directory = () => {
  const [sections] = useState(SECTION_DATA);
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
