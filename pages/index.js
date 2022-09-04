import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Newsletter from 'components/Newsletter';
import Article from 'components/Article';
import Layout from 'components/Layout';
import { useEffect } from 'react';

function Home({ resources }) {
  return (
    <>
      <Layout>
        <Hero resources={resources.slice(0, 2)} />
        <Newsletter />
        <Article resources={resources.slice(2)} />
        <Footer />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}

export default Home;
