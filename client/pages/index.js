import Head from 'next/head'

// import { client } from '../lib/client';


export default function Home() {
  return (
    <>
      <Head>
        <title>Gericht Restaurant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

// export const getServerSideProps = async () => {
//   const query = "*[_type == 'post']";
//   const posts = await client.fetch(query);
// }
