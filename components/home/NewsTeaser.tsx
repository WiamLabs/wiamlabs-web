// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { loadNewsPosts } from "@/lib/products";
import styles from "./NewsTeaser.module.css";

export async function NewsTeaser() {
  const posts = await loadNewsPosts();
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Latest from WiamLabs</h2>
          <Button href="/news" variant="ghost" size="sm">
            All news →
          </Button>
        </div>
        <div className={styles.grid}>
          {latest.map((post) => (
            <Card key={post.slug} interactive>
              <Link href={`/news/${post.slug}`}>
                <p className={styles.meta}>
                  {post.date} · {post.author}
                </p>
                <h3>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.tag}>{post.tag}</span>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
