/* empty css                                 */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, H as renderScript, a as createAstro } from '../chunks/astro/server_CSCVXINx.mjs';
import 'kleur/colors';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_C4EZSyLG.mjs';
import { $ as $$Card } from '../chunks/Card_BkEl7GV5.mjs';
import { $ as $$Section, b as $$SectionTitle, a as $$Services } from '../chunks/Services_CnyiGxnr.mjs';
import { c as createSvgComponent, $ as $$MainLayout } from '../chunks/MainLayout_D64_9Qyh.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const larrow = createSvgComponent({"meta":{"src":"/_astro/icon3.C2Kx7sAW.svg","width":21,"height":20,"format":"svg"},"attributes":{"width":"21","height":"20","viewBox":"0 0 21 20","fill":"none"},"children":"\n<path d=\"M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570543C5.86854 -0.157358 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z\" fill=\"#B9FF66\" />\n"});

const $$Cases = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      index: 0,
      title: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      link: "https://google.com"
    },
    {
      index: 1,
      title: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      link: "https://google.com"
    },
    {
      index: 1,
      title: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      link: "https://google.com"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "cases" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Case Studies", "description": "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" })} ${maybeRenderHead()}<div class="flex flex-col lg:flex-row justify-between rounded-[45px] p-1"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex p-[60px] h-full bg-dark text-gray rounded-[45px] m-[1px]"> <div class="flex flex-col gap-5"> <p>${card.title}</p> <a${addAttribute(card.link, "href")} class="flex items-center gap-[15px]"> <span class="text-green">Case Info</span> <picture> ${renderComponent($$result3, "Image", $$Image, { "src": larrow, "alt": "Arrow pointing up right" })} </picture> </a> </div> </div> ` })}`)} </div> ` })}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/sections/Cases.astro", void 0);

const decorForm = new Proxy({"src":"/_astro/contact-pic.BrB0SfUf.png","width":692,"height":649,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/k1960/OneDrive/デスクトップ/HP制作（仕事用）/HamadaRyo/src/assets/pics/contact-pic.png";
							}
							
							return target[name];
						}
					});

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex relative justify-start items-center p-[60px] bg-[#F3F3F3] rounded-[45px] overflow-hidden" data-astro-cid-2lkv3ujd> <form class="bg-gray sm:p-6 h-full w-full lg:max-w-lg" data-astro-cid-2lkv3ujd> <div class="flex flex-col sm:flex-row gap-[35px] sm:items-center mb-10" data-astro-cid-2lkv3ujd> <div class="flex items-center gap-[14px]" data-astro-cid-2lkv3ujd> <input type="checkbox" id="checkbox1" name="checkbox1" class="form-checkbox text-black" data-astro-cid-2lkv3ujd> <label for="checkbox1" class="text-black" data-astro-cid-2lkv3ujd>Say Hi</label> </div> <div class="flex items-center gap-[14px]" data-astro-cid-2lkv3ujd> <input type="checkbox" id="checkbox2" name="checkbox2" class="form-checkbox text-black" data-astro-cid-2lkv3ujd> <label for="checkbox2" class="flex items-center text-black" data-astro-cid-2lkv3ujd>Get a Quote</label> </div> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="name" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Name*</label> <input type="text" id="name" name="name" placeholder="Name" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="email" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Email*</label> <input type="email" id="email" name="email" placeholder="Email" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="message" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Message*</label> <textarea id="message" name="message" placeholder="Message" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd></textarea> </div> <button type="submit" name="submit" class="btn-primary w-full" data-astro-cid-2lkv3ujd>Send</button> </form> <picture class="absolute right-[-25%] top-[2%] bottom-[2%] hidden lg:block" data-astro-cid-2lkv3ujd> ${renderComponent($$result, "Image", $$Image, { "src": decorForm, "alt": "decor", "data-astro-cid-2lkv3ujd": true })} </picture> </div>  ${renderScript($$result, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/ui/Form.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/ui/Form.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-[140px] relative"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Contact Us", "description": "Connect with Us: Let's Discuss Your Digital Marketing Needs" })} ${renderComponent($$result2, "Form", $$Form, {})} </div> ` })}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/sections/Contact.astro", void 0);

const urlPattern = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher(url) {
  const match = url.match(urlPattern);
  return match?.[3];
}

