import React from 'react';
import AddEditTaskForm from '../../components/Tasks/AddEditTaskForm';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  listContainer: {
    marginTop: 100
  }
});

const AddEditTask = () => {
  const classes = useStyles();

  return (
    <div className={classes.listContainer}>
      <AddEditTaskForm />
    </div>
  );
};

export default AddEditTask;
