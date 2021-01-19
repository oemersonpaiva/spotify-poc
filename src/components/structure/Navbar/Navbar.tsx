import { Avatar, Logo } from 'components/structure'
import * as S from './Navbar.styles'

export type NavbarProps = {
  username: string
  avatarUrl: string
}

const Navbar = ({ username, avatarUrl }: NavbarProps) => (
  <S.Wrapper>
    <S.Container>
      <Logo />
      <Avatar src={avatarUrl} alt={username} />
    </S.Container>
  </S.Wrapper>
)

export default Navbar
