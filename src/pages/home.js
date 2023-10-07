import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const HomePage = () => {
  const { isLoggedIn } = useAuth();
  return <>{isLoggedIn ? <UserMenu /> : <AuthNav />}</>;
};
