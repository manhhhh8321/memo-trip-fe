import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import { store, persistor } from "@redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@utils";
import Router from "./router";

function App() {
    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <PersistGate loading={null} persistor={persistor}>
                        <BrowserRouter>
                            <Router />
                        </BrowserRouter>
                    </PersistGate>
                </ThemeProvider>
            </Provider>
        </>
    );
}

export default App;
