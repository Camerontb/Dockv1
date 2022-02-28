import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import useForm from './useForm'

const inputArray=[
  {
    Vendor:'',
    Amount:''
  }
]

const Create = () => {
  const {handleChange,values}=useForm();
  function click(){
    console.log({handleChange})
   }
  return(
  
    <Form >
      <Form.Field>
        <label>Vendor</label>
        <input
          id='vendor' 
          placeholder='Name of Shop' 
          name='vendor' 
          value={values.vendor} 
          onChange={handleChange} 
        />
      </Form.Field>
      <Form.Field>
        <label>Total</label>
        <input  id="total"placeholder='how much was it' type="number" name='total' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Taxable Expanse' name='type'/>
        {/* <Checkbox label='Personal Expanse' /> */}

      </Form.Field>
      <Button type='submit' onClick={click}>Submit</Button>
    </Form>
  )

}
export default Create