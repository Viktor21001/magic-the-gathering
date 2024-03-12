require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const renderTemplate = (component, props, response) => {
  const element = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  response.write('<!DOCTYPE html>');
  response.end(html);
};

module.exports = renderTemplate;
