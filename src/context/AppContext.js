import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';
const AppContext = createContext(null);
const SAVED_KEY = '@trailhead/saved-trails';
export function AppProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedIds, setSavedIds] = useState([]);
  useEffect(() => { (async () => { const value = await AsyncStorage.getItem(SAVED_KEY); if (value) setSavedIds(JSON.parse(value)); setReady(true); })(); }, []);
  const toggleSaved = (id) => setSavedIds((previous) => { const next = previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id]; AsyncStorage.setItem(SAVED_KEY, JSON.stringify(next)); return next; });
  return <AppContext.Provider value={{ ready, loggedIn, setLoggedIn, savedIds, toggleSaved }}>{children}</AppContext.Provider>;
}
export const useApp = () => useContext(AppContext);
