import { InputHTMLAttributes } from 'react'
import { ReactComponent as IcSearch } from 'assets/svgs/icons/search.svg'
import * as S from './SearchField.styles'

type SearchFieldTypes = InputHTMLAttributes<HTMLInputElement>

export type SearchFieldProps = {
  register?: () => void
} & SearchFieldTypes

const SearchField = ({ register, ...props }: SearchFieldProps) => (
  <S.Wrapper {...props}>
    <S.Input ref={register} {...props} />
    <S.IconWrapper>
      <IcSearch />
    </S.IconWrapper>
  </S.Wrapper>
)

export default SearchField
