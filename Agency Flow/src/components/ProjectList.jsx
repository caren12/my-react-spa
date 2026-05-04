import ProjectItem from './ProjectItem';

function ProjectList({ projects, deleteProject }) {
  return (
    <div className='card'>
      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            deleteProject={deleteProject}
          />
        ))
      )}
    </div>
  );
}

export default ProjectList;