import React                                  from 'react';
import ReactDOM                               from 'react-dom';
import App                                    from './components/App';
import registerServiceWorker                  from './registerServiceWorker';
import {
  createStore,
  combineReducers,
  applyMiddleware
}                                             from 'redux';
import { Provider }                           from 'react-redux';
import { composeWithDevTools }                from 'redux-devtools-extension';
import thunk                                  from 'redux-thunk';
import                                             './index.css';
import {
  selectedCountryId,
  cities,
  countries
}                                             from './reducers/reducers';

const rootreducer = combineReducers({
  selectedCountryId,
  cities,
  countries
})

const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
