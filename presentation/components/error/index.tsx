import { FC } from 'react'
import { Error } from '../../pages/home/index'
import {
  Wrapped,
  Message
} from './styles'

interface Props {
  error: Error
}

const WrappedError = ({ message }: { message: string }) => (
  <Wrapped>
    <Message>
      { message }
    </Message>
  </Wrapped>
)

const ErrorComponent: FC<Props> = ({ error }) => (
  <>
    {
      error.visible
        ? <WrappedError message={error.message} />
        : null
    }
  </>
)

export default ErrorComponent
