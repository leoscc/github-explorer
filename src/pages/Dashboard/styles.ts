import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled(motion.h1)`
  max-width: 450px;
  margin-top: 80px;
  line-height: 120%;
  font-size: min(max(1rem, 10.3vw), 48px);
  color: ${(props) => props.theme.colors.title};
`;

const shakeAnimation = keyframes`
10%, 90% {
  transform: translate3d(-1px, 0, 0);
}

20%, 80% {
  transform: translate3d(2px, 0, 0);
}

30%, 50%, 70% {
  transform: translate3d(-4px, 0, 0);
}

40%, 60% {
  transform: translate3d(4px, 0, 0);
}
`;

export const Form = styled(motion.form)<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;
  align-items: flex-end;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  label {
    display: flex;
    flex: 2;
    flex-direction: column;

    width: 100%;

    strong {
      opacity: 0.6;
      font-size: 2px;
      margin-bottom: 8px;
      font-size: min(max(1rem, 3vw), 20px);
      color: ${(props) => props.theme.colors.subtitle};
    }

    input {
      border: 0;
      width: 100%;
      height: 70px;
      color: #3a3a3a;
      padding: 0 24px;
      border: 2px solid #fff;

      border-radius: 5px 0px 0px 5px;

      ${(props) =>
        props.hasError &&
        css`
          border-color: #c53030;
          animation: ${shakeAnimation} 0.4s linear;
        `}

      &::placeholder {
        color: ${(props) => props.theme.colors.description};
        @media (max-width: 480px) {
          font-size: 80%;
        }
      }

      @media (max-width: 480px) {
        flex: none;
        margin-bottom: 4px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }

  button {
    flex: 1;
    border: 0;
    color: #fff;
    width: 100%;
    height: 70px;
    font-weight: bold;
    background-color: #04d361;
    border-radius: 0px 5px 5px 0px;
    transition: background-color 0.2s;

    @media (max-width: 480px) {
      flex: none;
      padding: 5px;
      font-size: 90%;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
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

export const Repositories = styled(motion.div)`
  margin-top: 80px;
  max-width: 700px;

  > div {
    margin-bottom: 8px;
  }

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

    @media (max-width: 480px) {
      padding: 12px;
      text-align: center;
      flex-direction: column;
    }

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
        align-self: center;
        margin: 8px 0;
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
