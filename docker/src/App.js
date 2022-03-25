import React from 'react'
import {useForm} from 'react-hook-form';
import { Component } from 'react/cjs/react.production.min';
import { Button, CardDescription, Checkbox, Form } from 'semantic-ui-react'
import CardExampleGroups from './CardExampleGroups';
import ResultGroups from './ResultsGroups';
import TableExamplePagination from './Table'
const App =()=>{

  return(
    <div>
      <CardExampleGroups/>
      <ResultGroups/>
      <TableExamplePagination/>


    </div>
    
  )
}

export default App