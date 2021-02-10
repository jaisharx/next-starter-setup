import { card } from './styles.module.scss';
import { BsArrowRight } from 'react-icons/bs';

function Card({ title, url, children }) {
    return (
        <a href={url} className={card}>
            <h3>
                {title} <BsArrowRight />
            </h3>
            <p>{children}</p>
        </a>
    );
}

export default Card;
