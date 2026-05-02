import { ButtonLink } from "@/components/landing/ButtonLink";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#071017] px-5 text-center text-stone-50">
      <div className="max-w-xl border border-white/12 bg-white/[0.06] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-12">
        <p className="text-sm font-bold tracking-[0.24em] text-[#d8bd82]">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
          העמוד לא נמצא
        </h1>
        <p className="mt-5 leading-8 text-stone-200/68">
          נראה שהגעתם לכתובת שלא קיימת. אפשר לחזור לעמוד הראשי ולתאם שיחת
          ייעוץ.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">חזרה לעמוד הבית</ButtonLink>
        </div>
      </div>
    </main>
  );
}
