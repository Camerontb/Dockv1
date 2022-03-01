import React from 'react'
import {useForm} from 'react-hook-form'
import { Component } from 'react/cjs/react.production.min';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const App =()=>{
  const{register,handleSubmit} = useForm();

  const onSubmit =(data) =>{
    console.log(data)
  }

  return(
  
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label>Vendor</label>
        <input
          id='vendor' 
          placeholder='Name of Shop' 
          name='vendor' 
          {...register('Vendor')}  
        />
      </Form.Field>

      <Form.Field>
        <label>Total</label>
        <input  id="total"
          placeholder='how much was it' 
          type="number" 
          name='total' 
          {...register('Total')}  

        />
      </Form.Field>
      <Form.Field>
        {/* <Checkbox label='Taxable Expanse'name='type'/> */}
        {/* <Checkbox label='Personal Expanse' /> */}

      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )

}

export default App