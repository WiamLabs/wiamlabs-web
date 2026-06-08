// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { loadNewsPosts } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "News",
  description: "News and updates from WiamLabs — WiamApp, WiamTrade, and company announcements.",
  path: "/news",
});

export default async function NewsPage() {
  const posts = await loadNewsPosts();
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className={`container ${styles.page}`}>
      <PageHeader
        eyebrow="Updates"
        title="WiamLabs news"
        subtitle="Company announcements and product updates."
      />

      <div className={styles.grid}>
        {sorted.map((post) => (
          <Card key={post.slug} interactive>
            <Link href={`/news/${post.slug}`}>
              <p className={styles.meta}>
                {post.date} · {post.author}
              </p>
              <h2>{post.title}</h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <span className={styles.tag}>{post.tag}</span>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
