import Head from 'next/head';

function NextHead({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />

            <meta name="title" content={title} />
            <meta
                name="description"
                content="With the next starter setup, you can start building next based projects as quick as in a second. Just git clone the repo, and get building your next multi-million app."
            />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://metatags.io/" />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content="With the next starter setup, you can start building next based projects as quick as in a second. Just git clone the repo, and get building your next multi-million app."
            />
            <meta property="og:image" content="/public/assets/big.png" />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content={title} />
            <meta
                property="twitter:description"
                content="With the next starter setup, you can start building next based projects as quick as in a second. Just git clone the repo, and get building your next multi-million app."
            />
            <meta property="twitter:image" content="/public/assets/big.png" />
        </Head>
    );
}

export default NextHead;
