import CodeBlock from '../code-block';
import { title, description } from './styles.module.scss';

function Header() {
    return (
        <>
            <h1 className={title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className={description}>
                Get started by editing <CodeBlock>pages/index.js</CodeBlock>
            </p>
        </>
    );
}

export default Header;
