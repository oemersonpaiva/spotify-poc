import { Button } from 'components/structure'
import * as S from './Pagination.styles'

export type PaginationProps = {
  handleClickPrevious: () => void
  handleClickNext: () => void
  disablePrevious?: boolean
  disableNext?: boolean
}

const Pagination = ({
  handleClickPrevious,
  handleClickNext,
  disablePrevious = false,
  disableNext = false
}: PaginationProps) => (
  <S.Wrapper>
    <Button onClick={handleClickPrevious} disabled={disablePrevious}>
      Anterior
    </Button>
    <Button onClick={handleClickNext} disabled={disableNext}>
      Próxima
    </Button>
  </S.Wrapper>
)

export default Pagination
