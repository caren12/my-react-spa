import { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import './index.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <Header />
      <ProjectForm addProject={addProject} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProjectList
        projects={filteredProjects}
        deleteProject={deleteProject}
      />
    </div>
  );
}

export default App;