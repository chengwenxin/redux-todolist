import React from 'react'
import FilterLink from '../containers/FilterLink'
import styled from 'styled-components'


const Span=styled.span`
font-size:28px;
color:purple;
`
const Footer = () => (
  <p>
     <Span>Show:</Span>
    {' '}
    <FilterLink filter="SHOW_ALL" >
    <Span>All</Span>
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE" >
      <Span>Active</Span>
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED" >
    <Span>Completed</Span>
    </FilterLink>
  </p>
)

export default Footer