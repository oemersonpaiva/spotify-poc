import { ReactComponent as LogoIcon } from 'assets/svgs/logo.svg'
import * as S from './Logo.styles'

const Logo = () => (
  <S.Wrapper href="/">
    <LogoIcon aria-label="Spotifood" /> Spotifood
  </S.Wrapper>
)

export default Logo
