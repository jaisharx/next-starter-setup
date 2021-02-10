import { code } from './styles.module.scss';

function CodeBlock({ children }) {
    return <code className={code}>{children}</code>;
}

export default CodeBlock;
