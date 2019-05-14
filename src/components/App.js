import React from 'react'
import { connect } from 'react-redux'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import MyProvider from '../providers/MyProvider'

class App extends React.Component {
  render() {
    return(
      <MyProvider>
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </MyProvider>
    )
  }
}

//export default App
// the below connect call raises the exception we where experienceing previously.
export default connect()(App)
