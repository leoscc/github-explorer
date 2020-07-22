import styled from 'styled-components';

export const Header = styled.header`
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    color: ${(props) => props.theme.colors.description};
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.title};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  header {
    display: flex;
    align-items: center;

    margin-top: 80px;

    @media (max-width: 480px) {
      margin-top: 52px;
      align-items: flex-start;
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;

      @media (max-width: 480px) {
        width: 20%;
        height: 50%;
      }
    }

    div {
      margin-left: 24px;

      strong {
        color: ${(props) => props.theme.colors.cardTitle};
        font-size: 36px;

        @media (max-width: 480px) {
          font-size: 140%;
        }
      }

      p {
        color: ${(props) => props.theme.colors.description};
        font-size: 18px;
        margin-top: 4px;

        @media (max-width: 480px) {
          font-size: 100%;
        }
      }
    }
  }

  ul {
    display: flex;
    margin-top: 40px;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media (max-width: 480px) {
        margin: 0 auto;
      }

      & + li {
        margin-left: 80px;

        @media (max-width: 480px) {
          margin-left: 40px;
        }
      }

      strong {
        color: ${(props) => props.theme.colors.cardTitle};
        display: block;
        font-size: 36px;

        > svg {
          margin-right: 8px;
        }

        @media (max-width: 480px) {
          font-size: 90%;

          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
        }
      }

      span {
        color: ${(props) => props.theme.colors.subtitle};
        display: block;
        margin-top: 4px;

        @media (max-width: 480px) {
          font-size: 80%;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
      min-width: 64px;
      min-height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: ${(props) => props.theme.colors.cardTitle};

        @media (max-width: 480px) {
          font-size: 100%;
          text-align: justify;
        }
      }

      p {
        color: ${(props) => props.theme.colors.description};
        margin-top: 4px;
        font-size: 18px;

        @media (max-width: 480px) {
          font-size: 100%;
          text-align: justify;
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
