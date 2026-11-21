// Clip Maker — turn a long video into short highlight clips for Reels, Shorts and TikTok.
// Model: ai-clipping (finds the best moments and reframes them; 3 highlights per run;
// the price depends on the video length and is returned on start).

export const MODEL = "ai-clipping";
export const ASPECTS = ["9:16", "1:1", "4:5", "16:9", "4:3", "3:4"];

export const APP = {
  id: "clip-maker",
  name: "Clip Maker",
  theme: "cyberpunk",
  tagline: { en: "Long video → viral shorts", ru: "Длинное видео → короткие ролики" },
  kicker: { en: "AI video clipping", ru: "Нарезка видео с ИИ" },
  headline: { en: "Turn one long video into ready-to-post shorts", ru: "Одно длинное видео — готовые короткие ролики" },
  description: {
    en: "Add a podcast, webinar or vlog — AI finds the three strongest moments and cuts them into vertical clips for Reels, Shorts and TikTok.",
    ru: "Добавьте подкаст, вебинар или влог — ИИ найдёт три самых сильных момента и нарежет вертикальные ролики для Reels, Shorts и TikTok.",
  },
  cta: { en: "Make clips", ru: "Нарезать ролики" },
  models: [MODEL],
  upload: { types: ["video/mp4", "video/quicktime", "video/webm"], maxBytes: 200 * 1024 * 1024 },
  slots: [{
    key: "video", kind: "video", min: 1, max: 1,
    label: { en: "Long video", ru: "Длинное видео" },
    hint: {
      en: "MP4, MOV or WebM up to 200 MB. A direct file link is needed — YouTube page links do not work.",
      ru: "MP4, MOV или WebM до 200 МБ. Нужна прямая ссылка на файл — ссылки на страницы YouTube не подходят.",
    },
  }],
  compare: false,
  initialState: () => ({ aspect: "9:16" }),
  priceModel: () => MODEL,
  label: (s) => `${s.aspect} · 3 clips`,
};
