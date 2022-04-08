import { FC } from 'react'
import {
  Wrapped
} from './styles'
import { SearchBar } from '../../components/index'

const Home: FC = () => {
  return (
    <Wrapped>
      <SearchBar />
    </Wrapped>
  )
}

export default Home
