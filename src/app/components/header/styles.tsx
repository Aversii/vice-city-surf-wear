import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows.medium};
  height: 10dvh;
`;

export const LogoContainer = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.h3`
  background: ${(props) => props.theme.colors.gradient};
  /*   -webkit-background-clip: text;
 */
  -webkit-text-fill-color: transparent;
  font-size: 2em;
`;

export const MenuContainer = styled.nav`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const SearchBarCartContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SearchBar = styled.div`
  position: relative;
  margin-right: 16px;

  input {
    padding: 8px;
    padding-left: 30px;
    border-radius: ${(props) => props.theme.borders.radius};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    width: 200px;

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const CartIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
`;
