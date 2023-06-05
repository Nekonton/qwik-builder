import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";
import { Video } from "@builder.io/sdk-qwik";
import video1 from "src/assets/video/ink-test.mp4";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features />
      <FAQs />
      <Stats />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
