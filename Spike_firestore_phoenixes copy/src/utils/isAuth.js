const isAuth = (user) => {
  const isLogged = user !== null ? true : false;

  return isLogged;
};

export { isAuth };
