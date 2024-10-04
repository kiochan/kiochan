import { Button, Link } from '@nextui-org/react'

export interface SingleMessageContentProps {
  title: string
  description?: string
  actionName?: string
  routeTo?: string
}

export function SingleMessageContent(props: SingleMessageContentProps) {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold mb-2'>{props.title}</h1>
      {props.description ? <p className='mb-4'>{props.description}</p> : null}
      <Link href={props.routeTo ?? '/'} className='px-4 py-2'>
        <Button color='primary'>{props.actionName ?? 'Return Home'}</Button>
      </Link>
    </div>
  )
}
