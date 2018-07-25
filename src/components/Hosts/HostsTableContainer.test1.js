import React from 'react';
import { shallow } from 'enzyme';
import HostsTableContainer from './HostsTableContainer';
import HostsTable from './HostsTable';

describe('HostsTableContainer Component', () => {
    it('should render without throwing an error', () => {
        const wrapper = shallow(<HostsTableContainer />);
        expect(wrapper.contains(HostsTable)).exists().toBe(true);
	});
});
