const { default: Layout } = require('components/Layout');
import Link from 'next/link';
import axios from 'axios';

const ResourceDetail = ({ resource }) => {
  const activateResource = () => {
    axios
      .patch('/api/resources', { ...resource, status: 'active' })
      .then((_) => alert('Resource has been activated!'))
      .catch((_) => alert('Cannot active the resource!'));
  };
  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resource.createdAt}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish: {resource.timeToFinish} min</p>

                    <Link href={`/resources/${resource.id}/edit`}>
                      <a className="button is-warning">Update</a>
                    </Link>

                    <button
                      className="button is-success ml-1"
                      onClick={activateResource}
                    >
                      Activate
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <div className="is-divider"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  );
  const data = await dataRes.json();

  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceDetail;

// ResourceDetail.getInitialProps = async ({ query }) => {
//   const dataRes = await fetch(
//     `http://localhost:3001/api/resources/${query.id}`
//   );
//   const data = await dataRes.json();

//   return {
//     resource: data,
//   };
// };

// export async function getStaticPaths() {
//   const resData = await fetch('http://localhost:3001/api/resources');
//   const data = await resData.json();
//   const paths = data.map((resource) => {
//     return {
//       params: { id: resource.id },
//     };
//   });
//   return {
//     paths,
//    means other routes should resolve to 404 page
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const dataRes = await fetch(
//     `http://localhost:3001/api/resources/${params.id}`
//   );
//   const data = await dataRes.json();

//   return {
//     props: {
//       resource: data,
//     },
//     revalidate: 1;
//   };
// }
