import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './styles/main.scss';

import {routes} from "./utils/constants";
import MainPage from "./components/MainPage";
import Board from "./components/board/Board";
import Post from "./components/post/Post";
import AddPostProvider from "./context/AddPostProvider";
import Search from "./components/search/Search";
import ThemeProvider from "./context/ThemeProvider";


function App() {
    return (
        <Router>
            <ThemeProvider>
                <AddPostProvider>
                    <div className="App">
                        <Switch>
                            <Route exact path={routes.main}>
                                <MainPage />
                            </Route>
                            <Route exact path={routes.board}>
                                <Board />
                            </Route>
                            <Route exact path={routes.post}>
                                <Post />
                            </Route>
                            <Route exact path={routes.search}>
                                <Search />
                            </Route>
                        </Switch>
                    </div>
                </AddPostProvider>
            </ThemeProvider>
        </Router>
    );
}

export default App;
