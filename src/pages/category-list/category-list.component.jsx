import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"
import { Paper } from "@material-ui/core";

import { fetchCategoriesStart } from "../../redux/category/category.actions";
import { selectCategories } from "../../redux/category/category.selectors"
import Datatable from "../../components/datatable/datatable.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoryListPage = ({ categories, fetchCategoriesStart }) => {
    useEffect(() => {
        fetchCategoriesStart();
    }, [fetchCategoriesStart]);

    return (
        <Fragment>
            <h1>Categories</h1>
            <Paper>
                {!categories ? <Spinner /> :
                    (<Datatable headers={['Name']} rows={categories} />) }
            </Paper>
        </Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    categories: selectCategories
});

const mapDispatchToProps = dispatch => ({
    fetchCategoriesStart: () => dispatch(fetchCategoriesStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListPage);
