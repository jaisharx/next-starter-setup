import { card, header, text, active } from './styles.module.scss';
import cx from 'classnames';

function Card({ title, content, isActive }) {
    return (
        <a
            href="https://nextjs.org/docs"
            className={cx(card, { [active]: isActive })}
        >
            <h3 className={header}>{title}</h3>
            <p className={text}>{content}</p>
        </a>
    );
}

export default Card;
