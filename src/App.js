import React from "react";
import { HydraAdmin, ResourceGuesser } from "@api-platform/admin";
import CategoryList from "./pages/category/category-list.component";
import PostList from "./pages/post/post-list.component";
import PostEdit from "./pages/post/post-edit.component";

export default () => (
    <HydraAdmin entrypoint="https://localhost:8000/api">
        <ResourceGuesser name="posts" list={PostList} edit={PostEdit} />
        <ResourceGuesser name="categories" list={CategoryList} />
    </HydraAdmin>
);
