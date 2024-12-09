import './Header.scss';

const CN = 'jt-header';

const Header = () => {
    return (
        <header className={CN}>
            <a>Обо мне</a>
            <a>Опыт работы</a>
            <a>Портфолио</a>
            <a>Контакты</a>

            <button className={`${CN}__btn`}>Связаться</button>

            <a
                href={'https://t.me/iuliiatolstova'}
                className={`${CN}__icon telegram`}
                target="_blank"
                rel="noopener noreferrer"
            ></a>
            <a
                href={'https://www.instagram.com/_yulia_tolstova_/'}
                className={`${CN}__icon instagram`}
                target="_blank"
                rel="noopener noreferrer"
            ></a>
            <a
                href={'https://www.instagram.com/_yulia_tolstova_/'}
                className={`${CN}__icon whatsapp`}
                target="_blank"
                rel="noopener noreferrer"
            ></a>
            <a
                href={'https://www.instagram.com/_yulia_tolstova_/'}
                className={`${CN}__icon linkedin`}
                target="_blank"
                rel="noopener noreferrer"
            ></a>

            <div className={`${CN}__switch}`}>
                <div className={`${CN}__theme theme}`}></div>
            </div>
        </header>
    );
};
export default Header;
