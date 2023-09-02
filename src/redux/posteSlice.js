import {createSlice}from '@reduxjs/toolkit'

export const posteSlice=createSlice({
    name:'posts',
    initialState:{
        items:[],
    },
    reducers:{
    addpost: function(state, action){
    state.items.push(action.payload);
    },
        deletepost:function(state,action){
            state.items=state.items.filter(item =>item.id != action.payload)
        },
        updatepost:function(state,action){
            state.items.map(item => {
                if(item.id == action.payload.id){
                    item.title=action.payload.title;
                    item.description=action.payload.description;
                }
            })
        }
    }
})

export const {addpost , deletepost , updatepost} = posteSlice.actions
export default posteSlice.reducer