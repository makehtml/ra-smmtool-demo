import React from 'react';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { Admin, Resource, fetchUtils } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';

import { TicketList, TicketEdit, TicketCreate, TicketShow } from './tickets';
import { UserList } from './users';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

import { API_URL } from './Config';

const token = localStorage.getItem('token');
const httpClient = (url, options = {}) => {
    options.user = {
        authenticated: true,
        token: token
    }
    return fetchUtils.fetchJson(url, options);
}

const App = () => (
    <Admin
        dataProvider={simpleRestProvider(API_URL, httpClient)}
        authProvider={authProvider}
        dashboard={Dashboard}
    >
        <Resource
            name="tickets"
            icon={PostIcon}
            list={TicketList}
            edit={TicketEdit}
            create={TicketCreate}
            show={TicketShow}
            users={UserList}
        />
        <Resource name="users" icon={UserIcon} list={UserList} />
    </Admin>
);
export default App;
