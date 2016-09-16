import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
    <Route path="Popular" component={App} />
    <Route path="TopStories" component={App} />
    <Route path="Technology" component={App} />
    <Route path="Business" component={App} />
    <Route path="Politics" component={App} />
    <Route path="World" component={App} />
    <Route path="Sports" component={App} />
    <Route path="Fashion" component={App} />
    <Route path="Travel" component={App} />
  </Route>
);
