import React from 'react';
import { shallow } from 'enzyme';
import HostsTable from './HostsTable';
import HostsTableContainer, { Unwrapped } from './HostsTableContainer';
import data from '../../../nodeList.json';

test('HostsTableContainer renders correctly', () => {
    const component = shallow(
        <Unwrapped hosts={data} error={{}} fetchHostsTable={() => {}} >
    );
    expect(component).toMatchSnapshot();
});
