import Image from 'next/image'
import { FC } from 'react'
import {
  Wrapped,
  Bar,
  Button,
  IconPlus
} from './styles'
import PlusSvg from '../../assets/plus-icon.svg'
const SearchBar: FC = () => {
  return (
    <Wrapped>
      <Bar
       placeholder="Todo list"
       type="search"
       />
       <Button>
         <IconPlus>
          <Image src={PlusSvg} />
         </IconPlus>
       </Button>
    </Wrapped>
  )
}

export default SearchBar
