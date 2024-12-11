import React, { useState } from 'react';
import Header from './components/Header/Header';
import { ConnectPopup } from './components/ConnectPopup/ConnectPopup';
import { Home } from './components/Home/Home';
import { Work } from './components/Work/Work';

const CN = 'jt-app';

function App() {
    const [connectPopupOpen, setConnectPopupOpen] = useState(false);

    return (
        <div className={CN}>
            {connectPopupOpen && (
                <ConnectPopup connectPopupOpen={connectPopupOpen} setConnectPopupOpen={setConnectPopupOpen} />
            )}<Header onOpenPopup={setConnectPopupOpen} />

            <Home/>
            <Work onOpenPopup={setConnectPopupOpen}/>
        </div>
    );
}

export default App;
