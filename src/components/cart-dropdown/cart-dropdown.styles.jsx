import styled from "styled-components";
import {
  DefaultButton,
  DisbaledInvertedButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 100;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 0.6rem;

  ${DefaultButton},
  ${GoogleSignInButton},
  ${InvertedButton},
  ${DisbaledInvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// .button-container:last-child {
//   margin-top: 0.5rem;
// }
