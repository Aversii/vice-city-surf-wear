import React from 'react';
import { FooterContainer, LinksContainer, LinksList, LinksItem, SocialMediaSection, SocialMediaIcon } from './styles';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
    return (
        <FooterContainer>
            <LinksContainer>
                <section aria-label="Products">
                    <h3>Products</h3>
                    <LinksList>
                        <LinksItem key="surfboards"><a href="#surfboards">Surfboards</a></LinksItem>
                        <LinksItem key="wetsuits"><a href="#wetsuits">Wetsuits</a></LinksItem>
                        <LinksItem key="accessories"><a href="#accessories">Accessories</a></LinksItem>
                        <LinksItem key="skateboards"><a href="#skateboards">Skateboards</a></LinksItem>
                    </LinksList>
                </section>

                <section aria-label="Company">
                    <h3>Company</h3>
                    <LinksList>
                        <LinksItem key="about"><a href="#about">About Us</a></LinksItem>
                        <LinksItem key="team"><a href="#team">Our Team</a></LinksItem>
                        <LinksItem key="sustainability"><a href="#sustainability">Sustainability</a></LinksItem>
                        <LinksItem key="careers"><a href="#careers">Careers</a></LinksItem>
                    </LinksList>
                </section>

                <section aria-label="Customer Service">
                    <h3>Customer Service</h3>
                    <LinksList>
                        <LinksItem key="faq"><a href="#faq">FAQ</a></LinksItem>
                        <LinksItem key="shipping"><a href="#shipping">Shipping & Returns</a></LinksItem>
                        <LinksItem key="contact"><a href="#contact">Contact Us</a></LinksItem>
                        <LinksItem key="support"><a href="#support">Support</a></LinksItem>
                    </LinksList>
                </section>
            </LinksContainer>

            <SocialMediaSection>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <SocialMediaIcon><FaFacebook /></SocialMediaIcon>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <SocialMediaIcon><FaInstagram /></SocialMediaIcon>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <SocialMediaIcon><FaTwitter /></SocialMediaIcon>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <SocialMediaIcon><FaYoutube /></SocialMediaIcon>
                </a>
            </SocialMediaSection>
        </FooterContainer>
    );
};
