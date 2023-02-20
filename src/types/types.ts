export type ChartData = {
  x: number;
  y: number;
}


export type InitialStateTypes = {
  terms: Array<any>,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
  rowsPerPage: number
  page: number
  chartData:any
  isModalOpen: boolean
  size: number
}


