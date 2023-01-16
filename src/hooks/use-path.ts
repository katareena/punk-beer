import { useGlobalContext } from './use-context';
import { AppRoute } from '../constants/constants';

export default function usePath() {
  const { isSearchActive, currentPage } = useGlobalContext();
  const path = isSearchActive ? `/results/${currentPage}` : AppRoute.Root;

  return path;
}
