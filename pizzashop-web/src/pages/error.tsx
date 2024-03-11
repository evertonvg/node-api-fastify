import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, algo aconteceu....</h1>
      <p className="text-accent-foreground">Mais detalhes sobre o problema!</p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Vontar para o{' '}
        <Link to="/" className="text-sky-600 decoration-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
