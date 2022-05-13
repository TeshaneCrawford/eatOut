import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <span className="spoon__img">
    <Image src={images.spoon} alt="spoon_image" width="" height="" className="spoon__img" />
    </span>
  </div>
);

export default SubHeading;