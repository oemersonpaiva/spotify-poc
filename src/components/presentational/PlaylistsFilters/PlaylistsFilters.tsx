import { PlaylistFilter } from 'types/playlist'
import * as S from './PlaylistsFilters.styles'

export type PlaylistsFiltersProps = {
  filters: PlaylistFilter[]
}

const test = {
  STRING: 'text',
  INTEGER: 'number'
}

const PlaylistsFilters = ({ filters }: PlaylistsFiltersProps) => (
  <S.Wrapper>
    {filters.map(({ id, name, values, validation }) => (
      <div key={id}>
        {name}
        {!!values && (
          <select id={id} name={name}>
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
            type={test[validation.primitiveType]}
            min={validation.min}
            max={validation.max}
            id={id}
            name={id}
            placeholder={name}
          />
        )}
      </div>
    ))}
  </S.Wrapper>
)

export default PlaylistsFilters
