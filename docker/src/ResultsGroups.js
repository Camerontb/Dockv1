import React, { useState, useEffect } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import App from './App'
import Form from './UserForm'
import CardExampleGroups from './CardExampleGroups'
const ResultGroups = () => {
  const [isVisible, setVisible] = useState(true)

  const handleClick = () => {
    setVisible(false)
  }

  return (
    <>
      <Card.Group className="homeBox">
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>Review Your Expanses</Card.Header>

            <Card.Description>Quickly review your expanses </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green" onClick={handleClick}>
                Review 
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      
      

      
    </>
  )
}

export default ResultGroups
