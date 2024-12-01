import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Vin Logo"
      width={193*2/3}
      height={34*2/3}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-[34*2/3px]', className)}
      src="https://raw.githubusercontent.com/Vinncz/Vinncz/7b67233eb8d19d3231d741689133b53eda5e010b/vin-logo-light.svg"
    />
  )
}
