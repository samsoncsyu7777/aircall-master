import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ActivityFeed from './components/ActivityFeed/ActivityFeed.jsx';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.jsx";

const App = () => {
  const [page, setPage] = useState('Inbox');

  return (
    <ThemeProvider theme={theme}>
      <div className='container'>
        <NavBar page={page} setPage={setPage} />
        <ActivityFeed page={page} />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
