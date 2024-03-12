const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ login, items }) {
  return (
    <Layout login={login}>
      <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Magic: The Gathering</h3>
      {/* <script defer src="/js/addFetch.js" /> */}
    </Layout>
  );
};
