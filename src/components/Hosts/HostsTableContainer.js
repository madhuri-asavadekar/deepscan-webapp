import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchHostsTable } from '../../state/reducers/hostsTableReducer';

import HostsTable from './HostsTable';

class HostsTableContainer extends Component {
    componentDidMount() {
        this.props.fetchHostsTable();
    }
    render() {
        return <HostsTable {...this.props} />;
    }
}

export const Unwrapped = HostsTableContainer;

export default connect(
    ({ host: { hosts, error } }, ownProps) => ({
        hosts,
        error
    }),
    { fetchHostsTable }
)(HostsTableContainer);
