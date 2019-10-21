import React from 'react';
import {BrowserRouter as Router ,Link,Route} from 'react-router-dom'
import List from './List';
import Add from "./Add";

const Index = ()=>{
    return (
        <div>
            <Router>
                    <div>
                        <Link to='category'>Listing</Link>
                        <Link to='category/Add'>Add</Link>
                        <Route exact path="/category" component={List} />
                        <Route exact path="/category/Add" component={Add} />
                    </div>
            </Router>
        </div>
    );
}

export default Index;