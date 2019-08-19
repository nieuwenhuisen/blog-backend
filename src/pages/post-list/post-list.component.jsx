import React, {Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { format } from "timeago.js";

import { fetchPostsStart } from '../../redux/post/post.actions';
import { selectPosts } from '../../redux/post/post.selectors'

const PostListPage = ({ fetchPostsStart, posts }) => {
    useEffect(() => {
        fetchPostsStart();
    }, [fetchPostsStart])

    if (!posts) {
        return <h1>Loading...</h1>;
    }

    return (
        <Fragment>
            <h1>Posts</h1>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Slug</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Publication date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map(post => (
                            <TableRow key={post['@id']}>
                                <TableCell component="th" scope="row">{post.title}</TableCell>
                                <TableCell>{post.slug}</TableCell>
                                <TableCell>{post.status}</TableCell>
                                <TableCell>{format(post.publicationDate)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Fragment>
    )
};

const mapStateToProps = createStructuredSelector({
    posts: selectPosts
});

const mapDispatchToProps = dispatch => ({
    fetchPostsStart: () => dispatch(fetchPostsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListPage);
