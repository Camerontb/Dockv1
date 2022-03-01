import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const CardExampleGroups = () => (
  <Card.Group className= "homeBox">
    <Card >
      <Card.Content >
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>Lodge a new expanse</Card.Header>
        
        <Card.Description>
          Quickly add a new reciept 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Add Expanse
          </Button>
          
        </div>
      </Card.Content>
    </Card>
    
  </Card.Group>
)

export default CardExampleGroups