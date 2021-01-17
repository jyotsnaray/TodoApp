import React, { Component } from 'react';
import Todo from "./Todo"
import {

    BrowserRouter as Router,
    Route,
    Switch

} from 'react-router-dom';


class App extends Component {

    render() {



        return (

            <Router>
                <div >

                    <Switch>
                        <Route path="/" component={Todo} />
                        
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;