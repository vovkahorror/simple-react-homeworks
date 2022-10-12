import React, {useState} from 'react';
import Header from './Header';
import Pages from './Pages';
import {HashRouter} from "react-router-dom";

function HW5() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                />

                <Pages/>

            </HashRouter>
        </div>
    );
}

export default HW5;
