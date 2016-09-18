import Inferno from 'inferno';

export default () => (
    <header style={styles.container}>
        <h1>Inferno Example App</h1>
        <h2>Inferno Example App</h2>
        <h3>Inferno Example App</h3>
        <h4>Inferno Example App</h4>
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