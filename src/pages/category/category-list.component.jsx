import React from "react";
import {ListGuesser, FieldGuesser} from "@api-platform/admin";

const CategoryList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source="name" />
    </ListGuesser>
);

export default CategoryList;