const $$Astro$2 = createAstro("https://hamada-ryo.vercel.app/");
const $$YouTube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$YouTube;
  const {
    id,
    poster,
    posterQuality = "default",
    title,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^[A-Za-z0-9-_]+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher(idOrUrl);
  }
  const videoid = extractID(id);
  const posterFile = {
    max: "maxresdefault",
    high: "sddefault",
    default: "hqdefault",
    low: "default"
  }[posterQuality] || "hqdefault";
  const posterURL = poster || `https://i.ytimg.com/vi/${videoid}/${posterFile}.jpg`;
  const href = `https://youtube.com/watch?v=${videoid}`;
  return renderTemplate`${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": videoid, "title": title, "data-title": title, ...attrs, "style": `background-image: url('${posterURL}');` }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(href, "href")} class="lty-playbtn"> <span class="lyt-visually-hidden">${attrs.playlabel || "Play"}</span> </a> ` })} ${renderScript($$result, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/node_modules/@astro-community/astro-embed-youtube/YouTube.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-4xl font-medium leading-none md:text-6xl text-center md:text-left">AIを使って <br> コンテンツを<br> 高画質化に！</h1> <p class="mt-6 mb-8 text-lg font-normal leading-7 sm:mb-12 text-center md:text-left md:pr-12">Use AI to improve the quality of your content!
</p> <div class="w-full justify-center md:justify-start items-center inline-flex"> <a href="https://github.com/manulthanura/Positivus" target="_blank" class="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">Book a consultation
</a> </div> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> ${renderComponent($$result2, "YouTube", $$YouTube, { "id": "jb1MDu5Jz78", "posterQuality": "high" })} </div> </div> ` })}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/sections/Hero.astro", void 0);

const $$Astro$1 = createAstro("https://hamada-ryo.vercel.app/");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-[#f08300] overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]" data-astro-cid-kq6n5brs> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")} data-astro-cid-kq6n5brs> <div class="flex items-center gap-[25px]" data-astro-cid-kq6n5brs> <span class="hidden sm:block sm:text-6xl" data-astro-cid-kq6n5brs>0${index}</span> ${title} </div> <div class="bg-gray w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark" data-astro-cid-kq6n5brs> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true" data-astro-cid-kq6n5brs></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]" data-astro-cid-kq6n5brs> <div class="w-full h-[2px] bg-black" data-astro-cid-kq6n5brs></div> <p class="prose mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]" data-astro-cid-kq6n5brs> ${description} </p> </div> </div>  ${renderScript($$result, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/ui/AccordionItem.astro", void 0);

const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const content = [
    {
      index: 1,
      title: "Consultation",
      description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
      index: 2,
      title: "Research",
      description: "After the consultation, we will conduct thorough research to identify your target audience, competitors, and industry trends. This will help us develop a comprehensive strategy to achieve your business goals."
    },
    {
      index: 3,
      title: "Implementation",
      description: "Once the research is complete, we will begin implementing the strategy. This may include optimizing your website, creating content, and launching marketing campaigns. Our team will work diligently to ensure that all tasks are completed on time and within budget."
    },
    {
      index: 4,
      title: "Optimization",
      description: "After the initial implementation, we will continuously monitor and optimize your marketing efforts to ensure maximum results. This may involve adjusting ad campaigns, refining content, and analyzing data to identify areas for improvement."
    },
    {
      index: 5,
      title: "Reporting",
      description: "Throughout the process, we will provide regular reports on the performance of your marketing campaigns. This will allow you to track progress, measure success, and make informed decisions about future strategies."
    },
    {
      index: 6,
      title: "Improvement",
      description: "Based on the data and insights gathered from the reports, we will make recommendations for further improvement. This may involve refining existing strategies, exploring new opportunities, or adjusting tactics to better align with your business goals."
    }
  ];
  return renderTemplate`${content.map((item) => {
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { "index": item.index, "title": item.title, "description": item.description })}`;
  })}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/ui/Accordion.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const description = "\u4E00\u6B69\u305A\u3064\u6D41\u308C\u3092\u8AAC\u660E\u3057\u3066\u3044\u304D\u307E\u3059\u3002";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "process" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "\u5236\u4F5C\u306E\u6D41\u308C", "description": description })} ${renderComponent($$result2, "Accordion", $$Accordion, {})} </div> ` })}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/sections/Process.astro", void 0);

const propImg = new Proxy({"src":"/_astro/proposal-pic.DC7YnBHg.png","width":494,"height":395,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/k1960/OneDrive/デスクトップ/HP制作（仕事用）/HamadaRyo/src/assets/pics/proposal-pic.png";
							}
							
							return target[name];
						}
					});

const $$Proposal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex rounded-[45px] p-[60px] relative mt-[123px] mb-[163px]"> <div class="w-full md:w-[40%] flex flex-col gap-[26px]"> <h2 class="text-3xl font-medium">Let's make things happen</h2> <p>
Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
</p> <button class="btn-primary">Get your free proposal</button> </div> <picture class="hidden md:flex absolute right-[-10%] lg:right-0 top-[-15%] h-[450px] items-center justify-center"> ${renderComponent($$result3, "Image", $$Image, { "src": propImg, "alt": "This is an illustration", "class": "hidden md:flex lg:h-full lg:w-auto" })} </picture> </div> ` })} ` })}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/sections/Proposal.astro", void 0);

