import Avatar from 'components/structure/Avatar'
import Logo from 'components/structure/Logo'
import * as S from './Navbar.styles'

export type NavbarProps = {
  username: string
  avatarUrl: string
}

const Navbar = ({ username, avatarUrl }: NavbarProps) => (
  <S.Wrapper>
    <Logo />
    <Avatar src={avatarUrl} alt={username} />
  </S.Wrapper>
)

export default Navbar
