import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedVideos } from "./relatedVideosAPI"




const initialState = {
  relatedVideos: {},
  isLoading: false,
  isError: false,
  error: ''
}


export const fatchRelatedVideos = createAsyncThunk('relatedVideos/fatchRelatedVideos', async (tags,id)=>{
 const relatedVideos = await getRelatedVideos(tags,id)
 return relatedVideos;
})


const relatedVideosSlice = createSlice({
  name: 'relatedVideos',
  initialState,
  extraReducers: (builder)=>{
    builder
    .addCase(fatchRelatedVideos.pending, (state)=>{
      state.isError = false
      state.isLoading = true
    })
    .addCase(fatchRelatedVideos.fulfilled, (state, action)=>{
      state.isLoading = false,
      state.relatedVideos = action.payload
    })
    .addCase(fatchRelatedVideos.rejected, (state, action)=>{
      state.isLoading = false,
      state.isError = true,
      state.relatedVideos = {}
      state.error = action.error.message
    })
  }
})

export default relatedVideosSlice.reducer