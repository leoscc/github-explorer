import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  max-width: 450px;
  margin-top: 80px;
  line-height: 56px;
  color: ${(props) => props.theme.colors.title};
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    border: 0;
    height: 70px;
    color: #3a3a3a;
    padding: 0 24px;
    border: 2px solid ${(props) => props.theme.colors.cardBackground};
    border-right: 0;
    border-radius: 5px 0px 0px 5px;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    @media (max-width: 480px) {
      font-size: 90%;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.description};
      @media (max-width: 480px) {
        font-size: 80%;
      }
    }
  }

  button {
    border: 0;
    color: #fff;
    width: 210px;
    height: 70px;
    font-weight: bold;
    background-color: #04d361;
    border-radius: 0px 5px 5px 0px;
    transition: background-color 0.2s;

    @media (max-width: 480px) {
      padding: 5px;
      font-size: 90%;
    }

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    width: 100%;
    padding: 24px;
    display: block;
    background: ${(props) => props.theme.colors.cardBackground};
    border-radius: 5px;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;

      @media (max-width: 480px) {
        width: 48px;
        height: 48px;
        align-self: flex-start;
      }
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: ${(props) => props.theme.colors.cardTitle};
      }

      p {
        color: ${(props) => props.theme.colors.description};
        margin-top: 4px;
        font-size: 18px;

        @media (max-width: 480px) {
          font-size: 82%;
        }
      }
    }

    svg {
      margin-left: auto;
      color: ${(props) => props.theme.colors.icon};

      @media (max-width: 480px) {
        width: 20px;
      }
    }
  }
`;
