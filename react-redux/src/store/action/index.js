import http from "@/utils/http.js"

const listAction = () => {
  return (dispatch) => {
    http.post('/products').then(res => {
      dispatch({ type: 'LIST', payload: res.data })
    })
  }
}

export { listAction }