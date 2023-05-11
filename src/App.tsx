import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';
import { Navbar } from './Layouts/NavbarAndFooter/Navbar';
import { SearchBooksPage } from './Layouts/SearchBooksPage/SearchBooksPage';
import { ReviewListPage } from './Layouts/BookCheckoutPage/ReviewListPage/ReviewListPage';
import { BookCheckoutPage } from './Layouts/BookCheckoutPage/BookCheckoutPage';
import { Footer } from './Layouts/NavbarAndFooter/Footer';
import { ShelfPage } from './Layouts/ShelfPage/ShelfPage';
import { Homepage } from './Layouts/Homepage/Homepage';
import { MessagesPage } from './Layouts/MessagesPage/MessagesPage';
import { ManageLibraryPage } from './Layouts/ManageLibraryPage/ManageLibraryPage';
import { PaymentPage } from './Layouts/PaymentPage/PaymentPage';


const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {

  const customAuthHandler = () => {
    history.push('/login');
  }

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };


  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <Homepage />
          </Route>
          <Route path='/search'>
            <SearchBooksPage />
          </Route>
          <Route path='/reviewlist/:bookId'>
            <ReviewListPage/>
          </Route>
          <Route path='/checkout/:bookId'>
            <BookCheckoutPage/>
          </Route>
          <Route path='/login' render={
            () => <LoginWidget config={oktaConfig} /> 
            } 
          />
          <Route path='/login/callback' component={LoginCallback} />
          <SecureRoute path='/shelf'> <ShelfPage/> </SecureRoute>
          <SecureRoute path='/messages'> <MessagesPage/> </SecureRoute>
          <SecureRoute path='/admin'> <ManageLibraryPage/> </SecureRoute>
          <SecureRoute path='/fees'> <PaymentPage/> </SecureRoute>
        </Switch>
      </div>
      <Footer />
      </Security>
    </div>
  );
}