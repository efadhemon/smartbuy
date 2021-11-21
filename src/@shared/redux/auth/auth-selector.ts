import { createSelector } from "reselect";
const selectAuthSlice = (state: any) => state.auth;

export const selectJwtToken = createSelector(
	[selectAuthSlice],
	(edge: any) => edge.jwtToken
);
