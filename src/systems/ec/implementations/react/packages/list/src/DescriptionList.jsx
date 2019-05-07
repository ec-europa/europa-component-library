import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DescriptionTerm from './DescriptionTerm';
import DescriptionDefinition from './DescriptionDefinition';

const DescriptionList = ({ items, className, ...props }) => {
  const classNames = classnames(className, 'ecl-description-list');

  return (
    <dl {...props} className={classNames}>
      {items.map(item => {
        let terms = '';
        if (Array.isArray(item.term)) {
          terms = item.term.map(term => (
            <DescriptionTerm key={term}>{term}</DescriptionTerm>
          ));
        } else {
          terms = <DescriptionTerm>{item.term}</DescriptionTerm>;
        }

        let definitions = '';
        if (Array.isArray(item.definition)) {
          definitions = item.definition.map(definition => (
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
          <Fragment key={item.term}>
            {terms}
            {definitions}
          </Fragment>
        );
      })}
    </dl>
  );
};

DescriptionList.propTypes = {
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

DescriptionList.defaultProps = {
  items: [],
  className: '',
};

export default DescriptionList;
