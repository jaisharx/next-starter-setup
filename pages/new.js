import NextHead from '../components/next-head';
import Card from '../components/card';
import Footer from '../components/footer';
import CodeBlock from '../components/code-block';

import { title, main, grid, description } from '../styles/new.module.scss';

function New() {
    return (
        <>
            <NextHead title="Create Next App" />

            <main className={main}>
                <h1 className={title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={description}>
                    Get started by editing <CodeBlock>pages/index.js</CodeBlock>
                </p>

                {/* cards */}
                <div className={grid}>
                    <Card
                        isActive="true"
                        title="Documentation &rarr;"
                        content="Find in-depth information about Next.js features and API."
                    />
                    <Card
                        title="Learn &rarr;"
                        content="Learn about Next.js in an interactive course with quizzes!"
                    />
                    <Card
                        title="Examples &rarr;"
                        content="Discover and deploy boilerplate example Next.js projects."
                    />
                    <Card
                        title="Deploy &rarr;"
                        content="Instantly deploy your Next.js site to a public URL with Vercel."
                    />
                </div>
            </main>

            <Footer />
        </>
    );
}

export default New;
