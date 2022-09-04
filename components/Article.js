import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import ResourceLabel from './ResourceLabel';

const Article = ({ resources }) => {
  const renderData = () =>
    resources.map((data) => (
      <div className="column is-5 is-offset-1 " key={data.id}>
        <div className="content is-medium">
          <h2 className="subtitle is-5 has-text-grey">
            {moment(data.createdAt).format('LLL')}
            <ResourceLabel status={data.status} />
          </h2>
          <h1 className="title has-text-black is-3">{data.title}</h1>
          <p className="has-text-dark mb-2">{data.description}</p>
          <Link href={`/resources/${data.id}`}>
            <a className="button is-info">Details</a>
          </Link>
        </div>
      </div>
    ));

  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns is-multiline is-variable is-8">
              {renderData()}
            </div>
          </section>

          <div className="is-divider"></div>
        </div>
      </div>
    </section>
  );
};

export default Article;
