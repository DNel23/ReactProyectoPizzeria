import { createContext, useState } from "react";
export const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({name: 'Nelson Donoso',email: 'nelsondonoso@gmail.com'});
    const [token, setToken] = useState(true)
    
    const logout = () => {
        setUser(null)
        setToken(false)
    }

    return (
        <UserContext.Provider value={{ user, token, logout }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;