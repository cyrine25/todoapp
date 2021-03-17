import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import TaskList from "./component/TaskList";
import AddTask from "./component/AddTask";

function App() {
  return <div className="App">
    <AddTask />
    <TaskList />
  </div>;
}

export default App;
