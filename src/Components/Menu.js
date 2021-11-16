// import { collection, onSnapshot } from '@firebase/firestore';
// import { useEffect, useState} from 'react';

// import { Card, Row} from 'react-bootstrap';

//   function  Menu() {
 
//  const [items, setFoodItems] = useState([]);

//     useEffect(
//       () => 
//       onSnapshot(collection(firebase, "Food-Item"), (snapshot) =>
//         setFoodItems(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id })))
//        ),
//       []
// );
//    console.log(items);

//     return (
//     <div>
//       <Row xs={2} md={3} className="g-4">
//       {items.map((item) => (
//         <div key={item.id}>

//           <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src= {(item["Image-Dest"])} />
//              <Card.Body>
//              <Card.Title>{item["Item-Name"]}</Card.Title>
             
//              <Card.Text>{item["Item-Description"]}</Card.Text>
//             </Card.Body>
//           <ListGroup className="list-group-flush">
          
//           <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//           <ListGroupItem>Vestibulum at eros</ListGroupItem>
//         </ListGroup>
//         <Card.Body>
//           <Card.Link href="#">Card Link</Card.Link>
//           <Card.Link href="#">Another Link</Card.Link>
//         </Card.Body>
//       </Card>
     
//         </div>
//       ))}
//              </Row>
//     </div>
   
     
//     );
//     }

// export default Menu;
