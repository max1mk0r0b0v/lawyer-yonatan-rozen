import Image from "next/image";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { ButtonLink } from "@/components/landing/ButtonLink";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { siteConfig, whatsappLink } from "@/lib/site";

const trustPoints = [
  "ליווי אישי",
  "בדיקה יסודית",
  "שירות משפטי מסודר",
];

const practiceAreas = [
  {
    title: "ליווי רכישת דירה",
    text: "בדיקת העסקה, זיהוי סיכונים וניהול משפטי מסודר עד לחתימה והשלמה.",
  },
  {
    title: "מכירת נכס",
    text: "היערכות משפטית, ניסוח הסכם ושמירה על האינטרסים שלכם לכל אורך התהליך.",
  },
  {
    title: "בדיקות משפטיות לנכס",
    text: "בדיקת זכויות, רישומים, התחייבויות ומסמכי עסקה לפני קבלת החלטות.",
  },
  {
    title: "חוזים והסכמים במקרקעין",
    text: "ניסוח והידוק הסכמים במבט פרקטי, ברור ומדויק.",
  },
];

const whyChoose = [
  "ליווי אישי",
  "דיוק משפטי",
  "בהירות לאורך הדרך",
  "זמינות וענייניות",
];

const processSteps = [
  {
    step: "שלב 1",
    title: "שיחה ראשונית",
    text: "הבנת פרטי העסקה, הצדדים והמטרות המרכזיות.",
  },
  {
    step: "שלב 2",
    title: "בדיקה והיערכות",
    text: "איסוף מסמכים, בדיקת הזכויות והצפת נקודות שדורשות טיפול.",
  },
  {
    step: "שלב 3",
    title: "ליווי וניסוח",
    text: "ניהול משפטי של המשא ומתן וניסוח הסכמים מדויקים.",
  },
  {
    step: "שלב 4",
    title: "השלמת העסקה",
    text: "סגירת התנאים, חתימות, דיווחים והעברת הזכויות בצורה מסודרת.",
  },
];

