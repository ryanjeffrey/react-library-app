import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import Home from './components/home/Home';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books/:id" component={BookDetail} />
        <Route path="/books" component={BookList} />
      </Switch>
    </main>
  );
}

export default App;
