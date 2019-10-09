import React from "react";
import {InputGuesser} from "@api-platform/admin";
import { Edit, SelectInput, TextInput, DateInput, SimpleForm, ReferenceArrayInput, SelectArrayInput} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

import POST_STATUSES from './post-status';

const PostEdit = props => (
    <Edit {...props} redirect="list">
        <SimpleForm>
            <TextInput source="title" />
            <SelectInput source="status" choices={POST_STATUSES} />
            <DateInput source="publicationDate" />

            <ReferenceArrayInput
                key="Categories"
                label="Categories"
                reference="categories"
                source="categories">
                <SelectArrayInput source="name" />
            </ReferenceArrayInput>

            <RichTextInput source="content" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;
