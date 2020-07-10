import React from 'react';
import { CssBaseline  } from "@material-ui/core";
import { Entry } from "@/Containers/Entry/Entry";
import { Provider } from "react-redux";
import { store } from "@/rdx/store";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Entry />
    </Provider>
  );
}

export default App;
