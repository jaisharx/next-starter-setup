import { code, highlight } from './styles.module.scss';
import cx from 'classnames';

function CodeBlock({ children }) {
    return <code className={cx(code, highlight)}>{children}</code>;
}

export default CodeBlock;
