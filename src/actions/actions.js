export const updateDataSuccess = (data) => {
    return {
        type: 'UPDATE_DATA',
        data: data
    }
}

export function updateData() {
    return (dispatch) => {
        const socket = io.connect("http://45.55.221.240");
        if(io) {
            socket.on('times', (data) => {
                return dispatch(updateDataSuccess(data));
            });
        }
    }
};