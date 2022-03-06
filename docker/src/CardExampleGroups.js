import React, { useState, useEffect } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import App from './App'
import Form from './UserForm'
const CardExampleGroups = () => {
  const [isVisible, setVisible] = useState(false)

  const handleClick = () => {
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
            <Card.Header>Lodge a new expanse</Card.Header>

            <Card.Description>Quickly add a new reciept</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green" onClick={handleClick}>
                Add Expanse
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      {isVisible && <Form />}
    </>
  )
}

export default CardExampleGroups
