import { card, header, text, active } from './styles.module.scss';

function Card({ title, url, children }) {
    return (
        <a href={url} className={card}>
            <h3>{title}</h3>
            <p>{children}</p>
        </a>
    );
}

export default Card;
