import '@ecl/dom-utils/polyfills';

import Accordion from '@ecl/vanilla-component-accordion';
import autoInit from '@ecl/dom-utils/autoinit';
import Banner from '@ecl/vanilla-component-banner';
import Carousel from '@ecl/vanilla-component-carousel';
import CategoryFilter from '@ecl/vanilla-component-category-filter';
import Datepicker from '@ecl/vanilla-component-datepicker';
import Breadcrumb from '@ecl/vanilla-component-breadcrumb';
import ContentBlock from '@ecl/vanilla-component-content-block';
import DescriptionList from '@ecl/vanilla-component-description-list';
import Expandable from '@ecl/vanilla-component-expandable';
import FileDownload from '@ecl/vanilla-component-file';
import FileUpload from '@ecl/vanilla-component-file-upload';
import Gallery from '@ecl/vanilla-component-gallery';
import Indicator from '@ecl/vanilla-component-indicator';
import InpageNavigation from '@ecl/vanilla-component-inpage-navigation';
import MediaContainer from '@ecl/vanilla-component-media-container';
import MegaMenu from '@ecl/vanilla-component-mega-menu';
import Menu from '@ecl/vanilla-component-menu';
import Modal from '@ecl/vanilla-component-modal';
import NewsTicker from '@ecl/vanilla-component-news-ticker';
import Notification from '@ecl/vanilla-component-notification';
import Popover from '@ecl/vanilla-component-popover';
import Range from '@ecl/vanilla-component-range';
import Select from '@ecl/vanilla-component-select';
import SiteHeader from '@ecl/vanilla-component-site-header';
import Table from '@ecl/vanilla-component-table';
import Tabs from '@ecl/vanilla-component-tabs';
import Timeline from '@ecl/vanilla-component-timeline';

const ECL = {
  autoInit,
  Accordion,
  Banner,
  Carousel,
  CategoryFilter,
  Datepicker,
  Breadcrumb,
  ContentBlock,
  DescriptionList,
  Expandable,
  FileDownload,
  FileUpload,
  Gallery,
  Indicator,
  InpageNavigation,
  MediaContainer,
  MegaMenu,
  Menu,
  Modal,
  NewsTicker,
  Notification,
  Popover,
  Range,
  Select,
  SiteHeader,
  Tabs,
  Table,
  Timeline,
};

// eslint-disable-next-line import/prefer-default-export
export { ECL };

if (typeof globalThis !== 'undefined') {
  globalThis.ECL = ECL;
} else if (typeof window !== 'undefined') {
  window.ECL = ECL;
}
