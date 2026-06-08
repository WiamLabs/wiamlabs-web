// © 2026 WiamLabs. All rights reserved.

import careersData from "@/content/careers.json";
import mediaData from "@/content/media.json";
import partnersData from "@/content/partners.json";

export type Partner = {
  name: string;
  description: string;
  website: string;
  logoAlt: string;
};

export type MediaPhoto = {
  id: string;
  title: string;
  alt: string;
  gradient: string;
};

export type MediaVideo = {
  id: string;
  title: string;
  youtubeId: string;
  caption: string;
};

export type Career = {
  slug: string;
  title: string;
  location: string;
  type: string;
  summary: string;
};

export const partners = partnersData as Partner[];
export const mediaPhotos = mediaData.photos as MediaPhoto[];
export const mediaVideos = mediaData.videos as MediaVideo[];
export const careers = careersData as Career[];

export function getCareer(slug: string): Career | undefined {
  return careers.find((c) => c.slug === slug);
}
