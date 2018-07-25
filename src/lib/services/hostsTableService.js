import axios from 'axios';

async function hostsTableService(status = 'all', page = 1) {
    const response = await axios.get('http://192.168.20.175:9000/api/host/21', {
        page,
        status
    });
    return response.data.nodelist;
}

export { hostsTableService };
