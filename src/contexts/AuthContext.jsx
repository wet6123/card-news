import React from "react";

export const AuthContext = React.createContext({
  isLoading: true, // 인증 상태 로딩 여부
  isLoggedIn: false, // 로그인 여부
});
