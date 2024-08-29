import { AuthInfo } from "./types";

export const loginFunction = (email: AuthInfo["email"]) => {
  const authId = email.replace("@", "").replace(".", "").codePointAt(0);
  localStorage.setItem("auth", JSON.stringify({ email, authId }));
  return location.replace(`/dashboard/${authId}/`);
};

export const logoutFunction = () => {
  localStorage.removeItem("auth");
  return location.replace("/");
};

export const checkIsAuthenticated = () => {
  const auth = localStorage.getItem("auth");
  if (!auth) return { authInfo: undefined, isAuthenticated: false };
  const authObj: AuthInfo = JSON.parse(auth);
  if (!location.pathname.includes(authObj.authId.toString()))
    return { authInfo: undefined, isAuthenticated: false };
  return { authInfo: authObj, isAuthenticated: false };
};

export const editAuthInfo = (data: AuthInfo) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (!location.pathname.includes(auth.authId.toString())) {
    alert("Você não tem permissão para editar este usuário");
    return logoutFunction();
  }
  localStorage.setItem("auth", JSON.stringify(data));
  alert("Usuário editado com sucesso!");
  return;
};
