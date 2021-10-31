import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateLayout from './components/Layout/PrivateLayout';
import HomePage from './pages/HomePage';
import ListTasks from './pages/tasks/ListTasksPage';
import AddEditTask from './pages/tasks/AddEditTaskPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <React.Fragment>
      <PrivateLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/list-tasks" exact component={ListTasks} />
          <Route path="/add-task" exact component={AddEditTask} />
          <Route path="/edit-task/:id" exact component={AddEditTask} />
          <Route component={NotFoundPage} />
        </Switch>
      </PrivateLayout>
    </React.Fragment>
  );
}

export default App;
