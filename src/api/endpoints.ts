import axios from 'axios'

//this will break on redeploy as its not static
const baseURL = 'https://vvl28sm0ri.execute-api.ap-southeast-2.amazonaws.com/Prod/'

const handleError = (fn : any) => (...params: any) =>
  fn(...params).catch((error: { response: { status: any; statusText: any } }) => {
    console.error(
      `${error.response.status}: ${error.response.statusText}`,
      'error'
    )
  })

export const api = {
  getData: handleError(async (id: string) => {
    const res = await axios.get(baseURL + id)
    return res.data
  }),
  getAllData: handleError(async () => {
    const res = await axios.get(baseURL)
    return res.data
  }),
  deleteData: handleError(async (id: string) => {
    const res = await axios.delete(baseURL + id)
    return res.data
  }),
  createData: handleError(async (payload: any) => {
    const res = await axios.post(baseURL, payload)
    return res.data
  }),
  updateData: handleError(async (payload: { _id: string }) => {
    const res = await axios.put(baseURL + payload._id, payload)
    return res.data
  }),
}
