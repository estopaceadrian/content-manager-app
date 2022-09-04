import Link from 'next/link';
import React from 'react';
import ResourceLabel from './ResourceLabel';
import moment from 'moment';

const Hero = ({ resources }) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources.map((resource) => {
            return (
              <section className="section" key={resource.id}>
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <div className="content is-medium">
                      <h2 className="subtitle is-4">
                        {moment(resource.createdAt).format('LLL')}
                        <ResourceLabel status={resource.status} />
                      </h2>
                      <h1 className="title">{resource.title}</h1>
                      <p className="mb-2">{resource.description}</p>
                      <Link href={`/resources/${resource.id}`}>
                        <a className="button is-info">Details</a>
                      </Link>
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
