import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  CircularProgress
} from '@mui/material';
import { withRouter } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as taskActions from '../../redux/actions/tasks.action';
import * as yup from 'yup';

const AddEditTaskForm = ({ match, save, getById, init, saveState, getByIdState: { data } }) => {
  const { id } = match.params;
  const path = match.path.split('/')[1];

  const [description, setDescription] = useState('');
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if(path === 'edit-task') {
      const getByIdCB = async () => {
        await getById(id);
      };

      getByIdCB();
    }
  }, [id, getById, path]);

  useEffect(() => {
    if(mounted) return {};
    if(data?.description) setDescription(data?.description);

    if(description) setMounted(true);
  }, [description, mounted, data]);

  useEffect(() => {
    if(description && data?.active !== undefined) {
      setActive(data ? data?.active : false);
      const initCB = async () => {
        await init();
      };

      initCB();
    }
  }, [data, data?.active, init, description]);

  const validationSchema = yup.object().shape({
    description: yup.string()
      .required('Description is required')
      .min(1, 'Description must be at least 6 characters')
      .max(20, 'Description must not exceed 20 characters'),
    active: yup.bool('Active must be true or false'),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (formData, e) => {
    await save(formData, id);
  };

  return (
    <React.Fragment>
      <Paper>
        <Box px={3} py={2}>
          <Typography id='title' variant='h6' align='center' margin='dense'>
            {path === 'add-task' ? 'Add Task' : 'Edit Task'}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              {(path === 'add-task' || 
                (path === 'edit-task' && mounted) ||
                process.env.NODE_ENV === 'test') &&
                <TextField
                  required
                  id='description'
                  name='description'
                  label='Description'
                  fullWidth
                  margin='dense'
                  defaultValue={description}
                  {...register('description')}
                  error={errors.description ? true : false}
                />
              }
              <Typography variant='inherit' color='textSecondary'>
                {errors.description?.message}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller
                    control={control}
                    name='active'
                    inputRef={register()}
                    render={({ field: { onChange } }) => (
                      <Checkbox
                        id='active'
                        name='active'
                        color='primary'
                        checked={active}
                        onChange={e => onChange(e.target.checked)}
                      />
                    )}
                  />
                }
                label={
                  <Typography color={errors.active ? 'error' : 'inherit'}>
                    Active
                  </Typography>
                }
              />
              <br />
              <Typography variant='inherit' color='textSecondary'>
                {errors.active
                  ? '(' + errors.active.message + ')'
                  : ''}
              </Typography>
            </Grid>
            <Typography id='submitMessage' ml={1} variant='inherit' color={saveState.error ? 'red' : 'green'}>
              {saveState.data}
            </Typography>
          </Grid>
          <Box mt={2}>
            <Button
              id='saveButton'
              variant='contained'
              color='primary'
              disabled={saveState.loading}
              onClick={handleSubmit(onSubmit)}
            >
              <div>Save</div>
              {saveState.loading &&
                <CircularProgress size={20} />
              }
            </Button>
          </Box>
        </Box>
      </Paper>
    </React.Fragment>
  );
};

AddEditTaskForm.propTypes = {
  match: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired,
  getById: PropTypes.func.isRequired,
  saveState: PropTypes.object.isRequired,
  getByIdState: PropTypes.object
};

const { save, getById, init } = taskActions;

const mapStateToProps = ({ saveState, getByIdState }) => {
  return { saveState, getByIdState };
};

const mapDispatchToProps = {
  save, getById, init
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddEditTaskForm));