import React from 'react';
import { CssBaseline  } from "@material-ui/core";
import { Entry } from "@/Containers/Entry/Entry";
import { Provider } from "react-redux";
import { store } from "@/rdx/store";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <Entry />
      </Router>
    </Provider>
  );
}

export default App;
