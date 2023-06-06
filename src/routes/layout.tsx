import { component$, Slot } from "@builder.io/qwik";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";
import inkVideo from "src/assets/video/ink-test.mp4"

export default component$(() => {
  return (
    <>
      {/* <Header /> */}
      <div class="relative flex items-center justify-center overflow-hidden w-full " >
        <div class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-10 rounded-xl">
          Welcome to my site!
          <main class="w-screen">
            <Slot />
          </main>
          
        </div>
        <video
          autoplay
          loop
          muted
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src={inkVideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
});

