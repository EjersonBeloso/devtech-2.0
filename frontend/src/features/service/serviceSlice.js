import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import serviceService from "./serviceService";

const initialState = {
	services: [],
	isError: false,
	isSucces: false,
	isLoading: false,
	message: "",
};

//Create service
export const createService = createAsyncThunk(
	"services/create",
	async (serviceData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await serviceService.createService(serviceData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);
//Get service
export const getService = createAsyncThunk(
	"services/get",
	async (_, thunkAPI) => {
		try {
			// const token = thunkAPI.getState().auth.user.token;
			return await serviceService.getService();
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);
//Get service
export const getServiceById = createAsyncThunk(
	"service/getId",
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await serviceService.getServiceById(id);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

//Edit Service
export const editService = createAsyncThunk(
	"services/edit",
	async (id, serviceData) => {
		try {
			// const token = thunkAPI.getState().auth.user.token;
			return await serviceService.editService(id, serviceData);
		} catch (error) {
			(error.response && error.response.data && error.response.data.message) ||
				error.message ||
				error.toString();
		}
	}
);

// Delete Service
export const deleteService = createAsyncThunk(
	"services/delete",
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await serviceService.deleteService(id, token);
		} catch (error) {
			(error.response && error.response.data && error.response.data.message) ||
				error.message ||
				error.toString();
		}
	}
);

export const serviceSlice = createSlice({
	name: "service",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createService.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createService.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSucces = true;
				state.services.push(action.payload);
			})
			.addCase(createService.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getService.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getService.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSucces = true;
				state.services = action.payload;
			})
			.addCase(getService.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteService.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteService.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.services = state.services.filter(
					(service) => service._id != action.payload.id
				);
			})
			.addCase(deleteService.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getServiceById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getServiceById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSucces = true;
				state.services = action.payload;
			})
			.addCase(getServiceById.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(editService.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(editService.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSucces = true;
				state.services = action.payload;
				console.log(action.payload);
			})
			.addCase(editService.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				console.log(action.payload);
			});
	},
});

export const { reset } = serviceSlice.actions;
export default serviceSlice.reducer;
