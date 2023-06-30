import { AppProps } from "$fresh/server.ts";

import StateContextProvider from "../contexts/StateContext.tsx";


export default function App({ Component, url }: AppProps) {
  return (
    <StateContextProvider>
      <Component />
    </StateContextProvider>
    // <div className="flex flex-row">
    // </div>
  )
}
