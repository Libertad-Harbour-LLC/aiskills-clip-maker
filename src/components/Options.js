"use client";

import { ASPECTS } from "@/lib/app.config";
import { useLang } from "@/lib/i18n";

export default function Options({ state, set, Chips }) {
  const { t, lang } = useLang();
  return (
    <>
      <Chips label={t("aspect")} options={ASPECTS} value={state.aspect} onChange={(v) => set({ aspect: v })} />
      <p className="text-xs text-secondary-text">
        {lang === "ru"
          ? "За один запуск — 3 лучших момента. Точная цена зависит от длины видео и считается при запуске."
          : "Each run gives the 3 best moments. The exact price depends on the video length and is calculated on start."}
      </p>
    </>
  );
}
