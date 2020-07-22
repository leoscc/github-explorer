import React, { useContext } from 'react';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';
import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }: HeaderProps) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Github Explorer" />
      </Link>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;
