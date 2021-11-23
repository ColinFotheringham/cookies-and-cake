import { collection, onSnapshot } from '@firebase/firestore';
import {fs} from "../Components/db/Config";
import { useEffect, useState} from 'react';

import { Card, Row, ListGroup, ListGroupItem} from 'react-bootstrap';

  function  Menu() {
 
 const [items, setFoodItems] = useState([]);

    useEffect(
      () => 
      onSnapshot(collection(fs, "Food-Item"), (snapshot) =>
        setFoodItems(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id })))
       ),
      []
);
   console.log(items);

    return (
    <div>
      <Row xs={2} md={3} className="g-4">
      {items.map((item) => (
        <div key={item.id}>

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {(item["Image-Dest"])} />
             <Card.Body>
             <Card.Title>{item["Item-Name"]}</Card.Title>
            <hr/>
             <Card.Text>{item["Item-Description"]}</Card.Text>
            </Card.Body>
          <ListGroup className="list-group-flush">
          
          <ListGroupItem> <Card.Link href="#">Card Link</Card.Link></ListGroupItem>
          <ListGroupItem> <Card.Link href="#">Another Link</Card.Link></ListGroupItem>
        </ListGroup>
      </Card>
     
        </div>
      ))}
             </Row>
    </div>
   
     
    );
    }

export default Menu;
