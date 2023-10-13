import HeadPage from '@/components/HeadPage';
import Home from '@/components/Home';
import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <>
      <HeadPage title="Home" />
      <Layout>
        <Home></Home>
      </Layout>
    </>
  );
}
