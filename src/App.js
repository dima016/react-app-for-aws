import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("http://172.31.23.18/messages")
        .then(res => res.json())
        .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
        )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
        <ul>
          {items.map(item => (
              <li key={item.id}>
                {item.id}: {item.message}
              </li>
          ))}
            Hello from React App
        </ul>
    );
  }
}
export default App;
