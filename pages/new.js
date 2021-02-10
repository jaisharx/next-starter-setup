import Head from 'next/head';
import Card from '../components/card';
import Footer from '../components/footer';

import {
    title,
    description,
    code,
    main,
    grid,
} from '../styles/newpage.module.scss';

function New() {
    return (
        <>
            <Head>
                <title>New - Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={main}>
                <h1 className={title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={description}>
                    Get started by editing{' '}
                    <code className={code}>pages/index.js</code>
                </p>

                {/* cards */}
                <div className={grid}>
                    <Card title="Documentation &rarr;" text="Find in-depth information about Next.js features and API." />
                    <Card title="Learn &rarr;" text="Learn about Next.js in an interactive course with quizzes!" />
                    <Card title="Examples &rarr;" text="Discover and deploy boilerplate example Next.js projects." />
                    <Card title="Deploy &rarr;" text="Instantly deploy your Next.js site to a public URL with Vercel." />
                </div>
            </main>

            <Footer />

        </>
    );
}

export default New;
