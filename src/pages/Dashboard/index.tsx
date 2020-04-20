import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/62032328?s=460&u=6a8f36b785ed0b97690e42319b721a04b1683bd9&v=4"
            alt="leon-carvalho"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed turi
              rerum ex magni eum ipsam officia repudiandae iusto!
            </p>
          </div>

          <FiChevronRight size={40} />
        </a>

        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/62032328?s=460&u=6a8f36b785ed0b97690e42319b721a04b1683bd9&v=4"
            alt="leon-carvalho"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed turi
              rerum ex magni eum ipsam officia repudiandae iusto!
            </p>
          </div>

          <FiChevronRight size={40} />
        </a>

        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/62032328?s=460&u=6a8f36b785ed0b97690e42319b721a04b1683bd9&v=4"
            alt="leon-carvalho"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed turi
              rerum ex magni eum ipsam officia repudiandae iusto!
            </p>
          </div>

          <FiChevronRight size={40} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