export function LandingPage() {
  return (
    <main className="relative overflow-hidden bg-[#071017] text-stone-50">
      <div className="page-backdrop" aria-hidden="true" />

      <section className="relative min-h-screen px-4 pb-12 pt-4 sm:px-6 lg:px-8">
        <header className="relative z-20 mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center border border-white/10 bg-[#071017]/38 px-4 py-3 text-xs text-stone-50/78 shadow-[0_18px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-6">
          <div className="justify-self-start">
            <ButtonLink
              href="#contact"
              variant="secondary"
              className="h-auto min-h-0 min-w-0 whitespace-nowrap px-3 py-1.5 text-center text-[0.7rem] leading-tight sm:px-4 sm:py-2 sm:text-xs sm:leading-normal"
            >
              שיחת ייעוץ
            </ButtonLink>
          </div>
          <a
            href="#top"
            className="brand-wordmark justify-self-center"
            aria-label={'עו"ד יונתן רוזן'}
          >
            עו&quot;ד יונתן רוזן
          </a>
          <a
            href={`tel:${siteConfig.phone.replaceAll("-", "")}`}
            className="justify-self-end whitespace-nowrap text-sm font-semibold tracking-[0.03em] text-stone-50/82 transition hover:text-white sm:text-base"
          >
            {siteConfig.phone}
          </a>
        </header>

        <div
          id="top"
          className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-8 pb-10 pt-9 sm:pt-14 lg:grid-cols-[1.04fr_0.96fr]"
        >
          <div className="order-2 text-center lg:order-1 lg:text-right">
            <p className="hero-copy text-[0.58rem] font-bold tracking-[0.44em] text-[#d8bd82]/78">
              משרד בוטיק למקרקעין
            </p>
            <h1 className="legal-display hero-copy mx-auto mt-6 max-w-4xl text-balance text-[3.05rem] font-light leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:mx-0 lg:text-7xl">
              ליווי משפטי מדויק
              <span className="block bg-[linear-gradient(120deg,#fff8e8_0%,#d8bd82_48%,#9f6b2b_100%)] bg-clip-text font-semibold text-transparent drop-shadow-[0_0_28px_rgba(216,189,130,0.18)]">
                בעסקאות מקרקעין
              </span>
            </h1>
            <p className="hero-copy mx-auto mt-6 max-w-2xl text-pretty text-sm leading-7 text-stone-100/76 sm:text-base sm:leading-8 lg:mx-0">
              עו&quot;ד יונתן רוזן מלווה קונים, מוכרים ומשקיעים בעסקאות נדל&quot;ן,
              עם בדיקה משפטית יסודית, חוזים מדויקים וליווי אישי עד להשלמת העסקה.
            </p>

            <div className="hero-copy mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold text-stone-50/82 shadow-[0_14px_36px_rgba(0,0,0,0.16)] backdrop-blur"
                >
                  {point}
                </span>
              ))}
            </div>

            <div className="hero-copy mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <ButtonLink href="#contact" className="min-w-60">
                לתיאום שיחת ייעוץ
              </ButtonLink>
              <ButtonLink href="#services" variant="secondary">
                תחומי השירות
              </ButtonLink>
            </div>

            <p className="hero-copy mt-7 max-w-2xl border-r border-[#d8bd82]/45 pr-4 text-sm leading-7 text-stone-100/62 lg:mx-0">
              ליווי אישי, בדיקה יסודית ושירות משפטי מסודר לאורך כל התהליך
            </p>
          </div>

          <aside className="hero-copy luxury-card group relative order-1 mx-auto min-h-[520px] w-full max-w-[430px] overflow-hidden border border-white/12 bg-[#111820]/58 shadow-[0_34px_110px_rgba(0,0,0,0.42)] backdrop-blur-md lg:order-2 lg:max-w-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,189,130,0.24),transparent_21rem)]" />
            <Image
              src="/images/lawyer-yonatan-rozen-portrait.png"
              alt={'עו"ד יונתן רוזן'}
              width={819}
              height={1024}
              priority
              className="relative h-[520px] w-full object-cover object-[center_top] transition duration-700 ease-out group-hover:scale-[1.025]"
            />
            <div className="absolute inset-x-5 bottom-5 border border-white/12 bg-[#071017]/72 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl">
              <p className="text-xs font-bold tracking-[0.28em] text-[#d8bd82]">
                מקרקעין | חוזים | ליווי עסקאות
              </p>
              <p className="legal-display mt-2 text-2xl font-semibold text-white">
                עו&quot;ד יונתן רוזן
              </p>
            </div>
          </aside>
        </div>
      </section>

      <AnimatedSection
        id="services"
        className="relative z-10 px-4 py-12 sm:px-6 lg:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="תחומי השירות"
            title={'ליווי משפטי מדויק לעסקאות נדל"ן'}
            text="מענה ממוקד לעסקאות מקרקעין, בדיקות משפטיות וחוזים, עם דגש על סדר, בהירות ושמירה על האינטרסים שלכם."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((area) => (
              <article
                className="luxury-card group min-h-56 border border-white/12 bg-[#0b141c]/66 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-2 hover:border-[#d8bd82]/42 hover:bg-[#111b25]/76"
                key={area.title}
              >
                <span className="mb-6 block h-px w-12 bg-[linear-gradient(90deg,#d8bd82,rgba(255,255,255,0.08))] transition duration-500 group-hover:w-20" />
                <h3 className="text-xl font-semibold leading-tight text-white">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-200/64">
                  {area.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative z-10 px-4 py-10 sm:px-6 lg:py-14">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <article className="luxury-card flex flex-col justify-center border border-white/12 bg-[#0c151d]/72 p-7 shadow-[0_32px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-10 lg:p-12">
            <p className="mb-4 text-xs font-bold tracking-[0.34em] text-[#d8bd82]">
              אודות המשרד
            </p>
            <h2 className="legal-display text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
              משרד בוטיק למקרקעין, חוזים וליווי אישי
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-stone-100/68">
              משרד עו&quot;ד יונתן רוזן מתמקד בליווי משפטי בתחום המקרקעין,
              תוך הקפדה על דיוק, שקיפות ושירות אישי. המשרד מעניק ללקוחותיו
              ליווי מקצועי בעסקאות רכישה, מכירה, בדיקות משפטיות והסכמים, עם
              גישה מסודרת ועניינית בכל שלב.
            </p>
          </article>

          <aside className="luxury-card relative min-h-[360px] overflow-hidden border border-white/12 bg-[#111820]/42 shadow-[0_32px_100px_rgba(0,0,0,0.28)] backdrop-blur-md">
            <div className="absolute inset-0 bg-[url('/images/lawyer-yonatan-rozen-background.png')] bg-cover bg-center opacity-75 soft-parallax" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,23,0.18),rgba(7,16,23,0.88)),radial-gradient(circle_at_20%_18%,rgba(216,189,130,0.22),transparent_18rem)]" />
            <div className="relative flex h-full min-h-[360px] flex-col justify-end p-6 sm:p-8">
              <div className="border border-white/12 bg-[#071017]/62 p-5 backdrop-blur-xl sm:p-6">
                <h3 className="legal-display text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  למה לבחור במשרד
                </h3>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {whyChoose.map((item) => (
                    <div
                      className="flex items-center gap-3 border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-stone-50/82 transition duration-300 hover:border-[#d8bd82]/38 hover:bg-white/[0.105]"
                      key={item}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d8bd82] shadow-[0_0_18px_rgba(216,189,130,0.65)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative z-10 px-4 py-10 sm:px-6 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="תהליך העבודה"
            title="מסודר, ברור וממוקד תוצאה"
            text="תהליך קצר ומובנה שמייצר ודאות משפטית ומאפשר להתקדם בעסקה בביטחון."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {processSteps.map((item) => (
              <article
                className="luxury-card group border border-white/12 bg-[#0b141c]/62 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#d8bd82]/40"
                key={item.step}
              >
                <p className="legal-display text-4xl font-semibold text-[#d8bd82]/72 transition duration-500 group-hover:text-[#f3d89f]">
                  {item.step}
                </p>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-200/62">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="contact"
        className="relative z-10 px-4 pb-8 pt-10 sm:px-6 lg:pb-10 lg:pt-12"
      >
        <div className="luxury-card mx-auto grid max-w-5xl gap-8 border border-[#d8bd82]/20 bg-[#071017]/76 px-5 py-10 shadow-[0_38px_120px_rgba(0,0,0,0.44)] backdrop-blur-xl sm:px-8 lg:grid-cols-[0.72fr_1fr] lg:px-12">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold tracking-[0.34em] text-[#d8bd82]">
              שיחת ייעוץ ראשונית
            </p>
            <h2 className="legal-display mt-3 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
              זקוקים לליווי משפטי בעסקת נדל&quot;ן?
            </h2>
          </div>

          <div className="self-center">
            <p className="text-pretty text-base leading-8 text-stone-100/70">
              פנו לקבלת שיחת ייעוץ ראשונית ונשמח לבחון את פרטי העסקה שלכם
              בצורה מסודרת, מקצועית ועניינית.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink} target="_blank" rel="noreferrer">
                לתיאום שיחת ייעוץ
              </ButtonLink>
              <ButtonLink
                href={`tel:${siteConfig.phone.replaceAll("-", "")}`}
                variant="secondary"
              >
                התקשרו עכשיו
              </ButtonLink>
            </div>
            <div className="mt-7 space-y-2 text-center text-xs text-stone-100/42 lg:text-right">
              <p>{siteConfig.location}</p>
              <p>
                {siteConfig.hours} <span aria-hidden="true">|</span> {siteConfig.phone}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <footer className="relative z-10 px-4 pb-10 pt-4 text-center sm:px-6">
        <p className="brand-wordmark text-base opacity-70">עו&quot;ד יונתן רוזן</p>
        <p className="mt-3 text-xs text-stone-100/30">© 2026 עו&quot;ד יונתן רוזן</p>
      </footer>
    </main>
  );
}
