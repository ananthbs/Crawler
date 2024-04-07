import { createSlice } from '@reduxjs/toolkit';
import { getAllClientsData, startCrawling, deleteAllClient, deleteClient, updateClientData } from '../actions/home.action';

const initialState = {
    isScraping: false,
    isFetchingData: false,
    clientsData: [],
    isCrawling: false,
    crawlingStatus: {},
    deleteMessage: "",
    deleteAllMessage: "",
    updatedMessage: "",
    showLoader: false
  };

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setClientsData: (state, action) =>{
            state.clientsData = action.payload
        },
        setCrawlingStatus: (state, action) =>{
            state.crawlingStatus = action.payload;
        },
        deleteSuccessful: (state, action) => {
            state.deleteMessage = "data deleted"
        },
        deleteAllSuccessful: (state, action) => {
            state.deleteAllMessage = "Delected all data"
        },
        updatedClient: (state, action) =>{
            state.updatedMessage = "Data updated"
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(getAllClientsData.pending, (state) =>{
            state.isFetchingData = true;
        });
        builder.addCase(getAllClientsData.fulfilled, (state) =>{
            state.isFetchingData = false;
        });
        builder.addCase(startCrawling.pending, (state) =>{
            state.isCrawling = true;
            state.isFetchingData = true;
        });
        builder.addCase(startCrawling.fulfilled, (state) =>{
            state.isCrawling = false;
            state.isFetchingData = false;
        });

        builder.addCase(deleteAllClient.pending, (state) =>{
            state.isFetchingData = true;
        });
        builder.addCase(deleteAllClient.fulfilled, (state) =>{
            state.isFetchingData = false;
        });

        builder.addCase(deleteClient.pending, (state) =>{
            state.isFetchingData = true;
        });
        builder.addCase(deleteClient.fulfilled, (state) =>{
            state.isFetchingData = false;
        });

        builder.addCase(updateClientData.pending, (state) =>{
            state.isFetchingData = true;
        });
        builder.addCase(updateClientData.fulfilled, (state) =>{
            state.isFetchingData = false;
        });
        
    }
});

export const {setClientsData, deleteSuccessful, deleteAllSuccessful, setCrawlingStatus, updatedClient} = homeSlice.actions;

const homeReducer = homeSlice.reducer;

export default homeReducer;