import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

const getSizeClasses = (size) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5'
    }
    case 'large': {
      return 'px-6 py-3'
    }
    default: {
      return 'px-5 py-2.5'
    }
  }
}

const getModeClasses = (isPrimary) =>
  isPrimary
    ? 'text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700'
    : 'text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white'

const BASE_BUTTON_CLASSES = 'cursor-pointer rounded-full border-2 font-bold leading-none inline-block'

export const Button = ({ primary = false, size = 'medium', label, ...props }) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary)
    const sizeClass = getSizeClasses(size)

    return [modeClass, sizeClass].join(' ')
  }, [primary, size])

  return (
    <button type='button' className={`${BASE_BUTTON_CLASSES} ${computedClasses}`} {...props}>
      {label}
    </button>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
}
