import React from 'react';
import { bool, string, number } from 'prop-types';
import { composeClassName } from 'rex-react-utils';

const CarouselItem = ({ id, src, title, caption, itemId, transparency }) => {
  const itemClass = id === 1 && 'isActive';
  const classes = composeClassName([itemClass, 'swiper-slide']);


  return (
    <div
      {...classes}
      role="presentation"
      style={{ backgroundImage: `url(${src})` }}
      data-itemid={itemId}
    >
      <div
        className="carousel-backdrop"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${transparency}) 100%)`,
        }}
      />
      <div className="carousel-item-description">
        <div className="carousel-item-title">{title}</div>
        <div className="carousel-item-caption">{caption}</div>
      </div>
    </div>
  );
};

CarouselItem.defaultProps = {
  isActive: false,
  id: 1,
  src: '',
  title: 'Add title here',
  caption: 'Add caption here',
  itemId: 1,
  transparency: 0.24,
};

CarouselItem.propTypes = {
  isActive: bool,
  id: number,
  src: string,
  title: string,
  caption: string,
  itemId: number,
  transparency: number,
};

export default CarouselItem;
