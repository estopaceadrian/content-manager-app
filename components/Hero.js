import React from 'react';

const Hero = ({ resources }) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources.map((data) => {
            return (
              <section className="section" key={data.id}>
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <div className="content is-medium">
                      <h2 className="subtitle is-4">{data.createdAt}</h2>
                      <h1 className="title">{data.title}</h1>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          <div className="is-divider"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
