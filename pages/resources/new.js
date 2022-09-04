import axios from 'axios';
import Layout from 'components/Layout';
import { useRouter } from 'next/router';

import ResourceForm from 'components/ResourceForm';

const ResourceCreate = () => {
  const router = useRouter();

  const createResource = (formData) => {
    axios
      .post('/api/resources', formData)
      .then((_) => router.push('/'))
      .catch((error) => alert(error?.response?.data));
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm onFormSubmit={createResource} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
