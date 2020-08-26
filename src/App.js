import React, {useState} from 'react';
import Nav from './components/navbar';
import Wrapper from './components/wrapper';
import Footer from './components/footer';
import './App.css';

let clickedImageIds = [];

function App() {
  const [imgCards, setImgCards] = useState([
    {id:1,img:'michael.png'},
    {id:2,img:'jim.png'},
    {id:3, img:'pam.png'},
    {id:4, img:'angela.png'},
    {id:5, img:'dwight.png'},
    {id:6, img:'jan.png'},
    {id:7, img:'kevin.png'},
    {id:8, img:'meredith.png'},
    {id:9, img:'nard.png'},
    {id:10, img:'ryan.png'},
    {id:11, img:'stanley.png'},
    {id:12, img:'creed.png'}
  ]);
  const [message, setMessage] = useState('Click an image to begin!');
  const [score, setScore] = useState(0);

  const onSelect = function(cardId){
    if (clickedImageIds.includes(cardId)) {
      setMessage('Try Again!');
      setScore(0);
      clickedImageIds = [];
      return;
    }

    setMessage('YAY, keep going! correct!');
    setScore(score + 1);

    clickedImageIds.push(cardId);

    const newCards = imgCards.slice();
    newCards.forEach(function(el,i){
      const randomI = Math.floor(Math.random()*newCards.length);
      const tempr = newCards[i];
      newCards[i]=newCards[randomI];
      newCards[randomI]=tempr;
    });
    setImgCards(newCards);
  }
  return (
    <div className="App">
      <Nav message={message} score={score} />
      <Wrapper imgCards={imgCards} onSelect={onSelect}/>
      <Footer/>
    </div>
  );
}

export default App;