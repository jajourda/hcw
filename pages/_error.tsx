import Error from 'next/error';
// https://github.com/vercel/next.js/discussions/12246

//>super helpful after a strange error on vercel
// https://thomasstep.com/blog/next-js-prerendering-error


function Page({ statusCode }: { statusCode: any }) {
    return <Error statusCode={statusCode}></Error>;
}

Page.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Page;