import React from "react";
import { FooterContainer, TextLine, Logo, TextBox } from "./style";
import logo from "../../assets/disney-plus.svg";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo src={logo} />
      <TextLine>
        <span>Privacy Policy</span>
        <span>Data Protection in Brazil</span>
        <span>Subscriber Agreement</span>
        <span>Help</span>
      </TextLine>

      <TextLine>
        <span>Supported devices</span>
        <span>About us</span>
        <span>Interest-based Ads</span>
      </TextLine>

      <TextBox>
        <p>
          Disney+ is a paid service, based on subscription and subject to terms
          and conditions. The Disney+ service is marketed by The Walt Disney
          Company (Brazil) Ltda., World Trade Center, Av. Das Nações Unidas,
          12.551, 12.555, 12.559, Piso 10, São Paulo / SP - CEP 04578-903,
          Brazil and CNPJ / M 73.042.962 / 0004-20
        </p>
      </TextBox>

      <p>© Disney. All Rights Reserved.</p>
      <p>Developed by Gustavo Kuhl.</p>
      <p>Data from www.themoviedb.org.</p>
    </FooterContainer>
  );
};
