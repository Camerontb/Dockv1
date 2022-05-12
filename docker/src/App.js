import React from 'react'
import {useForm} from 'react-hook-form';
import { Component } from 'react/cjs/react.production.min';
import { Button, CardDescription, Checkbox, Form } from 'semantic-ui-react'
import LodgeNew from './LodgeNew';
import ResultGroups from './ResultsGroups';
import TableExamplePagination from './Records'
import Records from './Records';
import ButtonExampleIcon from "./HomeBtn"

const App =()=>{

  return(
    <div>
      <ButtonExampleIcon/>

      <LodgeNew/>
      <ResultGroups/>
      
      {/* <TableExamplePagination/> */}


    </div>
    
  )
}

export default App