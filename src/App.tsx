import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { BookCheckoutPage } from './Layouts/BookCheckoutPage/BookCheckoutPage';
import { Homepage } from './Layouts/Homepage/Homepage';
import { Footer } from './Layouts/NavbarAndFooter/Footer';
import { Navbar } from './Layouts/NavbarAndFooter/Navbar';
import { SearchBooksPage } from './Layouts/SearchBooksPage/SearchBooksPage';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar/>
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <Homepage/>
          </Route>
          <Route path='/search'>
            <SearchBooksPage/>
          </Route>
          <Route path='/checkout/:bookId'>
            <BookCheckoutPage/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

