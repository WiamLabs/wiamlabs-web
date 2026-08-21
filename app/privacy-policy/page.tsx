// © 2026 WiamLabs. All rights reserved.

import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { buildMetadata } from "@/lib/seo";
import styles from "../legal/legal.module.css";

export const metadata = buildMetadata({
  title: "WiamSports Privacy Policy",
  description:
    "How WiamLabs collects and uses information for WiamSports on Telegram, the Free and VIP channels, and the affiliate programme.",
  path: "/privacy-policy",
});

export default function WiamSportsPrivacyPage() {
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
        title="Privacy Policy"
        subtitle="What we collect on Telegram, our channels, and the affiliate programme — and how we protect it."
      />
      <p className={styles.updated}>Effective 21 August 2026 · Last updated 21 August 2026 · Bot: @WiamSportsBot</p>

      <div className={styles.content}>
        <p>
          <strong>WiamLabs</strong> (“we”, “us”, “our”) operates <strong>WiamSports</strong> on
          Telegram. We are based in Ghana. Telegram is a separate company; your Telegram account
          is governed by Telegram’s own privacy policy. We only receive what Telegram sends our
          bot when you interact with us.
        </p>
        <p>
          Privacy: <a href="mailto:privacy@wiamlabs.com">privacy@wiamlabs.com</a>
          <br />
          Support: <a href="mailto:support@wiamlabs.com">support@wiamlabs.com</a>
          {" · "}
          WhatsApp <a href="https://wa.me/233552690290">+233 552 690 290</a>
        </p>

        <h2>What WiamSports is</h2>
        <p>WiamSports is not a public fan app inside the bot chat. It has three public surfaces:</p>
        <ul>
          <li><strong>Free Channel</strong> — public picks (match winner and confidence).</li>
          <li><strong>VIP Channel</strong> — paid monthly access through Telegram Stars. Full cards.</li>
          <li><strong>Affiliate</strong> — promoters share tracked join links and are paid in prediction cards, not cash.</li>
        </ul>
        <p>
          The bot chat with @WiamSportsBot is a private workspace for the WiamLabs sports team.
          Visitors are directed to the channels and, if they choose, the affiliate desk. We are
          not a bookmaker. We do not accept bets, hold stakes, or pay winnings.
        </p>

        <h2>Information we collect</h2>
        <h3>From Telegram</h3>
        <table>
          <thead>
            <tr><th>Data</th><th>Why</th></tr>
          </thead>
          <tbody>
            <tr><td>Telegram user ID</td><td>Identify your account. This is the main identifier we store.</td></tr>
            <tr><td>Username, first name, last name</td><td>Address you in chat and for support.</td></tr>
            <tr><td>Language code</td><td>As Telegram provides it.</td></tr>
            <tr><td>Messages you send to the bot</td><td>To answer commands, button taps, and support.</td></tr>
            <tr><td>Channel join events</td><td>When the bot is an administrator, Telegram can tell us who joined, including via an invite link.</td></tr>
            <tr><td>Telegram Stars payment notices</td><td>Confirm VIP subscription status. We do not receive your card number.</td></tr>
          </tbody>
        </table>
        <h3>Records we create</h3>
        <ul>
          <li>Whether you are a visitor, promoter, or team member</li>
          <li>Age confirmation and country you provided during onboarding (if asked)</li>
          <li>That you accepted our terms</li>
          <li>Affiliate invite tokens, who joined, cards owed and cards sent</li>
          <li>VIP subscription state as Telegram reports it</li>
          <li>Moderation flags for abuse cases</li>
        </ul>
        <h3>Football data (not about you)</h3>
        <p>
          We store fixtures, our predictions, results, and related sports signals. That is match
          data. It is not a record of bets you placed.
        </p>
        <div className={styles.note}>
          <p>
            We do not collect bank details, card numbers, government ID, your precise GPS
            location, your contacts, or private chats you have with other people. We do not sell
            personal data.
          </p>
        </div>

        <h2>How we use it</h2>
        <ul>
          <li>Deliver the bot, channels, and affiliate desk</li>
          <li>Attribute Free and VIP joins to the correct promoter and send the cards we owe</li>
          <li>Confirm VIP access after Telegram processes Stars</li>
          <li>Moderate spam in channels where the bot is an administrator</li>
          <li>Protect the private team workspace from unauthorised use</li>
          <li>Improve prediction quality using match results, not your private messages</li>
          <li>Comply with law and investigate abuse</li>
        </ul>

        <h2>Legal bases</h2>
        <p>Where GDPR / UK GDPR or similar laws apply, we rely on contract, legitimate interests (security, fraud prevention, affiliate attribution), consent where we ask you to confirm age or accept terms, and legal obligation where required. In Ghana we process personal data in line with the Data Protection Act, 2012 (Act 843).</p>

        <h2>Telegram Stars and payments</h2>
        <p>
          VIP is billed as a Telegram native subscription using Telegram Stars. Telegram (and
          Apple or Google if you pay through their apps) is the payment processor. We receive a
          confirmation that you subscribed or cancelled. We do not store full payment card
          numbers. Refunds follow Telegram and app-store rules.
        </p>

        <h2>Affiliate tracking</h2>
        <p>
          If you become a promoter, we create daily tracked invite links. Pay is prediction cards
          in your bot chat, not cash. You cannot credit your own join. WiamLabs team accounts do
          not earn.
        </p>

        <h2>Who we share information with</h2>
        <ul>
          <li>Telegram — messaging and Stars payments</li>
          <li>Supabase — database hosting</li>
          <li>Our application host — server logs for this bot service</li>
          <li>Football data vendors — match queries only, not your Telegram identity</li>
        </ul>
        <p>We may disclose information if required by law, to protect WiamLabs or other users, or in a genuine transfer of the product under continuing confidentiality.</p>

        <h2>Retention</h2>
        <p>
          Account data is kept while you use the service, then as needed for security and
          disputes. The affiliate ledger is kept while cards remain owed and afterwards for a
          reasonable period to prevent double-pay and fraud. Match predictions are kept to
          operate accuracy records. Website logs are typically 30–90 days.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live you may ask to access, correct, or delete personal data,
          object to certain processing, or lodge a complaint with your authority (in Ghana, the
          Data Protection Commission). Email{" "}
          <a href="mailto:privacy@wiamlabs.com">privacy@wiamlabs.com</a> from the Telegram
          account you use, or include your Telegram numeric ID. We aim to respond within 30 days.
        </p>

        <h2>Age restriction</h2>
        <div className={styles.note}>
          <p>
            WiamSports is for adults 18 years or older (or the higher legal age for
            gambling-related content where you live). We do not knowingly collect data from
            children.
          </p>
        </div>

        <h2>Predictions and betting</h2>
        <p>
          Picks are statistical opinions, not a promise of profit. Bet responsibly. 18+. Help:{" "}
          <a href="https://www.begambleaware.org/">BeGambleAware</a> and your local regulator
          (Ghana: Gaming Commission).
        </p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:privacy@wiamlabs.com">privacy@wiamlabs.com</a>
          <br />
          Bot: <a href="https://t.me/WiamSportsBot">@WiamSportsBot</a>
          <br />
          Company website privacy (this domain generally):{" "}
          <a href="/legal/privacy">wiamlabs.com/legal/privacy</a>
        </p>
      </div>
    </div>
  );
}
