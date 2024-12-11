import { useCallback, useEffect, useState } from 'react';
import './ConnectPopup.scss';

const CN = 'jt-connect-popup';

export const ConnectPopup = ({ connectPopupOpen, setConnectPopupOpen }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setConnectPopupOpen(false);
            }
        },
        [setConnectPopupOpen]
    );

    useEffect(() => {
        if (connectPopupOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [connectPopupOpen, handleKeyDown]);

    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            setConnectPopupOpen(false);
        }
    };

    const handleUpdateName = (e) => {
        setName(e.target.value);
    };

    const handleUpdateEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleUpdateMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleSend = () => {
        setConnectPopupOpen(false);
    };

    return (
        <div className={`${CN}__background ${connectPopupOpen ? 'show' : ''}`} onClick={handleClose}>
            <div className={`${CN}__content`}>
                <aside>
                    <h3 className={`${CN}__title`}>Связаться со мной</h3>
                    <button
                        className={`${CN}__close`}
                        onClick={() => {
                            setConnectPopupOpen(false);
                        }}
                    />
                    <p>
                        Если вы хотите задать вопрос, пожалуйста, свяжитесь со мной, и я отвечу как можно скорее. <br/>Если
                        вы предпочитаете связаться со мной напрямую, отправьте электронное письмо по адресу:<br/>
                        <a href={'mailto:tolstova.dev@gmail.com'}>tolstova.dev@gmail.com</a>
                    </p>
                </aside>

                <div className={`${CN}__body`}>
                    <label>
                        Имя:
                        <input className={`${CN}__name`} onChange={handleUpdateName} value={name} />
                    </label>
                    <label>
                        Email:
                        <input className={`${CN}__email`} onChange={handleUpdateEmail} value={email} />
                    </label>
                    <label>
                        Сообщение:
                        <textarea className={`${CN}__message`} onChange={handleUpdateMessage} value={message} />
                    </label>
                    <button className={`${CN}__send`} onClick={handleSend}>
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};
