import React, {Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { Paper } from "@material-ui/core";

import { fetchPostsStart } from '../../redux/post/post.actions';
import { selectPosts } from '../../redux/post/post.selectors'
import Datatable from "../../components/datatable/datatable.component";
import Spinner from "../../components/spinner/spinner.component";

const PostListPage = ({ fetchPostsStart, posts }) => {
    useEffect(() => {
        fetchPostsStart();
    }, [fetchPostsStart])

    return (
        <Fragment>
            <h1>Posts</h1>
            <Paper>
                {!posts ? <Spinner /> :
                    (<Datatable headers={['Title', 'Slug', 'Status', 'Publication date']} rows={posts} />) }
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
