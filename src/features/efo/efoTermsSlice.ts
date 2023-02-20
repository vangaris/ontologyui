import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getEfoTerms } from './actions'
import {  InitialStateTypes } from '../../types/types'
import { groupedChartDataData, setTermDataToWordsCount } from './utils'

export const initialState: InitialStateTypes = {
  terms: [],
  status: 'idle',
  error: null,
  rowsPerPage: 5,
  page: 0,
  chartData: [],
  isModalOpen: false,
  size: 20
}

const efoTermsSlice = createSlice({
  name: 'terms',
  initialState,
  reducers: {
     setRowsPerPage: (state, action: PayloadAction<number>) => {
      state.rowsPerPage = action.payload
    },
     setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
      setModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getEfoTerms.pending, state => {
      state.status = 'idle'
    })
    builder.addCase(
      getEfoTerms.fulfilled,
      (state, action: PayloadAction<InitialStateTypes[]>) => {
        state.status = 'succeeded'
          state.terms = action.payload 
          state.chartData = groupedChartDataData(setTermDataToWordsCount(action.payload)) 
      }
    )
    builder.addCase(getEfoTerms.rejected, (state, action) => {
      state.status = 'failed'
      state.terms = []
      state.error = action.error.message || 'Something went wrong'
    })
  }
})

export default efoTermsSlice.reducer
export const { setRowsPerPage, setPage, setModal} = efoTermsSlice.actions