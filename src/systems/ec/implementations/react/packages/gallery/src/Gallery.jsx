import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import VanillaGallery from '@ecl/ec-component-gallery/ec-component-gallery';
import GalleryItem from './GalleryItem';
import GalleryOverlay from './GalleryOverlay';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.gallery = null;
    this.galleryRef = React.createRef();
  }

  componentDidMount() {
    this.gallery = new VanillaGallery(this.galleryRef.current);
    this.gallery.init();
  }

  componentDidUpdate() {
    console.log('update');
  }

  componentWillUnmount() {
    if (this.gallery) this.gallery.destroy();
  }

  render() {
    const { overlay, items, selectedItemId, className, ...props } = this.props;
    console.log(this);
    console.log(selectedItemId);

    const classNames = classnames(className, 'ecl-gallery');

    return (
      <section {...props} className={classNames} ref={this.galleryRef}>
        <ul className="ecl-gallery__list">
          {items.map(item => (
            <GalleryItem item={item} key={item.src} />
          ))}
        </ul>

        <GalleryOverlay
          overlay={overlay}
          item={items[selectedItemId] ? items[selectedItemId] : {}}
        />
      </section>
    );
  }
}

Gallery.propTypes = {
  overlay: PropTypes.shape(GalleryOverlay.propTypes),
  items: PropTypes.arrayOf(PropTypes.shape(GalleryItem.propTypes)),
  selectedItemId: PropTypes.number,
  className: PropTypes.string,
};

Gallery.defaultProps = {
  overlay: {},
  items: [],
  selectedItemId: 0,
  className: '',
};
