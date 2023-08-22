import {createSlice} from '@reduxjs/toolkit';


const globalState = {
    user: null,
    token: null,
    posts: [],
    allUsers: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState: globalState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setPreferences: (state, action) => {
            if(state.user) {
                state.user.preferences = action.payload.preferences
            } else {
                console.log("fdnodf")
            }
        },
        setLogout: (state, action) => {
            state.user = null;
            state.token = null; 
        },
        setConnections: (state, action) => {
            if (state.user) {
                state.user.connections = action.payload.connections;
            } else {
                console.error("connection doesn't exist")
            }
        },
        setListings: (state, action) => {
            if (state.user) {
                state.user.listings = action.payload.listings;
            } else {
                console.error("connection doesn't exist")
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts
        },
        setPost: (state, action) => {
            const updatedPost = state.posts.map((post) => {
                if (post._id === action.payload.post_id) return action.payload.post;
                return post;
            })
        },
        setUsers: (state, action) => {
            state.allUsers = action.payload.allUsers
        }
    }
})

export const {setLogin, setPreferences, setLogout, setConnections, setListings, setPosts, setPost, setUsers } = authSlice.actions;
export default authSlice.reducer;