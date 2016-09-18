import Inferno from 'inferno';
import Component from 'inferno-component';
import InfernoDOM from 'inferno-dom';
import Header from './components/Header';

import './styles/main.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

InfernoDOM.render( <App />, document.getElementById('app'));