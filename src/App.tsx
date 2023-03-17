import './App.css';
import { Homepage } from './Layouts/Homepage/Homepage';
import { Footer } from './Layouts/NavbarAndFooter/Footer';
import { Navbar } from './Layouts/NavbarAndFooter/Navbar';
import { SearchBooksPage } from './Layouts/SearchBooksPage/SearchBooksPage';

export const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Homepage/> */}
      <SearchBooksPage/>
      <Footer/>
    </div>
  );
}

