import { component$, Slot } from "@builder.io/qwik";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";

export default component$(() => {
  return (
    <>
      {/* <Header /> */}
      <main class="-mt-24">
        <Slot />
      </main>
      <Footer />
      <div class="bg-fixed">
        <video
          autoplay
          loop
          muted
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
          <Footer />
        </video>
      </div>

      <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my site!
          <Footer />
        </div>
        <video
          autoplay
          loop
          muted
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>
      <div class="max-w-lg m-auto">
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat a magna non varius. Proin leo felis, euismod non porta eget,
          varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
          id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
          volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
          Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
        </p>
        <p class="mb-4">
          Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
          lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
          finibus magna massa non nunc. Phasellus massa quam, egestas a nisl
          sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus.
          Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat.
          Suspendisse semper dignissim sem viverra semper. Nulla porttitor,
          purus nec accumsan pharetra, nisi dolor condimentum ipsum, id
          consequat nulla nunc in ligula.
        </p>
        <p class="mb-12">
          Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
          porta dignissim hendrerit. Cras id velit varius, fermentum lectus
          vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam
          vulputate imperdiet fringilla. Donec blandit libero massa. Suspendisse
          dictum diam mauris, vitae fermentum dolor tincidunt in. Pellentesque
          sollicitudin venenatis dolor, vitae scelerisque elit ultrices eu.
          Donec eget sodales risus, quis dignissim neque.
        </p>
      </div>
    </>
  );
});
