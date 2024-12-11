import './Header.scss';

const CN = 'jt-header';

const Header = ({ onOpenPopup }) => {
    return (
        <header className={CN}>
            <nav>
                <a>About</a>
                <a>Work</a>
                <a>Contacts</a>
            </nav>

            <button className={`${CN}__btn`} onClick={() => onOpenPopup(true)}>
                Connect
            </button>

            {/*<a*/}
            {/*    href={'https://t.me/iuliiatolstova'}*/}
            {/*    className={`${CN}__icon telegram`}*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*></a>*/}
            {/*<a*/}
            {/*    href={'https://www.instagram.com/_yulia_tolstova_/'}*/}
            {/*    className={`${CN}__icon instagram`}*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*></a>*/}
            {/*<a*/}
            {/*    href={'https://www.instagram.com/_yulia_tolstova_/'}*/}
            {/*    className={`${CN}__icon whatsapp`}*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*></a>*/}
            {/*<a*/}
            {/*    href={'https://www.instagram.com/_yulia_tolstova_/'}*/}
            {/*    className={`${CN}__icon linkedin`}*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*></a>*/}

            <div className={`${CN}__switch`}>
                <div className={`${CN}__theme light`}></div>
            </div>

            <div className={`${CN}__lang`}>
                <div className={`${CN}__lang ru`}></div>
            </div>
        </header>
    );
};
export default Header;
