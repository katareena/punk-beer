import { useGlobalContext } from './use-context';
import { AppRoute } from '../constants/constants';

export default function usePath() {
  const { isSearchActive } = useGlobalContext();
  const path = isSearchActive ? AppRoute.Results : AppRoute.Root;

  return path;
}
