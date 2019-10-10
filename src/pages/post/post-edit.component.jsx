import React from "react";
import {FieldGuesser} from "@api-platform/admin";
import { Datagrid, Edit, SelectInput, TextInput, DateInput, SimpleForm, ReferenceArrayInput, ReferenceManyField, EditButton, SelectArrayInput} from 'react-admin';
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

            <ReferenceManyField
                key="Fields"
                label="Fields"
                reference="fields"
                target="fields">
                <Datagrid>
                    <FieldGuesser source="name" />
                    <FieldGuesser source="type" />
                    <FieldGuesser source="value" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>

            <RichTextInput source="content" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;
