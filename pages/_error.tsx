import Error from 'next/error';
// https://github.com/vercel/next.js/discussions/12246


function Page({ statusCode }: { statusCode: any }) {
    return <Error statusCode={statusCode}></Error>;
}

Page.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Page;