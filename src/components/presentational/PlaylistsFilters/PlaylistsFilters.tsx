import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { PlaylistsActions, PlaylistsState } from 'store/playlists'
import { RootState } from 'store/reducers'
import { PlaylistFilter, PlaylistParams } from 'types/playlist'
import * as S from './PlaylistsFilters.styles'

export type PlaylistsFiltersProps = {
  filters: PlaylistFilter[]
}

// const test = {
//   STRING: 'text',
//   INTEGER: 'number'
// }

// TODO add form submit validations
const PlaylistsFilters = ({ filters }: PlaylistsFiltersProps) => {
  const dispatch = useDispatch()
  const { limit, offset }: PlaylistsState = useSelector(
    ({ playlists }: RootState) => playlists
  )
  const { register, handleSubmit, getValues, reset } = useForm<PlaylistParams>()

  const onSubmit = (data: PlaylistParams) =>
    dispatch(PlaylistsActions.fetchPlaylists(data))

  const handleOnChange = () =>
    dispatch(PlaylistsActions.fetchPlaylists(getValues()))

  useEffect(() => {
    reset({ limit })
    // console.log(Math.max(1, (offset - 1) * limit))
  }, [limit, offset, reset])

  return (
    <S.Wrapper as="form" onSubmit={handleSubmit(onSubmit)}>
      {filters.map(({ id, name, values, validation }) => (
        <div key={id}>
          {name}
          {!!values && (
            <select ref={register} id={id} name={id} onChange={handleOnChange}>
              <option value="">Selecione</option>
              {values.map(({ name, value }) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </select>
          )}
          {!!validation && (
            <input
              ref={register}
              type="text"
              // min={validation.min}
              // max={validation.max}
              id={id}
              name={id}
              placeholder={name}
            />
          )}
        </div>
      ))}
      <input type="submit" style={{ position: 'absolute', left: '-9999px' }} />
    </S.Wrapper>
  )
}

export default PlaylistsFilters