const linkd = createSvgComponent({"meta":{"src":"/_astro/profile-in.CjyVQDgO.svg","width":34,"height":34,"format":"svg"},"attributes":{"width":"34","height":"34","viewBox":"0 0 34 34","fill":"none"},"children":"\n<circle cx=\"17\" cy=\"17\" r=\"17\" fill=\"black\" />\n<path d=\"M9.31776 25H12.8131V13.6844H9.31776V25Z\" fill=\"#B9FF66\" />\n<path d=\"M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z\" fill=\"#B9FF66\" />\n<path d=\"M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z\" fill=\"#B9FF66\" />\n"});

const $$Astro = createAstro("https://hamada-ryo.vercel.app/");
const $$TeamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamCard;
  const { pic, name, role, description, link } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-[60px]"> <div class="flex flex-col sm:flex-row relative"> <picture>${renderComponent($$result2, "Image", $$Image, { "src": pic, "alt": name })}</picture> <div class="flex flex-col justify-end sm:ml-5"> <h3 class="text-lg font-medium">${name}</h3> <p class="text-sm font-normal">${role}</p> </div> <a${addAttribute(link, "href")} class="absolute right-0 top-0">${renderComponent($$result2, "Image", $$Image, { "src": linkd, "alt": "Linkedin Logo" })}</a> </div> <div class="w-full h-[1px] bg-black my-7"></div> <div>${description}</div> </div> ` })}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/ui/TeamCard.astro", void 0);

const p1 = new Proxy({"src":"/_astro/t1.DCqpUh7U.png","width":106,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/k1960/OneDrive/デスクトップ/HP制作（仕事用）/HamadaRyo/src/assets/team/t1.png";
							}
							
							return target[name];
						}
					});

const p2 = new Proxy({"src":"/_astro/t2.nG-pfUKH.png","width":103,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/k1960/OneDrive/デスクトップ/HP制作（仕事用）/HamadaRyo/src/assets/team/t2.png";
							}
							
							return target[name];
						}
					});

const p3 = new Proxy({"src":"/_astro/t3.CD1xqxr1.png","width":103,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/k1960/OneDrive/デスクトップ/HP制作（仕事用）/HamadaRyo/src/assets/team/t3.png";
							}
							
							return target[name];
						}
					});

const p4 = new Proxy({"src":"/_astro/t4.H_8Q79jb.png","width":103,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/k1960/OneDrive/デスクトップ/HP制作（仕事用）/HamadaRyo/src/assets/team/t4.png";
							}
							
							return target[name];
						}
					});

const p5 = new Proxy({"src":"/_astro/t5.hcMJufQa.png","width":103,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/k1960/OneDrive/デスクトップ/HP制作（仕事用）/HamadaRyo/src/assets/team/t5.png";
							}
							
							return target[name];
						}
					});

const p6 = new Proxy({"src":"/_astro/t6.C1epwtLh.png","width":103,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/k1960/OneDrive/デスクトップ/HP制作（仕事用）/HamadaRyo/src/assets/team/t6.png";
							}
							
							return target[name];
						}
					});

