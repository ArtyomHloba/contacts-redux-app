import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './reset.css';
import './index.css';
import App from './App.jsx';
import store from './store/index.js';
import axios from 'axios';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

try {
  const response = await httpClient.get('/posts/100');
  console.log(response.data);
} catch (err) {
  console.log(err);
}

httpClient
  .get('/posts')
  .then(response => console.log(response.data))
  .catch(err => console.log(err));

httpClient
  .get('/users')
  .then(response => console.log(response.data))
  .catch(err => console.log(err));
