import React from 'react'
import { useForm } from 'react-hook-form'
import { Component } from 'react/cjs/react.production.min'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
export default function UserForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    axios.post('http://localhost:4000/exp',{
      data
      

    })
    
    
  }
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Vendor</label>
          <input
            id="vendor"
            placeholder="Name of Shop"
            name="vendor"
            {...register('Vendor')}
          />
        </Form.Field>

        <Form.Field>
          <label>Total</label>
          <input
            id="total"
            placeholder="how much was it"
            type="number"
            name="total"
            {...register('Total')}
          />
        </Form.Field>

        <Form.Field>
          <label>Reciept</label>
          <input type="file" />
        </Form.Field>

        <Button type="submit" {...register('location')}>
          Submit
        </Button>
      </Form>
    </div>
    
  )
}
