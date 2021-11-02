import React from 'react';
import ListTasksTable from '../../components/Tasks/ListTasksTable';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  listContainer: {
    marginTop: 50
  }
});

const ListTasks = () => {
  const classes = useStyles();

  return (
    <div className={classes.listContainer}>
      <ListTasksTable />
    </div>
  )
}

export default ListTasks
