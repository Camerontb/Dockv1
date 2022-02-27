import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const CardExampleGroups = () => (
  <Card.Group >
    <Card className="inputtab">
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>Create New Expanse</Card.Header>
        
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
           New 
          </Button>
          
        </div>
      </Card.Content>
    </Card>
    
  </Card.Group>
)

export default CardExampleGroups