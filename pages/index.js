import Layout from '../components/layout/appLayouts';

export default function Home() {
  return (
    <div>
      <Layout title="Home">
        <div className='container'>
          <div className="flex items-center justify-center py-5">
            <h1 className="font-bold text-5xl text-black-600">Welcome.</h1>
          </div>
        </div>
      </Layout>
    </div>
  )
}
