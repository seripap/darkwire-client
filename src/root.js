import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-simple-dropdown/styles/Dropdown.css'
import 'stylesheets/app.sass'
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from 'store';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import shortId from 'shortid'
import Home from 'containers/Home'

const store = configureStore();

export default class Root extends Component {
  componentWillMount() {
    if ('ontouchstart' in document.documentElement) {
      document.body.classList.add('touch')
    }
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="h-100">
            <Switch>
              <Route exact path="/" render={() => <Redirect to={`/${shortId.generate()}`} />} />
              <Route path="/:roomId" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
