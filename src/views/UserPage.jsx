/* eslint-disable no-nested-ternary */
const React = require('react');
const Layout = require('./Layout');

module.exports = function UserPage({ login }) {
  return (
    <Layout login={login}>
      <div className="userContainer">
        <h2>Привет, {login}</h2>
      </div>
    </Layout>
  );
};
