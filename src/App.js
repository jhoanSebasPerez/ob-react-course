import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import TaskList from "./components/containers/TaskList";

function App() {
  return (
    <div className="App">
      <h1>Task App</h1>
      <TaskList />
    </div>
  );
}

export default App;
