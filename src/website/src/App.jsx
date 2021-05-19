import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { MDXProvider } from '@mdx-js/react';
import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

// Global styles
import 'normalize.css/normalize.css';
import './styles/app.scss';
import 'prismjs/themes/prism.css';
import styles from './styles/markdown.scss';

// Static routes
import MainRoutes from './routes/MainRoutes';

/* eslint-disable react/prop-types */
const customComponents = {
  h1: ({ children, className, ...props }) => (
    <h1 className={className || styles.h1} {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, className, ...props }) => (
    <h2 className={className || styles.h2} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, className, ...props }) => (
    <h3 className={className || styles.h3} {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, className, ...props }) => (
    <h4 className={className || styles.h4} {...props}>
      {children}
    </h4>
  ),
  p: ({ children, className, ...props }) => (
    <p className={className || styles.p} {...props}>
      {children}
    </p>
  ),
  ul: ({ children, className, ...props }) => (
    <ul className={className || styles.ul} {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, className, ...props }) => (
    <ol className={className || styles.ol} {...props}>
      {children}
    </ol>
  ),
  table: ({ children, className, ...props }) => (
    <table className={className || styles.table} {...props}>
      {children}
    </table>
  ),
  thead: ({ children, className, ...props }) => (
    <thead className={className || styles.thead} {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, className, ...props }) => (
    <tbody className={className || styles.tbody} {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, className, ...props }) => (
    <tr className={className || styles.tr} {...props}>
      {children}
    </tr>
  ),
  th: ({ children, className, ...props }) => (
    <th className={className || styles.th} {...props}>
      {children}
    </th>
  ),
  td: ({ children, className, ...props }) => (
    <td className={className || styles.td} {...props}>
      {children}
    </td>
  ),
  hr: ({ className, ...props }) => (
    <hr className={className || styles.hr} {...props} />
  ),
  a: ({ href, children, className, ...props }) => (
    <a href={href} className={className || styles.a} {...props}>
      {children}
    </a>
  ),
  img: ({ alt, src, className, ...props }) => (
    <a
      className={styles.imgA}
      href={src}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img alt={alt} src={src} className={className || styles.img} {...props} />
    </a>
  ),
};
/* eslint-enable react/prop-types */

class App extends React.Component {
  componentDidMount() {
    svg4everybody();
  }

  render() {
    return (
      <MDXProvider components={customComponents}>
        <Router basename={process.env.PUBLIC_URL}>
          <>
            <Helmet
              titleTemplate="%s - ECL v3"
              defaultTitle="Europa Component Library"
            >
              <meta
                name="Description"
                content="Europa Component Library (ECL) documentation website"
              />
            </Helmet>
            <MainRoutes />
          </>
        </Router>
      </MDXProvider>
    );
  }
}

export default hot(module)(App);