const $$Team = createComponent(($$result, $$props, $$slots) => {
  const description = "Meet the skilled and experienced team behind our successful digital marketing strategies";
  const team = [
    {
      pic: p1,
      name: "John Smith",
      role: "CEO and Founder",
      description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      link: "https://linkedin.com"
    },
    {
      pic: p2,
      name: "Jane Doe",
      role: "Director of Operations",
      description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      link: "https://linkedin.com"
    },
    {
      pic: p3,
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      link: "https://linkedin.com"
    },
    {
      pic: p4,
      name: "Emily Johnson",
      role: "PPC Manager",
      description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      link: "https://linkedin.com"
    },
    {
      pic: p5,
      name: "Brian Williams",
      role: "Social Media Specialist",
      description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      link: "https://linkedin.com"
    },
    {
      pic: p6,
      name: "Sarah Kim",
      role: "Content Creator",
      description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
      link: "https://linkedin.com"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Team", "description": description })} <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-10"> ${team.map((member, index) => renderTemplate`${renderComponent($$result2, "TeamCard", $$TeamCard, { "key": index, "pic": member.pic, "name": member.name, "role": member.role, "description": member.description, "link": member.link })}`)} </div> <div class="flex justify-end mt-10"> <button class="btn-primary">See all team</button> </div> </div> ` })}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/sections/Team.astro", void 0);

const Testimonials = [
	{
		index: 1,
		name: "John Smith",
		role: "Marketing dierector at XYZ",
		comment: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
	},
	{
		index: 2,
		name: "Jane Doe",
		role: "CEO at ABC",
		comment: "We chose Positivus to help us with our SEO and PPC campaigns and have been very impressed with their results. They are knowledgeable, responsive, and truly care about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
	},
	{
		index: 3,
		name: "Alice Johnson",
		role: "Owner at 123",
		comment: "I recently started working with Positivus and have been very impressed with their professionalism and expertise. They have helped me increase my online visibility and generate more leads for my business. I highly recommend Positivus to anyone looking to improve their online marketing strategy."
	},
	{
		index: 4,
		name: "Bob Brown",
		role: "Dierector at XYZ",
		comment: "Positivus has been a great partner for our company. They are knowledgeable, responsive, and truly care about the success of our business. We have seen a significant increase in website traffic and leads as a result of their efforts. I highly recommend Positivus to any company looking to grow their online presence."
	},
	{
		index: 5,
		name: "Gupta Patel",
		role: "Content creator",
		comment: "I have been working with Positivus for the past year and have been very impressed with their professionalism and expertise. They have helped me increase my online visibility and generate more leads for my business. I highly recommend Positivus to anyone looking to improve their online marketing strategy."
	},
	{
		index: 6,
		name: "Sara Johnson",
		role: "Freelancer",
		comment: "Positivus made a huge difference in our online presence. They are knowledgeable, responsive, and truly care about the success of our business. We have seen a significant increase in website traffic and leads as a result of their efforts. I highly recommend Positivus to any company looking to grow their online presence."
	}
];

const $$SwiperSlider = createComponent(($$result, $$props, $$slots) => {
  const processedTestimonials = Testimonials.map((item, index, array) => ({
    ...item,
    index: index + 1,
    length: array.length
  }));
  return renderTemplate`${maybeRenderHead()}<div id="ProjectSlider" class="swiper mt-10"${addAttribute({
    "--swiper-pagination-color": "var(--green)",
    "--swiper-pagination-bullet-inactive-color": "#fff",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "19px",
    "--swiper-pagination-bullet-horizontal-gap": "10px"
  }, "style")} data-astro-cid-klye6o2m> <div class="swiper-wrapper mt-[84px] mb-[124px]" data-cursor="swipe" data-astro-cid-klye6o2m> ${processedTestimonials.map((item) => renderTemplate`<div class="swiper-slide text-gray flex flex-col" role="group"${addAttribute(`${item.index} / ${item.length}`, "aria-label")} data-astro-cid-klye6o2m> <div class="flex flex-col justify-center items-center py-[48px] px-6 sm:px-[52px]" data-astro-cid-klye6o2m> <p class="bubble" data-astro-cid-klye6o2m>
"${item.comment}"
</p> </div> <div class="w-full px-10 sm:px-20 " data-astro-cid-klye6o2m> <div class="text-green font-medium" data-astro-cid-klye6o2m>${item.name}</div> <div data-astro-cid-klye6o2m>${item.role}</div> </div> </div>`)} </div> <div class="flex justify-around lg:justify-center mb-[68px] lg:gap-[189px]" data-astro-cid-klye6o2m> <div class="swiper-button-prev w-7 h-7 sm:w-10 sm:h-10" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-klye6o2m><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> <div class="swiper-pagination" data-astro-cid-klye6o2m></div> <div class="swiper-button-next w-7 h-7 sm:w-10 sm:h-10 rotate-180" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 448 512" data-astro-cid-klye6o2m> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> </div> </div> ${renderScript($$result, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/ui/SwiperSlider.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/ui/SwiperSlider.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "testimonials" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-20"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Testimonials", "description": "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" })} <div class="rounded-[45px] bg-dark mb-[150px] text-gray"> ${renderComponent($$result2, "SwiperSlider", $$SwiperSlider, {})} </div> </div> ` })}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/components/sections/Testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Positivus", "description": "\u3042\u306A\u305F\u306E\u8A18\u61B6\u3092\u3088\u307F\u304C\u3048\u3089\u305B\u307E\u3059\uFF01", "class": "body" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Proposal", $$Proposal, {})} ${renderComponent($$result2, "Cases", $$Cases, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Users/k1960/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/HP\u5236\u4F5C\uFF08\u4ED5\u4E8B\u7528\uFF09/HamadaRyo/src/pages/index.astro", void 0);

const $$file = "C:/Users/k1960/OneDrive/デスクトップ/HP制作（仕事用）/HamadaRyo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
