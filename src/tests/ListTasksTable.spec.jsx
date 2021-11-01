import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import ListTasksTable from '../components/Tasks/ListTasksTable';
import { render, screen } from '@testing-library/react';

beforeEach(() =>
  act(async() => render(<Router><ListTasksTable/></Router>)) 
);

describe('when page is mounted', () => {
  it('table must be displayed', () => {
    expect(screen.getByRole('grid', { id: /taskTable/i })).toBeInTheDocument();
  });
});

describe('when user clicks the edit task button', () => {
  it.todo('must redirect to edit page');
});

describe('when user clicks the remove task button', () => {
  it.todo('must show confirmation message');
});

describe('when user confirms to remove task', () => {
  it.todo('must display success message if task is removed');
});

describe('when user cancels to remove task', () => {
  it.todo('must close confirmation message');
});