import { Container } from './components/Container/Container.tsx';
import { Logo } from './components/Logo/Logo.tsx';
import { Menu } from './components/Menu/Menu.tsx';
import { CountDown } from './components/CountDown/CountDown.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import { MainForm } from './components/MainForm/MainForm.tsx';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>

      <Container>
        <MainForm />
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
