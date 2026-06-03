import {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {

    try {

      const storedUser =
        localStorage.getItem("eduspark_user");

      return storedUser
        ? JSON.parse(storedUser)
        : null;

    } catch {

      return null;
    }
  });

  // Login
  const login = (userData) => {

    localStorage.setItem(
      "eduspark_token",
      userData.token
    );

    localStorage.setItem(
      "eduspark_user",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  // Logout
  const logout = () => {

    localStorage.removeItem(
      "eduspark_token"
    );

    localStorage.removeItem(
      "eduspark_user"
    );

    setUser(null);
  };

  return (

    <AuthContext.Provider
      value={{

        user,

        login,

        logout,

        isAuthenticated: !!user,

        isAdmin:
          user?.role === "ADMIN",
      }}
    >

      {children}

    </AuthContext.Provider>
  );
}

// Custom Hook
export function useAuth() {

  const context =
    useContext(AuthContext);

  if (!context) {

    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}