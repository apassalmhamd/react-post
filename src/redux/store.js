
import {configureStore}from '@reduxjs/toolkit';
import posteSlice from './posteSlice'
export const store=configureStore({
    reducer:{
     posts:posteSlice
    },
})