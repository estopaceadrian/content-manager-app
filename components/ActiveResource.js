import axios from 'axios';
import moment from 'moment/moment';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ActiveResource = () => {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    async function fetchResource() {
      const res = await axios.get('/api/activeresource');
      const resource = res.data;
      const timeToFinish = parseInt(resource.timeToFinish, 10);
      const elapsedTime = moment().diff(
        moment(resource.activationTime),
        'seconds'
      );
      const updatedTimeToFinish = timeToFinish * 60 - elapsedTime;

      if (updatedTimeToFinish >= 0) {
        resource.timeToFinish = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }

      setResource(resource);
    }
    fetchResource();
  }, []);

  useEffect(() => {
    setInterval;
  }, [seconds]);

  return (
    <div className="active-resource">
      <h1 className="resource-name">{resource.title}</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time"> {resource.timeToFinish}</h2>
      </div>
      <Link href={'/'}>
        <a className="button"> Go to resource</a>
      </Link>
    </div>
  );
};

export default ActiveResource;
