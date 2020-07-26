import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repository/:repository+" component={Repository} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
