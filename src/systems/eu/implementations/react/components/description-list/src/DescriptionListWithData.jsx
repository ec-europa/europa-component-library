import React from 'react';
import PropTypes from 'prop-types';

import DescriptionList from './DescriptionList';
import DescriptionTerm from './DescriptionTerm';
import DescriptionDefinition from './DescriptionDefinition';

const DescriptionListWithData = ({ items, className, ...props }) => {
  return (
    <DescriptionList {...props} className={className}>
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
          definitions = item.definition.map((definition) => (
            <DescriptionDefinition key={definition}>
              {definition}
            </DescriptionDefinition>
          ));
        } else {
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
      ]),
    })
  ),
  className: PropTypes.string,
};

DescriptionListWithData.defaultProps = {
  items: [],
  className: '',
};

export default DescriptionListWithData;
