import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import AddEditTaskForm from '../components/Tasks/AddEditTaskForm';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider as ProviderRedux } from 'react-redux';
import SetupStore from '../redux/SetupStore';

const store = SetupStore();

beforeEach(() => 
  act(async() => 
    render(
    <ProviderRedux store={store}>
      <Router>
        <AddEditTaskForm/>
      </Router>
    </ProviderRedux>
  ))
);

const fireClickSave = () => 
  act(async() => fireEvent.click(screen.getByRole('button', { id: /savebutton/i })
));

const descriptionValue = 'New task';

const fireWriteDescription = () => 
  fireEvent.change(
    screen.getByRole('textbox', { name: /description/i }), { target: { value: descriptionValue } }
  );

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
  it('form must validate description and show error', async () => {
    await waitFor(() => 
      fireClickSave()
    );
    expect(screen.getByText(/description is required/i)).toBeInTheDocument()
  });
  it.todo('save button must be disabled until save is done and there must be a success message');
  it.todo('save button must display success message if task is saved');
});