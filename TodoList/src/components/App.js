import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styled from 'styled-components'

const Div=styled.div `
// display:table;
text-align:center`
const App = () => (
  <Div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Div>
)

export default App