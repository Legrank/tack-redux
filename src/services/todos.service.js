import httpService from './http.service'
const todosEndepoint = 'todos/'
const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndepoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    })
    return data
  },
  create: async (newTask) => {
    const { data } = await httpService.post(
      todosEndepoint,
      JSON.stringify(newTask),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
    return data
  },
}
export default todosService
