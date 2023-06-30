import { Handlers, PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import { useContext } from "preact/hooks";
import { Head } from "$fresh/runtime.ts";

import { StateContext } from "../contexts/StateContext.tsx";

type HomeProps = {
  myContextValue: string;
}

export const handler: Handlers = {
  async GET(_req, ctx) {
    const myContextValue = useContext(StateContext);
    return await ctx.render({ myContextValue });
  },
};

export default function Home({ data }: PageProps<HomeProps>) {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          {`My context value --> ${data.myContextValue}`}
        </p>
      </div>
    </>
  );
}
