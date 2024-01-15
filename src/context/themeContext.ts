import { Dispatch, SetStateAction, createContext} from 'react';	

type ThmeContextType = {
    darkTheme : boolean;
    setDarkTheme : Dispatch<SetStateAction<boolean>>;
};
const ThemeContext = createContext<ThmeContextType>({
    darkTheme : false,
    setDarkTheme : () => {},
});

export default ThemeContext;