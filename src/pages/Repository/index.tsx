import React, { useState, useEffect } from 'react';
import {
  FiStar,
  FiGitBranch,
  FiAlertCircle,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link, useRouteMatch } from 'react-router-dom';

import {
  listAnimation,
  listItemAnimation,
  imageAnimation,
  infoAnimation,
} from '../../animations';

import api from '../../services/api';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <motion.img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
              variants={imageAnimation}
              initial="hidden"
              animate="show"
              exit="out"
            />
            <motion.div
              variants={infoAnimation}
              initial="hidden"
              animate="show"
              exit="out"
            >
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </motion.div>
          </header>

          <motion.ul
            variants={listAnimation}
            initial="hidden"
            animate="show"
            exit="out"
          >
            <motion.li variants={listItemAnimation}>
              <strong>
                <FiStar size={28} />
                {repository.stargazers_count}
              </strong>
              <span>Stars</span>
            </motion.li>

            <motion.li variants={listItemAnimation}>
              <strong>
                <FiGitBranch size={28} />
                {repository.forks_count}
              </strong>
              <span>Forks</span>
            </motion.li>

            <motion.li variants={listItemAnimation}>
              <strong>
                <FiAlertCircle size={28} />
                {repository.open_issues_count}
              </strong>
              <span>Issues abertas</span>
            </motion.li>
          </motion.ul>
        </RepositoryInfo>
      )}

      <Issues
        variants={listAnimation}
        initial="hidden"
        animate="show"
        exit="out"
      >
        {issues.map((issue) => (
          <a
            key={issue.id}
            href={issue.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={40} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
