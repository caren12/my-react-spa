import { useState } from 'react';

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    addProject({
      id: Date.now(),
      title,
      description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <div className='card'>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default ProjectForm;