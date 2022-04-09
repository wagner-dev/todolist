import { FC } from 'react'
import {
  Wrapped,
  Title
} from './styles'
import { SearchBar } from '../../components/index'

const Home: FC = () => {
  return (
    <Wrapped>
      <Title>
        <h1>Todolist</h1>
      </Title>
      <SearchBar />
    </Wrapped>
  )
}

export default Home
