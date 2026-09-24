import type { Metadata } from "next";

export const SITE_URL = "https://quazarrsecurity.com";
export const BRAND = "QuaZarR Security";

export const OG_IMAGE = `${SITE_URL}/og-image-wide.png`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

interface BuildMetadataOptions {
  /** Page title. The root template appends the brand unless absoluteTitle is set. */
  title: string;
  /** Use the title exactly as given, with no brand suffix appended. */
  absoluteTitle?: boolean;
  /** 100 to 160 characters. Reused for the og and twitter descriptions. */
  description: string;
  /** Route path, for example "/services". Use "" for the homepage. */
  path: string;
}

/**
 * Single source of truth for page metadata.
 *
 * Next.js shallow-merges metadata: a nested object such as `openGraph` or
 * `twitter` defined on a page REPLACES the root layout's version rather than
 * merging into it. Partial per-page blocks therefore silently drop inherited
 * fields like `images`, `type` and `siteName`. Building every page's metadata
 * here guarantees the full set is always emitted.
 */
export function buildMetadata({
  title,
  absoluteTitle = false,
  description,
  path,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const socialTitle = absoluteTitle ? title : `${title} | ${BRAND}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      siteName: BRAND,
      locale: "en_GB",
      type: "website",
      url,
      title: socialTitle,
      description,
      images: [
        {
          url: OG_IMAGE,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: BRAND,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
