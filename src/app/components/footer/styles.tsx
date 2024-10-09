import styled from 'styled-components';

// Estilização do container principal do footer
export const FooterContainer = styled.footer`
    background-color: #1b1b1b;
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    border-top: 2px solid #007bff;
    color: #fff;
`;

// Container para os links, organizando a distribuição
export const LinksContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 4rem;
    flex-wrap: wrap;
    flex: 3;
    justify-content: space-between;

    section {
        flex: 1;
    }

    h3 {
        font-size: 1.2rem;
        color: #00797F;
        margin-bottom: 1rem;
    }
`;

// Lista de links estilizada
export const LinksList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

// Estilo para cada item de link
export const LinksItem = styled.li`
    margin-bottom: 0.8rem;

    a {
        color: #fff;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
        color: #00797F;
    }
`;

// Seção para ícones de redes sociais
export const SocialMediaSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    flex: 1;
`;

// Estilo dos ícones de redes sociais
export const SocialMediaIcon = styled.div`
    font-size: 2rem;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #00797F;
    }
`;
