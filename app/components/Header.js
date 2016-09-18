import Inferno from 'inferno';
import { Link } from 'inferno-router';

export default () => (
    <header style={styles.container}>
        <h1>Inferno Example App</h1>
        <nav>
        </nav>
    </header>
);

let styles = {
    container: {
        background: '#2D3849',
        color: '#FFF',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    link: {
        display: 'inline-block',
        margin: 10,
        textDecoration: 'none',
        color: '#FFF'
    }
};