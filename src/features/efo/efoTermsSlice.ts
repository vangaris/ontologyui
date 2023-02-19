import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getEfoTerms } from './actions'
import { ChartData } from '../../types/types'



type InitialStateTypes = {
 terms: Array<any>,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
    rowsPerPage: number
    page: number
    chartData:any
  isModalOpen: boolean
}

const initialState: InitialStateTypes = {
    terms: [],
    status: 'idle',
    error: null,
    rowsPerPage: 5,
    page: 0,
  chartData: [],
  isModalOpen: false

}




    const setTermDataToWordsCount = (efoTerms:Array<any>) => efoTerms.map((term) => {
      const wordCount = term.label.split(" ").length;
      return { x: wordCount, y: 1 };
    });

        const groupedChartDataData = (data: ChartData[]) => data.reduce((acc, curr) => {
      const found = acc.find((el) => el.x === curr.x);
      if (found) {
        found.y += curr.y;
      } else {
        acc.push(curr);
      }
      return acc;
    }, [] as ChartData[]);

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