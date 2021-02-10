import { card } from './styles.module.scss';

function Card({ title, text }) {
    return (
        <a href="https://nextjs.org/docs" className={card}>
            <h3>{title}</h3>
            <p>{text}</p>
        </a>
    );
}

export default Card;
