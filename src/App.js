import React, {useState} from 'react';
import Header from './components/Header/Header';
import {ConnectPopup} from "./components/ConnectPopup/ConnectPopup";

const CN = 'jt-app';

function App() {
    const [connectPopupOpen, setConnectPopupOpen] = useState(false);


    return (
        <div className={CN}>
            <Header onOpenPopup={setConnectPopupOpen}/>
            {connectPopupOpen &&
                <ConnectPopup connectPopupOpen={connectPopupOpen} setConnectPopupOpen={setConnectPopupOpen}/>}
        </div>
    );
}

export default App;
