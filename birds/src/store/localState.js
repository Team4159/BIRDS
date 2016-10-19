export const saveState = (state) => {
    try {
        const stringifiedState = JSON.stringify({
            auth: {
                ...state.auth,
                status: {}
            },
            user: state.user
        });
        localStorage.setItem("state", stringifiedState);
    } catch (e) {
        console.error(e);
    }
};

export const loadState = () => {
    try {
        const stringifiedState = localStorage.getItem("state");
        const state = JSON.parse(stringifiedState);
        return state;
    } catch (e) {
        console.error(e);
        return null;
    }
};
