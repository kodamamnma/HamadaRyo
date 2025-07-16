import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot } from './astro/server_DrjHWHeI.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://zesty-kangaroo-7917c6.netlify.app/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { isUnderline } = Astro2.props;
  return renderTemplate`${isUnderline ? renderTemplate`${maybeRenderHead()}<div class="rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]">${renderSlot($$result, $$slots["default"])}</div>` : renderTemplate`<div class="rounded-[45px]">${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
