import { Component } from 'solid-js'

interface ServerErrorProps {
  error: any
}

const ServerError: Component<ServerErrorProps> = (props: { error: any }) => {
  return (
    <>
      <div class="">
        <div class="">Server Error</div>

        <span>{props.error.message}</span>
      </div>
    </>
  )
}

export default ServerError
