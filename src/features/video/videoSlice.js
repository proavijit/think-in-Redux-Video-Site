import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideo } from "./videoAPI"



const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: ''
}


export const fachingVideo = createAsyncThunk('video/fachingVideo', async (id)=>{
 const video = await getVideo(id)
 return video
})


const videoSlice = createSlice({
  name: 'video',
  initialState,
  extraReducers: (builder)=>{
    builder
    .addCase(fachingVideo.pending, (state)=>{
      state.isError = false
      state.isLoading = true
    })
    .addCase(fachingVideo.fulfilled, (state, action)=>{
      state.isLoading = false,
      state.video = action.payload
    })
    .addCase(fachingVideo.rejected, (state, action)=>{
      state.isLoading = false,
      state.isError = true,
      state.video = {}
      state.error = action.error.message
    })
  }
})

export default videoSlice.reducer