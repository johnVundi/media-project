import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/thunkUsers";
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder){
        builder.addCase(fetchUsers.pending);
        builder.addCase(fetchUsers.fulfilled);
        builder.addCase(fetchUsers.rejected);
    }
});

export const usersReducer = usersSlice.reducer;

















