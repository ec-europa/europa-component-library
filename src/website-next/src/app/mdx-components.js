'use client';

import styles from './styles/markdown.module.scss';

import ColorLayout from '../website-components/color/Layout';
import ColorPalette from '../website-components/color/Palette';
import ColorPaletteItem from '../website-components/color/PaletteItem';
import Link from '../website-components/Link/Link';
import Thumbnail from '../website-components/Thumbnail/Thumbnail';

import Col from './components/Grid/Col';
import Container from './components/Grid/Container';
import Row from './components/Grid/Row';

function H1({ children, className, ...props }) {
  return (
    <h1 className={className || styles.h1} {...props}>
      {children}
    </h1>
  );
}
function H2({ children, className, ...props }) {
  return (
    <h2 className={className || styles.h2} {...props}>
      {children}
    </h2>
  );
}
function H3({ children, className, ...props }) {
  return (
    <h3 className={className || styles.h3} {...props}>
      {children}
    </h3>
  );
}
function H4({ children, className, ...props }) {
  return (
    <h4 className={className || styles.h4} {...props}>
      {children}
    </h4>
  );
}
function P({ children, className, ...props }) {
  return (
    <p className={className || styles.p} {...props}>
      {children}
    </p>
  );
}
function Details({ children, className, ...props }) {
  return (
    <details className={className || styles.details} {...props}>
      {children}
    </details>
  );
}
function Summary({ children, className, ...props }) {
  return (
    <summary className={className || styles.summary} {...props}>
      {children}
    </summary>
  );
}
function Ul({ children, className, ...props }) {
  return (
    <ul className={className || styles.ul} {...props}>
      {children}
    </ul>
  );
}
function Ol({ children, className, ...props }) {
  return (
    <ol className={className || styles.ol} {...props}>
      {children}
    </ol>
  );
}
function Table({ children, className, ...props }) {
  return (
    <table className={className || styles.table} {...props}>
      {children}
    </table>
  );
}
function THead({ children, className, ...props }) {
  return (
    <thead className={className || styles.thead} {...props}>
      {children}
    </thead>
  );
}
function TBody({ children, className, ...props }) {
  return (
    <tbody className={className || styles.tbody} {...props}>
      {children}
    </tbody>
  );
}
function TR({ children, className, ...props }) {
  return (
    <tr className={className || styles.tr} {...props}>
      {children}
    </tr>
  );
}
function TH({ children, className, ...props }) {
  return (
    <th className={className || styles.th} {...props}>
      {children}
    </th>
  );
}
function TD({ children, className, ...props }) {
  return (
    <td className={className || styles.td} {...props}>
      {children}
    </td>
  );
}
function HR({ className, ...props }) {
  return <hr className={className || styles.hr} {...props} />;
}
function A({ href, children, className, ...props }) {
  return (
    <a href={href} className={className || styles.a} {...props}>
      {children}
    </a>
  );
}
function Img({ alt, src, className, ...props }) {
  return (
    <a
      className={styles.imgA}
      href={src}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img alt={alt} src={src} className={className || styles.img} {...props} />
    </a>
  );
}

export const mdxComponents = {
  // Headings
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  // Text
  p: P,
  details: Details,
  summary: Summary,
  ul: Ul,
  ol: Ol,
  // Tables
  table: Table,
  thead: THead,
  tbody: TBody,
  tr: TR,
  th: TH,
  td: TD,
  hr: HR,
  a: A,
  img: Img,

  // ECL-specific
  ColorLayout,
  ColorPalette,
  ColorPaletteItem,
  Link,
  Thumbnail,
  Row,
  Col,
  Container,
};
