import { card, header, text } from './styles.module.scss';
// import cx from 'classnames';

function Card({ title, content }) {
    return (
        <a href="https://nextjs.org/docs" className={card}>
            <h3 className={header}>{title}</h3>
            <p className={text}>{content}</p>
        </a>
    );
}

export default Card;
