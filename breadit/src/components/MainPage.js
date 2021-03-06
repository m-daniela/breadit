import React from 'react';
import BoardList from './common/BoardList';
import Head from './common/Head';
import ThemeToggle from './common/ThemeToggle';


/**
 * Main Page
 * Displays a welcome message and the available boards. 
 */
const MainPage = () => {
    return (
        <>
            <Head title={"Breadit"}/>
            <div className="main-wrapper">
                <div className="main">
                    <h1>Breadit</h1>
                    <p>the cookbook of the internet</p>
                    <BoardList/>
                    {/* <ThemeToggle/> */}
                </div>
            </div>
        </>
    );
};

export default MainPage;
