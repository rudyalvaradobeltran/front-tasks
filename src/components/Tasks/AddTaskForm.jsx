import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const AddTaskForm = () => {
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

  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <React.Fragment>
      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h6" align="center" margin="dense">
            Add task
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                fullWidth
                margin="dense"
                {...register('description')}
                error={errors.description ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.description?.message}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller
                    control={control}
                    name="active"
                    defaultValue="false"
                    inputRef={register()}
                    render={({ field: { onChange } }) => (
                      <Checkbox
                        color="primary"
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
              <Typography variant="inherit" color="textSecondary">
                {errors.active
                  ? '(' + errors.active.message + ')'
                  : ''}
              </Typography>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default AddTaskForm;
