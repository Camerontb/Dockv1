import React, { useState, useEffect } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import App from './App'
// import Form from './UserForm'
// import CardExampleGroups from './LodgeNew'
import Records from './Records'
const ResultGroups = () => {
  const [isVisible, setVisible] = useState(false)

  const handleClick1 = () => {
    console.log("you clicked")
    setVisible(true)
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
              <Button basic color="green" onClick={handleClick1}>
                Review 
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      {isVisible && <Records/>}

      
      

      
    </>
  )
}

export default ResultGroups
