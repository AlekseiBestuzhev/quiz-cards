import s from './query-loading.module.scss'

export const QueryLoading = () => {
  return (
    <div className={s.linearActivity}>
      <div className={s.indeterminate}></div>
    </div>
  )
}
