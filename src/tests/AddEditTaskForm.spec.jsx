import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AddEditTaskForm from '../components/Tasks/AddEditTaskForm';
import { render, screen } from '@testing-library/react';

beforeEach(() => render(<Router><AddEditTaskForm/></Router>));

describe('when page is mounted', () => {
  it('description input must be displayed', () => {
    expect(screen.getByRole('textbox', { name: /description/i })).toBeInTheDocument();
  });
  it('active checkbox input must be displayed', () => {
    expect(screen.getByRole('checkbox', { name: /active/i })).toBeInTheDocument();
  });
  it('submit button must be displayed', () => {
    expect(screen.getByRole('button', { id: /savebutton/i })).toBeInTheDocument();
  });
});

describe('when user clicks the save button', () => {
  it.todo('form must validate description and show error');
  it.todo('save button must be disabled until search is done');
  it.todo('save button must display success message if task is saved');
});