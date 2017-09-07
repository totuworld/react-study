import React from 'react';
import Form from '../../components/Form';

export default ({ requestLogin, history }) => <Form onSubmit={fields => requestLogin({ fields, history })} />;
