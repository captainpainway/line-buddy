export const updateDataSuccess = (data) => {
    return {
        type: 'UPDATE_DATA',
        data: data
    }
}

export function updateData() {
    return (dispatch) => {
        const socket = io.connect('http://192.168.1.105:3000');
        if(io) {
            socket.on('times', (data) => {
                return dispatch(updateDataSuccess(data));
            });
        }
    }
};