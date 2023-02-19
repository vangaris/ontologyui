import { createAsyncThunk } from "@reduxjs/toolkit";
import { getService } from "../../services/efoTerms.service";

export const getEfoTerms = createAsyncThunk<Array<any>, void>('efo/fetchTerms', async () => {
  const response = await getService()
  return response.data._embedded.terms;
});