import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import ListTasksTable from '../../components/Tasks/ListTasksTable';
import { render, screen } from '@testing-library/react';
import { Provider as ProviderRedux } from 'react-redux';
import createTestStore from '../../redux/CreateTestStore';

const store = createTestStore();

beforeEach(() => 
  act(async() => 
    render(
    <ProviderRedux store={store}>
      <Router>
        <ListTasksTable/>
      </Router>
    </ProviderRedux>
  ))
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

describe('when user cancels to remove task', () => {
  it.todo('must close confirmation message');
});