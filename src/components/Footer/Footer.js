import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,TextArea
} from './Footer.elements';

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
      <FooterSubscription>
            <FooterSubHeading>
                LET'S CONNECT
            </FooterSubHeading>
            <FooterSubText>Contact our support team or make an appointment with our experts.</FooterSubText>
            <Form>
                <FormInput name='fullName' type='text' placeholder='Your Full Name' />
                <FormInput name='email' type='email' placeholder='Your Email' />
                <FormInput name='subject' type='text' placeholder='Subject' />
                <FormInput name='Contact Number' type='text' placeholder='Contact Number' />
 
            </Form>
            <Form style={{marginTop:"30px", marginBottom:"30px"}}>
                 
                <TextArea name='message'  type='text' placeholder='Message' />
            </Form>
            <Button fontBig>Submit form</Button>

        </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Products</FooterLinkTitle>
            <FooterLink to=''>Talk to code</FooterLink>
            <FooterLink to='/'>Interview GPT</FooterLink>
            <FooterLink to='/'>PrivacyDoc</FooterLink>
            <FooterLink to='/'>Sales Call Evaluator</FooterLink>
            
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'> Email</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Resources</FooterLinkTitle>
            <FooterLink to='/'>Blogs</FooterLink>
            
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            
           Bluetick Consultants LLP
          </SocialLogo>
          <WebsiteRights>Bluetick Consultants LLP © {date.getFullYear()} </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='YouTube' >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;