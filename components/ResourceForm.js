import { useState } from 'react';

const DEFAULT_DATA = {
  title: '',
  description: '',
  link: '',
  priority: '2',
  timeToFinish: 60,
};
const ResourceForm = ({ onFormSubmit, initialData }) => {
  const [form, setForm] = useState(initialData || DEFAULT_DATA);

  const resetForm = () => setForm(DEFAULT_DATA);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    onFormSubmit(form);
  };
  return (
    <>
      <div className="resource-form">
        <h1 className="title">Add New Resource</h1>
        <form>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="input"
                type="text"
                placeholder="Learn Next JS and Sanity IO"
              />
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  value={form.description}
                  onChange={handleChange}
                  name="description"
                  className="textarea"
                  placeholder="Learn these technologies because they are very popular and enable better SEO!"
                />
              </div>
            </div>
            <label className="label">Link</label>
            <div className="control">
              <input
                value={form.link}
                onChange={handleChange}
                name="link"
                className="input"
                type="url"
                placeholder="https://google.com"
              />
            </div>
            <div className="field">
              <label className="label">Priority</label>
              <div className="control">
                <div
                  onChange={handleChange}
                  value={form.priority}
                  name="priority"
                  className="select"
                >
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
            </div>
            <label className="label">Time to finish</label>
            <div className="control">
              <input
                name="timeToFinish"
                onChange={handleChange}
                value={form.timeToFinish}
                className="input"
                type="number"
                placeholder="60 (time is in minutes)"
              />
            </div>
            <p className="help">Time is in minutes</p>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                type="button"
                onClick={submitForm}
                className="button is-link"
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button
                type="button"
                onClick={resetForm}
                className="button is-link is-light"
              >
                Reset Form
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResourceForm;
