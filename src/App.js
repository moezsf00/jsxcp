import React from 'react'
import Description from './Description'
import Image from './Image' 
import Price from './Price'
import Name from './Name'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function App() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
     <Image></Image>
      <Card.Body>
        <Card.Title><Name></Name> </Card.Title>
        <Card.Text>
        <Description></Description>
        </Card.Text>
        <Card.Title><Price></Price> </Card.Title>

      </Card.Body>
    </Card>
    <h1>Hello moez</h1>
   
    </>

  )
}

