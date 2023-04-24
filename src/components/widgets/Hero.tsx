import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import {
  getContent,
  RegisteredComponent,
  RenderContent,
} from '@builder.io/sdk-qwik';
// TODO: add back when builder supports avif
// import srcsetAvif from '~/assets/images/hero.jpg?w=400;900&avif&srcset';
// @ts-ignore
import srcsetWebp from '~/assets/images/hero.jpg?w=400;900&webp&srcset';
// @ts-ignore
import { src as placeholder } from '~/assets/images/hero.jpg?width=400&metadata';
import { SITE } from '~/config.mjs';

export const apiKey = process.env.BUILDER_PUBLIC_API_KEY as string;

// let heroSrcsetAvif: string = srcsetAvif;
let heroSrcsetWebp: string = srcsetWebp;

interface HeroProps {
  title1: string;
  title2: string;
  title3: string;
  cta1Text: string;
  cta1Link: string;
}

export const Hero = component$((props: HeroProps) => {
  return (
    <section
      class={`bg-gradient-to-b md:bg-gradient-to-r from-white via-purple-50 to-sky-100 dark:bg-none`}
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 md:flex md:h-screen 2xl:h-auto pt-[72px]">
        <div class="py-12 md:py-12 lg:py-16 block md:flex text-center md:text-left">
          <div class="pb-12 md:pb-0 md:py-0 mx-auto md:pr-16 flex items-center basis-3/5">
            <div>
              <h1 class="text-5xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                {props.title1}
                <br class="hidden lg:block" />{' '}
                <span class="hidden lg:inline">{props.title2} </span>{' '}
                <span dangerouslySetInnerHTML={props.title3} />
              </h1>
              <div class="max-w-3xl mx-auto">
                <p class="text-xl text-gray-600 mb-8 dark:text-slate-400">
                  <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                    {SITE.name}
                  </span>{' '}
                  is a production ready starter template for building websites
                  using <em>Qwik</em> + <em>Builder.io</em>. It has been
                  designed following Best Practices, SEO, Accessibility,{' '}
                  <span class="inline md:hidden">...</span>
                  <span class="hidden md:inline">
                    Dark Mode, Great Page Speed, image optimization, sitemap
                    generation and more.
                  </span>
                </p>
                <div class="max-w-xs sm:max-w-md flex flex-nowrap flex-col sm:flex-row gap-4 m-auto md:m-0 justify-center md:justify-start">
                  <div class="flex w-full sm:w-auto">
                    <a
                      class="btn btn-primary sm:mb-0 w-full"
                      href={props.cta1Link}
                      target="_blank"
                      rel="noopener"
                    >
                      {props.cta1Text}
                    </a>
                  </div>
                  <div class="flex w-full sm:w-auto">
                    <button class="btn w-full bg-gray-50 dark:bg-transparent">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="block md:flex items-center flex-1">
            <div class="relative m-auto max-w-4xl md:max-w-sm">
              <picture>
                {/* <source srcSet={heroSrcsetAvif} type="image/avif" /> */}
                <source srcSet={heroSrcsetWebp} type="image/webp" />
                <img
                  src={placeholder}
                  width={1000}
                  height={1250}
                  class="mx-auto w-full rounded-md md:h-full drop-shadow-2xl bg-gray-400 dark:bg-slate-700"
                  alt="QwikBuilder Hero Image (Cool dog)"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Hero,
    name: 'Hero',
    noWrap: true,
    hideFromInsertMenu: false,
    inputs: [
      {
        name: 'title1',
        type: 'string',
        defaultValue: 'Starter template for',
      },
      {
        name: 'title2',
        type: 'string',
        defaultValue: 'building websites with',
      },
      {
        name: 'title3',
        type: 'richText',
        defaultValue: `<span class="text-[#039de1]">Qwik</span> +
        <span class="sm:whitespace-nowrap text-[#039de1]">
          Builder.io
        </span>`,
      },
      {
        name: 'cta1Text',
        type: 'string',
        defaultValue: 'Get template',
      },
      {
        name: 'cta1Link',
        type: 'url',
        defaultValue: 'https://github.com/callit-today/qwik-builder',
      },
    ],
  },
];

export default component$(() => {
  const { url } = useLocation();

  const builderContent = useResource$(() =>
    getContent({
      model: 'homepage',
      apiKey: apiKey,
      userAttributes: { urlPath: url.pathname },
    })
  );

  return (
    <div>
      <Resource
        value={builderContent}
        onPending={() => <>Loading...</>}
        onRejected={(error) => <>Error: {error.message}</>}
        onResolved={(content) => {
          const heroImage =
            // @ts-ignore
            content?.data?.inputs[0]?.defaultValue?.split('?')[0];
          if (heroImage) {
            // heroSrcsetAvif = heroImage + '?format=avif&w=400;900&avif&srcset';
            heroSrcsetWebp = heroImage + '?format=webp&w=400;900&webp&srcset';
          }
          return (
            <RenderContent
              model="homepage"
              content={content}
              apiKey={apiKey}
              customComponents={CUSTOM_COMPONENTS}
            />
          );
        }}
      />
    </div>
  );
});
