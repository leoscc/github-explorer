import React, { useState, useEffect, FormEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import {
  titleAnimation,
  formAnimation,
  listAnimation,
  listItemAnimation,
} from '../../animations';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storedRepositories) {
      return JSON.parse(storedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleAddRepository = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!newRepo) {
        setInputError('Digite o autor/nome do repositório');
        return;
      }

      // check if repository already exists
      if (
        repositories.find(
          (repository) => repository.full_name === newRepo.toLowerCase(),
        )
      ) {
        setNewRepo('');
        setInputError('Ops, você já adicionou este repositório');
        return;
      }

      try {
        const { data: repository } = await api.get<Repository>(
          `repos/${newRepo}`,
        );

        setRepositories([...repositories, repository].reverse());
        setNewRepo('');
        setInputError('');
      } catch (error) {
        setNewRepo('');
        setInputError('Desculpe, não encontramos este repositório');
      }
    },
    [newRepo, repositories],
  );

  return (
    <>
      <Title
        variants={titleAnimation}
        initial="hidden"
        animate="show"
        exit="out"
      >
        Explore repositórios no GitHub
      </Title>

      <Form
        hasError={!!inputError}
        onSubmit={handleAddRepository}
        variants={formAnimation}
        initial="hidden"
        animate="show"
        exit="out"
      >
        <label htmlFor="repository">
          <strong>Digite o autor/nome do repositório</strong>
          <input
            name="repository"
            value={newRepo}
            autoCorrect="false"
            autoCapitalize="none"
            onChange={(e) => setNewRepo(e.target.value)}
            placeholder="ex: facebook/react"
          />
        </label>

        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories
        variants={listAnimation}
        initial="hidden"
        animate="show"
        exit="out"
      >
        {repositories.map((repository) => (
          <motion.div variants={listItemAnimation}>
            <Link
              key={repository.full_name}
              to={`/repository/${repository.full_name}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.owner.login}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={40} />
            </Link>
          </motion.div>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
