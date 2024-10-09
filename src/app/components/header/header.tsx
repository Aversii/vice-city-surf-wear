// components/header/header.tsx
import React from "react";
import ToggleButton from "../toggleTheme/toggleTheme";
import { HeaderContainer, LogoContainer, MenuContainer, SearchBarCartContainer, SearchBar, CartIcon, Title } from "./styles";
import { FaSearch } from 'react-icons/fa';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <HeaderContainer>
      <LogoContainer>

      </LogoContainer>
      <MenuContainer>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
            <li>Pranchas</li>
            <li>Acessórios</li>
            <li>Skates</li>
            <li>Trajes</li>
          </ul>
        </nav>
      </MenuContainer>
      <SearchBarCartContainer>
        <SearchBar>
          <FaSearch style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
          <input type="text" placeholder="Pesquisar..." style={{ paddingLeft: '30px' }} />
        </SearchBar>
        <CartIcon>
          🛒
        </CartIcon>
      </SearchBarCartContainer>
      <ToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </HeaderContainer>
  );
}
