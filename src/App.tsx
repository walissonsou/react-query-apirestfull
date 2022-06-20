import axios from 'axios'
import { useQuery} from 'react-query'

type Repository = {
  full_name: string;
  description: string;
}
function App() {
const { data, isFetching} = useQuery<Repository[]>('repos',  async () => {
  const response = await axios.get('https://api.github.com/users/walissonsou/repos')

  return response.data;
})

  return (   
   <ul>
    { isFetching && <p> Carregando ...</p>}
    {data?.map(repos => {
      return (
        <li key={repos.full_name}>
          <strong> {repos.full_name}</strong>
          <p>{repos.description}</p>
        </li>
      )
    })}
   </ul>
  )
}

export default App
