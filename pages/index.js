import NextHead from '../components/next-head';
import Card from '../components/card';
import Footer from '../components/footer';
import Header from '../components/header';

import { main, grid } from '../styles/index.module.scss';

function New() {
    return (
        <>
            <NextHead title="Create Next App" />

            <main className={main}>
                <Header />

                {/* cards */}
                <div className={grid}>
                    <Card title="Documentation">
                        Find in-depth information about Next.js features and API.
                    </Card>
                    <Card title="Learn">
                        Learn about Next.js in an interactive course with quizzes!
                    </Card>
                    <Card title="Examples">
                        Discover and deploy boilerplate example Next.js projects.
                    </Card>
                    <Card title="Deploy">
                        Instantly deploy your Next.js site to a public URL with Vercel.
                    </Card>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default New;
