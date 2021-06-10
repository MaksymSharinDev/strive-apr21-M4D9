import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Switch, Route, Link} from "react-router-dom";


import BookList from './components/BookList'
import SignUpSection from './components/SignUpSection'
import fantasyBooks from './fantasyBooks.json'
import Navbar from "./components/Navbar";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Navbar/>
                    <Switch>
                        <Route path="/home">
                            <BookList books={fantasyBooks}/>
                        </Route>
                        <Route path="/register">
                            <SignUpSection/>
                        </Route>
                    </Switch>
                </header>

            </div>
        </BrowserRouter>
    )
}

export default App
