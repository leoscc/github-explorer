import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    color: #a8a8b3;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #616161;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    @media (max-width: 480px) {
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
        color: #3d3d4d;
        font-size: 36px;

        @media (max-width: 480px) {
          font-size: 140%;
        }
      }

      p {
        color: #737380;
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
        color: #3d3d4d;
        display: block;
        font-size: 36px;

        @media (max-width: 480px) {
          font-size: 130%;
        }
      }

      span {
        color: #6c6c80;
        display: block;
        margin-top: 4px;

        @media (max-width: 480px) {
          font-size: 100%;
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
    background: #fff;
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
        color: #3d3d4d;

        @media (max-width: 480px) {
          font-size: 100%;
          text-align: justify;
        }
      }

      p {
        color: #a8a8b3;
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
      color: #cbcbd6;

      @media (max-width: 480px) {
        width: 20px;
      }
    }
  }
`;
