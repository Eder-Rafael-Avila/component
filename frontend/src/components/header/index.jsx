import './index.scss';

export default function Header({
    titulo
}) {

    return (
        <header className='comp-header'>
            <div className="slogan">
                <div className="logo">
                    <img src='/assets/images/patas.png' />
                </div>
                <h1>{titulo}</h1>
            </div>
            <nav className="navegacao">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Marketplace
                    </li>
                    <li>
                        Sobre
                    </li>
                    <li>
                        Contato
                    </li>
                </ul>
            </nav>
        </header>
    );
}