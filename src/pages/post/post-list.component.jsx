import React from "react";
import {ListGuesser, FieldGuesser} from "@api-platform/admin";
import { SelectField, Filter, TextInput, SelectInput } from 'react-admin';

const POST_STATUSES = [
    { id: 'draft', name: 'Draft' },
    { id: 'published', name: 'Published' },
    { id: 'trash', name: 'Trash' },
    { id: 'archived', name: 'Archived' },
];

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Title" source="title" alwaysOn />
        <SelectInput label="Status" choices={POST_STATUSES} source="status" alwaysOn />
        <TextInput label="Content" source="content" />
    </Filter>
);

const PostList = props => (
    <ListGuesser {...props} filters={<PostFilter />}>
        <FieldGuesser source="title" />
        <FieldGuesser source="slug" />
        <SelectField source="status" choices={POST_STATUSES} />
        <FieldGuesser source="publicationDate" />
    </ListGuesser>
);

export default PostList;
