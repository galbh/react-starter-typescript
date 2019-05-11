import React from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../../common/constants';

const PageNotFound: React.FC<{}> = () => <Redirect to={ROUTES.home} />;

export default PageNotFound;
