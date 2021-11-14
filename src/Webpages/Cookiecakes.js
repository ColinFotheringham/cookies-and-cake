import { collection, onSnapshot } from '@firebase/firestore';
import { useEffect, useState} from 'react';
import firebase from '../db/firebase';

  function  Cookiecakes() {
 


    const [items, setFoodItems] = useState([]);

    useEffect(
      () => 
      onSnapshot(collection(firebase, "Food-Item"), (snapshot) =>
        setFoodItems(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id })))
       ),
      []
);
   console.log(items);

    return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          
          <h1> {item["Item-Description"]} </h1>
        </div>
      ))}
            
    </div>
     
    );
    }

export default Cookiecakes;
