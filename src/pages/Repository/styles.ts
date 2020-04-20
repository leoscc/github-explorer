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

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        color: #3d3d4d;
        font-size: 36px;
      }

      p {
        color: #737380;
        font-size: 18px;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    margin-top: 40px;
    list-style: none;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        color: #3d3d4d;
        display: block;
        font-size: 36px;
      }

      span {
        color: #6c6c80;
        display: block;
        margin-top: 4px;
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
      }

      p {
        color: #a8a8b3;
        margin-top: 4px;
        font-size: 18px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
