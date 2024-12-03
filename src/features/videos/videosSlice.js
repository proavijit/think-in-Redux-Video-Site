import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosApi"


const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: ''
}

// async Thunk
export const featchVideos = createAsyncThunk('videos/featchVideos', async ({tags, search})=>{
   const videos = await getVideos(tags, search);
   return videos
})

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers:(builder) => {
    builder
    .addCase(featchVideos.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    })
    .addCase(featchVideos.fulfilled, (state,action ) => {
      state.isLoading = false
      state.videos = action.payload
    })
    .addCase(featchVideos.rejected, (state,action ) => {
      state.isLoading = false
      state.videos = [],
      state.isError = true,
      state.error = action.error?.message
    })
  }

})

export default videoSlice.reducer;
