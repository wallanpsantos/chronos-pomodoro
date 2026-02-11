import * as React from 'react';

import { Container } from '../../components/Container/Container.tsx';
import { Footer } from '../../components/Footer/Footer.tsx';
import { Logo } from '../../components/Logo/Logo.tsx';
import { Menu } from '../../components/Menu/Menu.tsx';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
