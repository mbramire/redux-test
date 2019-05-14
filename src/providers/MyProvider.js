import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../reducers'

const store = createStore(todoApp)

class MyProvider extends React.Component {
  render() {
    return(
      <Provider store={store}>
        { this.props.children }
      </Provider>
    )
  }
}

export default MyProvider
