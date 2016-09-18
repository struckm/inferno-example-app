import Inferno from 'inferno';

export default ({ items, renderItem }) => {
    <ul>
        {items.map(item => (
            <li>{renderItem(item)}</li>
        ))}
    </ul>
};