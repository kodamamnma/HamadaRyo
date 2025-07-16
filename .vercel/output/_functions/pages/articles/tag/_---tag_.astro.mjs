/* empty css                                       */
import { a as createAstro, c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_DrjHWHeI.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_CAH-QHI_.mjs';
import { $ as $$ArticleCard } from '../../../chunks/ArticleCard_hDujtxGK.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_Cn6J2PPP.mjs';
import { c as capitalize } from '../../../chunks/utils_CIZL8hpr.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://zesty-kangaroo-7917c6.netlify.app/");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { tag } = Astro2.params;
  if (tag === void 0) {
    throw new Error("Tag is required");
  }
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const tagArticles = allBlogArticles.filter((article) => article.data.tags.includes(tag));
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Results" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <a href="/articles" class="inline-flex items-center font-medium text-black hover:text-green my-4"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path> </svg> <span class="ml-1 font-bold text-lg">All Articles</span> </a> <h2 class="text-2xl pb-3">#${capitalize(tag)}</h2> <div class="grid gap-8 lg:grid-cols-2"> ${tagArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </div> </main> ` })}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/pages/articles/tag/[...tag].astro", void 0);

const $$file = "C:/Users/k1960/OneDrive/デスクトップ/HP制作（仕事用）/HamadaRyo/src/pages/articles/tag/[...tag].astro";
const $$url = "/articles/tag/[...tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
