// © 2026 WiamLabs. All rights reserved.

import { PageHeader } from "@/components/layout/PageHeader";
import { mediaPhotos, mediaVideos } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Media",
  description: "Photos and videos from WiamLabs — products, team, and Africa story.",
  path: "/media",
});

export default function MediaPage() {
  return (
    <div className={`container ${styles.page}`}>
      <PageHeader
        eyebrow="Gallery"
        title="WiamLabs media"
        subtitle="Product shots and company media — updated as we publish new material."
      />

      <section>
        <h2 style={{ color: "var(--color-white)", marginBottom: "1rem" }}>Photos</h2>
        <div className={styles.photoGrid}>
          {mediaPhotos.map((photo) => (
            <article key={photo.id} className={styles.photo}>
              <div
                className={`${styles.photoVisual} ${styles[photo.gradient as "gold" | "emerald" | "blue" | "purple"]}`}
                role="img"
                aria-label={photo.alt}
              />
              <div className={styles.photoBody}>
                <h3>{photo.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ color: "var(--color-white)", marginBottom: "1rem" }}>Videos</h2>
        {mediaVideos.length === 0 ? (
          <p className={styles.empty}>
            Company video coming soon. Check back or follow us on YouTube.
          </p>
        ) : (
          <p className={styles.empty}>Videos will appear here.</p>
        )}
      </section>
    </div>
  );
}
