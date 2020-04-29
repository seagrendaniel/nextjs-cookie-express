import Layout from '../components/Layout';
import Link from 'next/link';

export default function Index(){
  return(
    <Layout title="home">
      <Link hred="/profile">
      <a>Go to profile</a>
      </Link>
    </Layout>
  )
}
