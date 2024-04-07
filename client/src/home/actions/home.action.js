import { createAsyncThunk } from '@reduxjs/toolkit';
import { homeService } from "../../api/home.service";
import {deleteSuccessful, deleteAllSuccessful, setClientsData, setCrawlingStatus, updatedClient } from '../reducers/home.slice';

export const getAllClientsData = createAsyncThunk('/getClients', async (_, { dispatch }) => {
    const resp = await homeService.getAllClientsData();
    if (resp.success) dispatch(setClientsData(resp.data));
  });

export const startCrawling = createAsyncThunk('/scrape', async ( size, { dispatch }) => {
    const resp = await homeService.scrape(size);
    if (resp) dispatch(setCrawlingStatus(resp));
  });

export const deleteClient = createAsyncThunk('/clients/delete', async ( id, { dispatch }) => {
  const resp = await homeService.deleteClient(id);
  if (resp.success){
    dispatch(getAllClientsData());
    dispatch(deleteSuccessful(resp.message));
  }
});

export const deleteAllClient = createAsyncThunk('/clients/clearData', async ( _, { dispatch }) => {
  const resp = await homeService.deleteAllClient();
  if (resp.success){
    dispatch(getAllClientsData());
    dispatch(deleteAllSuccessful(resp.message));
  } 
});

export const queryClientData = createAsyncThunk('/clients?q=', async ( query, { dispatch }) => {
  const resp = await homeService.queryClientData(query);
  if (resp.success){
    dispatch(setClientsData(resp.data));
  }
});

export const getClientById = createAsyncThunk('/getClientsbyId', async ( id, { dispatch }) => {
  const resp = await homeService.getClientByID(id);
  if (resp.success) dispatch(setClientsData(resp.data));
});

export const updateClientData = createAsyncThunk('/update/:id', async ( req, { dispatch }) => {
  const resp = await homeService.updateClient(req, req.id);
  if (resp.success){
    dispatch(getAllClientsData());
    dispatch(updatedClient())
  }
});