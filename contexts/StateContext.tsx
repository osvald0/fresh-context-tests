import { ComponentChildren, createContext } from "preact";

type ProviderProps = {
    children: ComponentChildren
};

export const StateContext = createContext("");

export default function StateContextProvider({ children }: ProviderProps) {
    return (
        <StateContext.Provider value={"Default Context Value"}>\
            {children}
        </StateContext.Provider>
    );
}
