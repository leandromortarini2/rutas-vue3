import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
  next: NavigationGuardNext,
) => {
  // to - donde voy
  // from - desde donde viene
  // next - el siguiente paso
  const userId = localStorage.getItem('userID');

  if (!userId) {
    return next({ name: 'login' });
  }

  return next();
};

export default isAuthenticatedGuard;
