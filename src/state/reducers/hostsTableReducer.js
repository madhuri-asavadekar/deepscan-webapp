import { hostsTableService } from '../../lib/services/hostsTableService';

const initialState = {
    hosts: [],
    error: {}
};

const LOAD_HOSTS_TABLE = 'LOAD_HOSTS_TABLE';
const HAS_ERROR = 'HAS_ERROR';

const loadHostsTable = hosts => ({
    type: LOAD_HOSTS_TABLE,
    payload: hosts
});

const hasError = error => ({
    type: HAS_ERROR,
    payload: error
});

const fetchHostsTable = () => {
    return async dispatch => {
        try {
            const response = await hostsTableService();
            dispatch(loadHostsTable(response));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
};

const hostsTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_HOSTS_TABLE:
            return {
                ...state,
                hosts: action.payload
            };
        case HAS_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export { fetchHostsTable, LOAD_HOSTS_TABLE, HAS_ERROR };

export default hostsTableReducer;
