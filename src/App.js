import React from 'react';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { TicketList, TicketEdit, TicketCreate, TicketShow } from './tickets';
import { UserList } from './users';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const App = () => (
    <Admin
        dataProvider={jsonServerProvider('http://dev.smmtool.ru:4444/api')}
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
        />
        <Resource name="users" icon={UserIcon} list={UserList} />
    </Admin>
);
export default App;
