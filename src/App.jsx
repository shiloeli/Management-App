import {useState} from 'react'

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState,setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[],
    tasks:[]
  });

  function handleAddTask(text){
    setProjectState(prevState => {
      const taskId = Math.random()*10;
      const newTask = {
      text: text,
      projectId: prevState.selectedProjectId,
      id: taskId
      };
    return {
      ...prevState,
      tasks:[newTask, ...prevState.tasks]
    };
  });
  }
  
  function handleDeleteTask(id){
    setProjectState(prevState => {    
      return {
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id)
      };
});
  }

  function handleStartAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId:null
      };
    });
  }

  function handleCancleAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId:undefined
      };
    });
  }

  function handleSelectedProject(id){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId:id
      };
    });
  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const randomId = Math.random()*10;
      const newProject = {
      ...projectData,
      id: randomId
      };
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject]
    };
  });
}

function handleDeleteProject(projectData){
  setProjectState(prevState => {    
      return {
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId )
      };
});
}

console.log(projectsState.projects);

  let selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId) 

  let content = <SelectedProject project={selectedProject}
                                 onDelete={handleDeleteProject}
                                 onAddTask={handleAddTask}
                                 onDeleteTask={handleDeleteTask}
                                 tasks={projectsState.tasks}/>;

  if(projectsState.selectedProjectId === null){
    content = (<NewProject onAdd={handleAddProject}
                           onCancle={handleCancleAddProject}/>);
  }else if(projectsState.selectedProjectId === undefined){
    content = (<NoProjectSelected onStartAddProject={handleStartAddProject}/>);
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
      onStartAddProject={handleStartAddProject}
      projects={projectsState.projects}
      onSelectProject={handleSelectedProject}
      selectedProjectId={projectsState.selectedProjectId}
       />
      {content}
    </main>
  );
}

export default App;
