import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookshelfApp from '../components/BookshelfApp';
import BookPage from '../components/BookPage';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    
    <BrowserRouter>
        <div>
            <Header />
                    <Switch> 
                        <Route path="/" component={BookshelfApp} exact={true} />
                        <Route path="/book/:id" component={BookPage} />
                        <Route path="/about" exact={true} component={About} />
                        <Route path="/contact" exact={true} component={Contact} />
                        <Route component={NotFoundPage} />
                    </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;