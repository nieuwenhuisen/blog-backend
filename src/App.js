import React from "react";
import { HydraAdmin, ResourceGuesser } from "@api-platform/admin";
import CategoryList from "./pages/category/category-list.component";
import PostList from "./pages/post/post-list.component";

export default () => (
    <HydraAdmin entrypoint="https://localhost:8000/api">
        <ResourceGuesser name="posts" list={PostList}  />
        <ResourceGuesser name="categories" list={CategoryList} />
    </HydraAdmin>
);
