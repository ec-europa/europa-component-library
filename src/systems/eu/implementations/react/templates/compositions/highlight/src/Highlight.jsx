import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ContentItem from '@ecl/eu-react-composition-content-item';
import Card from '@ecl/eu-react-component-card';
import Link from '@ecl/eu-react-component-link';

function Highlight({
  heading,
  contentItems,
  link,
  cards,
  className,
  ...props
}) {
  const Heading = heading ? `h${heading.level || 2}` : '';

  return (
    <div className="ecl-container">
      <section {...props}>
        {!!(heading && heading.label) && (
          <Heading className={`ecl-u-type-heading-${heading.level || 2}`}>
            {heading.label}
          </Heading>
        )}

        <div className="ecl-row">
          <div className="ecl-col-12 ecl-col-md-8 ecl-u-border-md-right ecl-u-border-color-md-grey-15">
            {contentItems &&
              contentItems.map((contentItem, index) => (
                <ContentItem
                  {...contentItem}
                  key={contentItem.title.label}
                  className={classnames(contentItem.className, {
                    'ecl-u-pt-none': index === 0,
                  })}
                />
              ))}
            {link && (
              <Link
                {...link}
                variant="standalone"
                className={classnames(
                  link.className,
                  'ecl-u-type-bold ecl-u-mt-l'
                )}
              />
            )}
          </div>

          <div className="ecl-col-12 ecl-col-md-4">
            {cards &&
              cards.map((card, index) => (
                <Card
                  {...card}
                  key={card.title.label}
                  variant="tile"
                  className={classnames(
                    card.className,
                    'ecl-u-mt-xl ecl-u-height-auto',
                    {
                      'ecl-u-mt-md-none': index === 0,
                    }
                  )}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Highlight.propTypes = {
  heading: PropTypes.shape({
    label: PropTypes.string,
    level: PropTypes.number,
  }),
  contentItems: PropTypes.arrayOf(PropTypes.shape(ContentItem.propTypes)),
  link: PropTypes.shape(Link.propTypes),
  cards: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
  className: PropTypes.string,
};

Highlight.defaultProps = {
  heading: {},
  contentItems: [],
  link: {},
  cards: [],
  className: '',
};

export default Highlight;
