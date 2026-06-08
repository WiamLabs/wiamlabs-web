// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { loadNewsPost, newsPosts } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsPosts.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await loadNewsPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/news/${post.slug}`,
  });
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await loadNewsPost(slug);
  if (!post) notFound();

  return (
    <article className={`container ${styles.page}`}>
      <PageHeader title={post.title} subtitle={post.excerpt} />
      <p className={styles.meta}>
        {post.date} · {post.author} · <span className={styles.tag}>{post.tag}</span>
      </p>

      <div className={styles.body}>
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <Link href="/news" className={styles.back}>
        ← All news
      </Link>
    </article>
  );
}
