import '@ecl/dom-utils/polyfills';

import Accordion from '@ecl/accordion';
import autoInit from '@ecl/dom-utils/autoinit';
import Banner from '@ecl/banner';
import Carousel from '@ecl/carousel';
import CategoryFilter from '@ecl/category-filter';
import Datepicker from '@ecl/datepicker';
import Breadcrumb from '@ecl/breadcrumb';
import ContentBlock from '@ecl/content-block';
import DescriptionList from '@ecl/description-list';
import Expandable from '@ecl/expandable';
import FileDownload from '@ecl/file';
import FileUpload from '@ecl/file-upload';
import Gallery from '@ecl/gallery';
import Indicator from '@ecl/indicator';
import InpageNavigation from '@ecl/inpage-navigation';
import MediaContainer from '@ecl/media-container';
import MegaMenu from '@ecl/mega-menu';
import Menu from '@ecl/menu';
import Modal from '@ecl/modal';
import NewsTicker from '@ecl/news-ticker';
import Notification from '@ecl/notification';
import Popover from '@ecl/popover';
import Range from '@ecl/range';
import Select from '@ecl/select';
import SiteHeader from '@ecl/site-header';
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
