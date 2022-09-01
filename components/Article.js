import React from 'react';

const Article = ({ resources }) => {
  const renderData = () =>
    resources.map((data) => (
      <div className="column is-5 is-offset-1 " key={data.id}>
        <div className="content is-medium">
          <h2 className="subtitle is-5 has-text-grey">{data.createdAt}</h2>
          <h1 className="title has-text-black is-3">{data.title}</h1>
          <p className="has-text-dark">{data.description}</p>
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
