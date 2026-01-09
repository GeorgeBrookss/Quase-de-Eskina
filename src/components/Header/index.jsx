import { HeaderContainer, Logo, NavBar } from './styles';
import LogoQdE from '../../images/LogoQdE.png';

export function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <img src={LogoQdE} alt="LogoQdE" />
                <br />
            </Logo>
            
            <NavBar>
                <a href="#sobre">Sobre</a>
                <a href="#programacao">Programação</a>
                <a href="#cardapio">Cardápio</a>
                <a href="#reservas">Reservas</a>
            </NavBar>
        </HeaderContainer>
    )
}