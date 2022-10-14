import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import customFetch from "../../utils/axios";
import { clearValues } from "./jobSlice";
import authHeader from "../../utils/authHeader";

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customFetch.post("/jobs", job, authHeader(thunkAPI));
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());

  try {
    const response = await customFetch.delete(`/jobs/${jobId}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(getAllJobs());
    return response.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const response = await customFetch.patch(`/jobs/${jobId}`, job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });

    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
