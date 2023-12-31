import clsx from 'clsx'

export function Container({ as, className, children }) {
  let Component = as ?? 'div'

  return (
    <Component className={clsx('mx-auto container px-8 lg:px-8', className)}>
      <div className="mx-auto ">{children}</div>
    </Component>
  )
}
