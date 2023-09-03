import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

const Root: FC<ComponentPropsWithoutRef<'table'>> = ({ className, ...rest }) => {
  const classes = clsx(s.root, className)

  return <table className={classes} {...rest} />
}

const Head: FC<ComponentPropsWithoutRef<'thead'>> = ({ className, ...rest }) => {
  const classes = clsx(s.head, className)

  return <thead className={classes} {...rest} />
}

const HeadCell: FC<ComponentPropsWithoutRef<'th'>> = ({ className, ...rest }) => {
  const classes = clsx(s.headCell, className)

  return <th className={classes} {...rest} />
}

const Body: FC<ComponentPropsWithoutRef<'tbody'>> = ({ className, ...rest }) => {
  const classes = clsx(s.body, className)

  return <tbody className={classes} {...rest} />
}

const Row: FC<ComponentPropsWithoutRef<'tr'>> = ({ className, ...rest }) => {
  const classes = clsx(s.row, className)

  return <tr className={classes} {...rest} />
}

const Cell: FC<ComponentPropsWithoutRef<'td'>> = ({ className, ...rest }) => {
  const classes = clsx(s.cell, className)

  return <td className={classes} {...rest} />
}

const Empty: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => {
  const classes = clsx(s.empty, className)

  return <div className={classes} {...rest} />
}

export const Table = { Root, Head, HeadCell, Body, Row, Cell, Empty }
