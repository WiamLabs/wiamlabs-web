// © 2026 WiamLabs. All rights reserved.

import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { buildMetadata } from "@/lib/seo";
import styles from "../legal/legal.module.css";

export const metadata = buildMetadata({
  title: "WiamSports Terms & Conditions",
  description:
    "Terms for WiamSports: Free Channel, VIP Channel (Telegram Stars), affiliate programme, and the private team workspace.",
  path: "/terms-of-use",
});

export default function WiamSportsTermsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <Image
        className={styles.productMark}
        src="/brand/wiamsports.png"
        alt="WiamSports"
        width={440}
        height={440}
        priority
      />
      <PageHeader
        eyebrow="WiamSports"
        title="Terms & Conditions"
        subtitle="Rules for the Telegram bot, Free Channel, VIP Channel, and affiliate programme."
      />
      <p className={styles.updated}>Effective 21 August 2026 · Last updated 21 August 2026 · Bot: @WiamSportsBot</p>

      <div className={styles.content}>
        <p>
          These Terms are between you and <strong>WiamLabs</strong> for <strong>WiamSports</strong>{" "}
          on Telegram (<a href="https://t.me/WiamSportsBot">@WiamSportsBot</a>). By tapping Start,
          joining a channel, paying Stars, or using affiliate links, you agree to them and to our{" "}
          <a href="/privacy-policy">Privacy Policy</a>. If you do not agree, do not use the
          service.
        </p>

        <h2>The service</h2>
        <ul>
          <li><strong>Free Channel</strong> — a daily sheet of match winner + confidence.</li>
          <li><strong>VIP Channel</strong> — paid monthly access via Telegram Stars; full prediction cards.</li>
          <li><strong>Affiliate</strong> — tracked links; promoters are paid in prediction cards, not money.</li>
        </ul>
        <div className={styles.note}>
          <p>
            We are not a bookmaker, betting shop, or payment institution. We do not accept bets,
            hold customer funds, or pay cash winnings. Any wager you place is solely between you
            and a licensed operator in your country.
          </p>
        </div>

        <h2>Eligibility</h2>
        <ul>
          <li>You must be 18+, or older if your country sets a higher age for gambling-related content.</li>
          <li>You must use your own Telegram account.</li>
          <li>You must follow the laws that apply to you.</li>
          <li>We may refuse or restrict the service where we believe it would be unlawful.</li>
        </ul>

        <h2>Channels</h2>
        <p>
          The Free Channel is public. The VIP Channel is a paid Telegram subscription. Telegram
          enforces who can join. VIP content is licensed to you only while your subscription is
          active. You may not resell it, run a forwarding channel of our cards, or present it as
          a guaranteed betting service.
        </p>

        <h2>VIP and Telegram Stars</h2>
        <ul>
          <li>Price is shown in Telegram before you pay. WiamLabs may change the Stars price; new subscribers see the current price.</li>
          <li>Billing, renewal, and cancellation run through Telegram (and Apple or Google if you pay in their apps).</li>
          <li>We do not store your card number.</li>
          <li>Refunds follow Telegram / app-store rules. Ask them first for Stars and billing. Ask us if you paid but did not receive channel access.</li>
          <li>We can remove access for breach of these Terms even if Telegram still shows a subscription; in that case contact support.</li>
        </ul>

        <h2>Affiliate programme</h2>
        <ul>
          <li>You receive two earning links (Free and VIP) for the current 18:00 Ghana window.</li>
          <li>Only joins through those links count. The public Free/VIP buttons on Start do not pay you.</li>
          <li>Pay is prediction cards sent to your bot chat at 18:00 Ghana, from the high-confidence pool. Quiet days keep the debt. The same fixture is never sent twice to you.</li>
          <li>There is no cash, bank, mobile-money, or Stars payout from this programme.</li>
          <li>You cannot credit your own join. WiamLabs team Telegram IDs never earn.</li>
          <li>You are not an employee, partner, or agent of WiamLabs. You must not claim we guarantee income.</li>
          <li>You must promote honestly: 18+, not “fixed”, not “risk-free”.</li>
        </ul>

        <h2>Predictions</h2>
        <p>
          Picks are statistical opinions produced before kickoff. We do not guarantee results or
          profit. Where we show a track record, it is historical transparency, not a promise of
          future returns. We do not alter a published pick after kickoff to improve that record.
        </p>
        <div className={styles.note}>
          <p>
            Bet responsibly. 18+. Never stake money you cannot afford to lose. Help:{" "}
            <a href="https://www.begambleaware.org/">BeGambleAware</a> and your local regulator
            (Ghana: Gaming Commission).
          </p>
        </div>

        <h2>Private workspace</h2>
        <p>
          Internal tools are for people WiamLabs has added to the sports team. Access is a
          licence, not a public right. Team members must not leak workspace output, tokens, or
          operator screens.
        </p>

        <h2>Acceptable use</h2>
        <p>You must not scrape or resell our picks, attack the service, farm cards with fake joins, promote illegal gambling or match-fixing using our name, or harass staff or members.</p>

        <h2>Intellectual property</h2>
        <p>
          WiamSports, WiamLabs, card designs, copy, and model output are owned by WiamLabs or
          licensors. Club and league marks belong to their owners and appear for identification
          only.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, WiamLabs is not liable for betting losses, errors
          in third-party football data or Telegram, downtime, missed cards, or a quiet affiliate
          day. If we are liable despite this, our total liability is limited to the Stars you paid
          for VIP in the three months before the claim, or zero if you only used Free or Affiliate.
          Nothing excludes liability that Ghanaian law does not allow us to exclude.
        </p>

        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of the Republic of Ghana, except where mandatory
          consumer law in your country cannot be waived. Write first to{" "}
          <a href="mailto:legal@wiamlabs.com">legal@wiamlabs.com</a>.
        </p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:legal@wiamlabs.com">legal@wiamlabs.com</a>
          <br />
          Privacy: <a href="mailto:privacy@wiamlabs.com">privacy@wiamlabs.com</a>
          <br />
          Support: <a href="mailto:support@wiamlabs.com">support@wiamlabs.com</a>
          {" · "}
          WhatsApp <a href="https://wa.me/233552690290">+233 552 690 290</a>
        </p>
      </div>
    </div>
  );
}
