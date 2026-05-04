function ProjectItem({ project, deleteProject }) {
  return (
    <div className='project-item'>
      <button
        className='delete-btn'
        onClick={() => deleteProject(project.id)}
      >
        ✕
      </button>

      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectItem;