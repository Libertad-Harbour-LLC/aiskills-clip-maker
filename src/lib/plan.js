import "server-only";
import { MODEL, ASPECTS } from "@/lib/app.config";
import { pick, urls } from "@/lib/plan-helpers";

export function plan(body) {
  const [video] = urls(body.inputs, "video", { name: "video file" });
  return [{ model: MODEL, params: { aspect_ratio: pick(body.aspect, ASPECTS, "9:16") }, inputs: { video_url: video } }];
}
