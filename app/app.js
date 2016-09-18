import Inferno from 'inferno';
import Component from 'inferno-component';
import InfernoDOM from 'inferno-dom';
import Header from './components/Header';
import { Router, Route, Link, browserHistory } from 'inferno-router';
import About from './containers/About';
import Home from './containers/Home';

import './styles/main.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Router history={ browserHistory }>
                    <Route path="/" component={ Home } />
                    <Route path="/about" component={ About } />
                </Router>
            </div>
        );
    }
}

InfernoDOM.render( <App />, document.getElementById('app'));