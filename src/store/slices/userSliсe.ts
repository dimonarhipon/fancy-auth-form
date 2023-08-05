import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmailType, TokenType } from '../../types/const';

export interface IUser {
	email: EmailType | null;
	token: TokenType | null;
	id: string | null;
}

const initialState: IUser = {
	email: null,
	token: null,
	id: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IUser>) {
			return action.payload;
		},
		logOutUser() {
			return initialState;
		},
	},
});

export const { setUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
