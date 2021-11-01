import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
import Button from '@mui/material/Button';
import * as taskActions from '../../redux/actions/tasks.action';

// const loadServerRows = (page, data) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data.rows.slice(page * 5, (page + 1) * 5));
//     }, Math.random() * 500 + 100); // simulate network latency
//   });
// }

const ListTasksTable = ({list, listState: {loading, tasks, error}}) => {
  var data = [];

  const columns = [
    {
      field: "desk",
      headerName: "Desk",
      flex: 1
    },
    { field: "commodity", headerName: "Commodity", flex: 1 },
    { field: "traderName", headerName: "Trader Name", flex: 1 },
    {
      field: "Print",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            Print
          </Button>
        );
      },
      flex: 1
    }
  ];

  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let active = true;

    (async () => {
      const newRows = await list('');

      console.log(newRows);
      if (!active) {
        return;
      }

      setRows(newRows);
    })();

    return () => {
      active = false;
    };
  }, [page, data]);

  const handleClick = (event, cellValues) => {
    console.log(cellValues);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        autoheight
        id="taskTable"
        rows={rows}
        columns={columns}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        rowCount={100}
        paginationMode="server"
        onPageChange={(newPage) => setPage(newPage)}
        loading={loading}
      />
    </div>
  );
}

ListTasksTable.propTypes = {
  list: PropTypes.func.isRequired,
  listState: PropTypes.object.isRequired
};

const { list } = taskActions;

const mapStateToProps = ({ listState }) => {
  return { listState };
};

const mapDispatchToProps = {
  list
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTasksTable);