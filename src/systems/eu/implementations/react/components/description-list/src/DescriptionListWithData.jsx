import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tag from '@ecl/eu-react-component-tag';

import DescriptionList from './DescriptionList';
import DescriptionTerm from './DescriptionTerm';
import DescriptionDefinition from './DescriptionDefinition';

const DescriptionListWithData = ({ items, className, variant, ...props }) => {
  return (
    <DescriptionList
      {...props}
      className={classnames(className, {
        [`ecl-description-list--${variant}`]: variant,
      })}
    >
      {items.map((item) => {
        let terms = '';
        if (Array.isArray(item.term)) {
          terms = item.term.map((term) => (
            <DescriptionTerm key={term}>{term}</DescriptionTerm>
          ));
        } else {
          terms = <DescriptionTerm>{item.term}</DescriptionTerm>;
        }

        let definitions = '';
        if (Array.isArray(item.definition)) {
          if (
            Object.prototype.toString.call(item.definition[0]) ===
            '[object Object]'
          ) {
            // Array of (tag) objects
            const definitionTags = item.definition.map((definition) => (
              <Tag
                key={definition.label}
                {...definition}
                className={classnames(
                  definition.className,
                  'ecl-description-list__tag'
                )}
              />
            ));
            definitions = (
              <DescriptionDefinition>{definitionTags}</DescriptionDefinition>
            );
          } else {
            // Array of strings
            definitions = item.definition.map((definition) => {
              return (
                <DescriptionDefinition key={definition}>
                  {definition}
                </DescriptionDefinition>
              );
            });
          }
        } else {
          // Single string
          definitions = (
            <DescriptionDefinition>{item.definition}</DescriptionDefinition>
          );
        }

        return (
          <React.Fragment key={item.term}>
            {terms}
            {definitions}
          </React.Fragment>
        );
      })}
    </DescriptionList>
  );
};

DescriptionListWithData.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      term: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      definition: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.shape(Tag.propTypes)),
      ]),
    })
  ),
  variant: PropTypes.string,
  className: PropTypes.string,
};

DescriptionListWithData.defaultProps = {
  items: [],
  variant: '',
  className: '',
};

export default DescriptionListWithData;
