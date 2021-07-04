import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './common/header'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <Header />
          <BrowserRouter>
            <div style={{marginTop: "56px",}}>
              <Route path="/" exact render={() => <div>Home</div>}></Route>
              <Route path="/detail" exact render={() => <div>Detail</div>}></Route>
            </div>
          </BrowserRouter>
        </>
      </Provider>
    )
  }
}

export default App;
