/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import demoContent from '@ecl/ec-specs-footer/demo/data';
import Footer from '../Footer';

storiesOf('Footer', module).add('default', () => <Footer {...demoContent} />);
