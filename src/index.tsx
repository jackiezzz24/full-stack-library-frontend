import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter} from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51N5t2LEZ0J5X4c5E5aC1Rxrz0usruIUMx82ZNzKDrXIiNI3SIqdG5ebMeDkSGGHh1Wm8hGWXWWx7Lx4jKpqxFZbD00JNsNIv2j');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>
);
