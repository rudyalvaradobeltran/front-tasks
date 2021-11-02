import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import * as taskActions from '../../redux/actions/tasks.action';
import ConfirmAlertDialog from './ConfirmAlertDialog';

const useStyles = makeStyles({
  datagrid: {
    minHeight: 360
  },
  listContainer: {
    height: 400,
    width: '100%'
  }
});

const ListTasksTable = ({history, list, removeById, listState: {loading, data, error}}) => {
  const [page, setPage] = useState(1);
  const [openConfirmAlert, setOpenConfirmAlert] = React.useState(false);
  const [removeId, setRemoveId] = useState(null);

  const columns = [
    {
      field: "description",
      headerName: "Description",
      flex: 1
    },
    { field: "createdAt", headerName: "Created At", flex: 1 },
    { field: "active", headerName: "Active", flex: 1 },
    {
      field: "Actions",
      renderCell: (cellValues) => {
        return (
          <React.Fragment>
            <IconButton
              color="primary"
              aria-label="edit task"
              component="span"
              onClick={(event) => {
                handleEditClick(event, cellValues);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="delete task"
              component="span"
              onClick={(event) => {
                handleDeleteClick(event, cellValues);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </React.Fragment>
        );
      },
      flex: 1
    }
  ];

  useEffect(
    () => {
      const loadTasksCB = async () => {
        await list(page);
      };

      loadTasksCB();
    },
    [list, page]
  );

  const handleEditClick = (event, cellValues) => {
    history.push(`/edit-task/${cellValues.id}`) 
  };

  const handleDeleteClick = (event, cellValues) => {
    setOpenConfirmAlert(true);
    setRemoveId(cellValues.id);
  };
  
  const handleCloseConfirmAlert = () => {
    setOpenConfirmAlert(false);
  };

  const handleConfirmDelete = async () => {
    await removeById(removeId);
    setOpenConfirmAlert(false);
    window.location.reload(true);
  };

  const classes = useStyles();

  return (
    <div classes={classes.listContainer}>
      <Paper>
        <Box px={3} py={2}>
          <Typography id='title' mb={2} variant='h6' align='center' margin='dense'>
            List tasks
          </Typography>
          <DataGrid
            autoheight
            id="taskTable"
            classes={{ root: classes.datagrid}}
            rows={data ? data.list : []}
            columns={columns}
            pagination
            pageSize={5}
            rowsPerPageOptions={[5]}
            rowCount={data ? data.count : 0}
            paginationMode="server"
            onPageChange={(newPage) => setPage(newPage+1)}
            loading={loading}
          />
          <ConfirmAlertDialog
            open={openConfirmAlert}
            handleClose={handleCloseConfirmAlert}
            handleConfirm={handleConfirmDelete}
          />
        </Box>
      </Paper>
    </div>
  );
}

ListTasksTable.propTypes = {
  history: PropTypes.object.isRequired,
  list: PropTypes.func.isRequired,
  removeById: PropTypes.func.isRequired,
  listState: PropTypes.object.isRequired
};

const { list, removeById } = taskActions;

const mapStateToProps = ({ listState }) => {
  return { listState };
};

const mapDispatchToProps = {
  list, removeById
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ListTasksTable));