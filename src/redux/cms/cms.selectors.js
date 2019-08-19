import { createSelector } from 'reselect';

const selectCms = state => state.cms;

export const selectCmsSidebarOpen = createSelector(
    [selectCms],
    cms => cms.sidebarOpen
);
