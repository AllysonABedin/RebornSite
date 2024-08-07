import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";

export function getApi() {
  return axios.create({
    baseURL: "http://212.18.114.101:3001",
  });
}

export const AuthContext = createContext<any>(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [userScripts, setUserScripts] = useState<any>([]);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );

  const saveAccessToken = (token: string) => {
    if (!token) {
      localStorage.removeItem("access_token");
      window.location.href = "/";
    } else {
      localStorage.setItem("access_token", token);
    }
    setAccessToken(token);
  };

  const fetchUserScripts = useCallback(async () => {
    if (accessToken) {
      try {
        const api = getApi();
        const response = await api.get(`/scripts?token=${accessToken}`);
        console.log(response.data);
        setUserScripts(response.data);
      } catch (error) {
        saveAccessToken("");
        console.log(error);
      }
    } else {
      setUserScripts([]);
    }
  }, [accessToken]);

  useEffect(() => {
    fetchUserScripts();
  }, [fetchUserScripts]);

  return (
    <AuthContext.Provider
      value={{ accessToken, saveAccessToken, userScripts, setUserScripts }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
