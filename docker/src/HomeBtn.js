import React, {useState} from 'react'
import ResultGroups from './ResultsGroups'
import { Button, Icon } from 'semantic-ui-react'
import App from './App'

const HomeBtn = () => {
  // const [isVisible, setVisible] = useState(false)

   const handleClick1 = () => {
    console.log("you clicked")
    window.location.reload()
    
  }
  


  return(
    
    <>
      <Button className="Home" icon  onClick= {handleClick1}>
            <Icon name='home' />
        </Button>
    </>
      

        
      
      




  )
      
    
  





}
  




export default HomeBtn


