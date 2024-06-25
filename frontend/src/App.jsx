import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import LeaveList from './components/LeaveList';
import CreateLeave from './components/CreateLeave';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CreateLeave />
        <LeaveList />
      </div>
    </Provider>
  );
}

export default App;
