import Inferno from 'inferno';
import Component from 'inferno-component';
import List from '../components/List';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            value: ''
        }
    }

    renderItem = (item) => {
        return '';
    }

    onInput = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <input placeholder="Search..." style={styles.input} value={this.state.value} onInput={this.onInput} />
                <List items={this.state.items} renderItem={this.renderItem}/>
            </div>
        );
    }
}

const styles = {
    input: {
        width: '100%',
        height: 20,
        padding: 10,
        fontSize: '1.2em'
    }
}

export default Home;