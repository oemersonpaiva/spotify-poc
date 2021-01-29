import { ReactComponent as LogoIcon } from 'assets/svgs/logo.svg'
import * as S from './Logo.styles'

const Logo = () => (
  <S.Wrapper href="/">
    <LogoIcon aria-label="Spotify POC" /> Spotify POC
  </S.Wrapper>
)

export default Logo
