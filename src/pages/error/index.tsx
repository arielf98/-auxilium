import {Box} from '@mui/material'
import {useRouteError} from 'react-router-dom';

type notFoundTypes = {
        statusText: string,
        message: string,
}

export default function ErrorNotFound() {
    const error = useRouteError() as notFoundTypes
    
  return (
    <Box>
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
    </Box>
  )
}
