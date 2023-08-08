import React from "react";
import {
  FooterContainer,
  FooterSubscription,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  AddressIcon,
  PhoneIcon,
  EmailIcon,
  FooterDetail,
  FooterDetailText,
} from "./Footer.elements";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHome,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        {/* <FooterSubHeading>

        </FooterSubHeading>
        <FooterSubText>
            
        </FooterSubText> */}
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Company</FooterLinkTitle>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Our Services</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Follow Us</FooterLinkTitle>
            <FooterLink>Facebook</FooterLink>
            <FooterLink>Instagram</FooterLink>
            <FooterLink>LinkedIn</FooterLink>
            <FooterLink>YouTube</FooterLink>

            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </FooterLinkItems>
          {/* <FooterLinkItems>
            <FooterDetail>
              <AddressIcon />
              <FooterDetailText>No 5, Test, test, Sri Lanka</FooterDetailText>
            </FooterDetail>
            <FooterDetail>
              <PhoneIcon />
            </FooterDetail>
            <FooterDetail>
              <EmailIcon />
            </FooterDetail>
          </FooterLinkItems> */}
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo>{/* <SocialIcon></SocialIcon> */}</SocialLogo>
          <WebsiteRights>Shan Products 2023</WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
