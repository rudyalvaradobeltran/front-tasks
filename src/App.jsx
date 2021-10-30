import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateLayout from './components/Layout/PrivateLayout';
import HomePage from './pages/HomePage';
import ListTasks from './pages/tasks/ListTasks';
import AddTask from './pages/tasks/AddTask';
import RemoveTask from './pages/tasks/RemoveTask';
import EditTask from './pages/tasks/EditTask';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <React.Fragment>
      <PrivateLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/list-tasks" exact component={ListTasks} />
          <Route path="/add-task" exact component={AddTask} />
          <Route path="/remove-task" exact component={RemoveTask} />
          <Route path="/edit-task" exact component={EditTask} />
          <Route component={NotFound} />
        </Switch>
      </PrivateLayout>
    </React.Fragment>
  );
}

export default App;
