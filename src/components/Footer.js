import { FooterContainer } from "./styles/FooterContainer.style";

const Footer = () => {
 return (
  <FooterContainer>
   <div className="footerContent">
    <div className="disclaimer">
     <img src="../imgs/disclaimer.svg" alt="disclaimer icon" />
     <h1>DISCLAIMER:</h1>
    </div>
    <p>
     All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media
     accounts and other platforms (“Site”) is for your general information only, procured from third party sources. We
     make no warranties of any kind in relation to our content, including but not limited to accuracy and updatedness.
     No part of the content that we provide constitutes financial advice, legal advice or any other form of advice meant
     for your specific reliance for any purpose. Any use or reliance on our content is solely at your own risk and
     discretion. You should conduct your own research, review, analyse and verify our content before relying on them.
     Trading is a highly risky activity that can lead to major losses, please therefore consult your financial advisor
     before making any decision. No content on our Site is meant to be a solicitation or offer.
    </p>
    <p className="copyright">
     Copyright 2021 - Powered by <span>CoinGecko.com</span>
    </p>
   </div>
  </FooterContainer>
 );
};

export default Footer;
