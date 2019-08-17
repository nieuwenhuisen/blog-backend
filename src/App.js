import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';

import { apiDocumentationParser, dataProvider } from './api-platform/api-plaform.utils';

import PostList from './components/post/post-list.component';
import { PostEdit, PostCreate, PostIcon } from './posts';

const entrypoint = 'http://localhost:8004/api';

class App extends Component {
    state = { api: null };

    componentDidMount() {
        apiDocumentationParser(entrypoint).then(({ api }) => {
            this.setState({ api });
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        const { api } = this.state;
        if (null === api) return <div>Loading...</div>;
        return (
            <Admin api={ api }
                   apiDocumentationParser={ apiDocumentationParser }
                   dataProvider= { dataProvider(api) }>
                <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
            </Admin>
        )
    }
}

export default App;
