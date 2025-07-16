/* empty css                                 */
import { a as createAstro, c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DrjHWHeI.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CAH-QHI_.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_hDujtxGK.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_CeZHKpDu.mjs';
import { g as getCollection } from '../chunks/_astro_content_Cn6J2PPP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://zesty-kangaroo-7917c6.netlify.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Positivus - Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8"> <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">Our Blog</h2> <p class="font-light sm:text-xl">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p> </div> <br> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br> <div class="grid gap-8 lg:grid-cols-2"> ${allBlogArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </div> </main> ` })}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/pages/articles/index.astro", void 0);

const $$file = "C:/Users/k1960/OneDrive/デスクトップ/HP制作（仕事用）/HamadaRyo/src/pages/articles/index.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
