import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Globe2,
  Lock,
  Activity,
  Power,
  Wifi,
  EyeOff,
  Server,
  Rocket,
  Check,
  PlayCircle,
  Ban,
  Gauge,
} from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-16 sm:py-20 ${className}`}>{children}</section>
);

const PrimaryButton = ({ children, href = "#", onClick, className = "" }) => (
  <a
    href={href}
    onClick={onClick}
    className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-600 ${className}`}
  >
    {children}
  </a>
);

const SecondaryButton = ({ children, href = "#", className = "" }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition bg-white/70 dark:bg-white/10 text-orange-700 dark:text-orange-200 ring-1 ring-gray-200/80 dark:ring-white/10 hover:bg-white hover:shadow ${className}`}
  >
    {children}
  </a>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-orange-50/60 px-3 py-1 text-xs font-medium text-orange-700 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-200">
    {children}
  </span>
);

const PhoneMock = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative mx-auto aspect-[9/19] w-[260px] overflow-hidden rounded-[2.4rem] border border-black/10 bg-gradient-to-b from-gray-50 to-gray-100 shadow-2xl dark:from-gray-800 dark:to-gray-900 sm:w-[300px]"
  >
    <div className="absolute inset-x-0 top-0 z-10 mx-auto mt-3 h-6 w-40 rounded-full bg-black/10 dark:bg-white/10" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-8 ring-emerald-200/70 dark:bg-emerald-900/40 dark:text-emerald-200 dark:ring-emerald-600/20">
        <Shield className="h-12 w-12" />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Connected</p>
        <p className="mt-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          192.0.2.12
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">WireGuard • Mumbai</p>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200 backdrop-blur dark:bg-white/10 dark:text-gray-200 dark:ring-white/10">
        <Activity className="h-4 w-4" /> Live: 98 Mbps
      </div>
    </div>
  </motion.div>
);

const BeforeAfter = () => {
  const [percent, setPercent] = useState(50);
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-gray-900">
      <div className="relative h-64 sm:h-80">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,0,0,0.06)_2px,transparent_3px)] bg-[length:24px_24px]"
          aria-hidden
        />
        <div className="absolute inset-0 p-6">
          <div className="grid h-full grid-rows-6 gap-3">
            <div className="row-span-1 rounded-lg bg-gray-100 dark:bg-gray-800" />
            <div className="row-span-2 grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-yellow-200/80 dark:bg-yellow-700/40" />
              <div className="rounded-lg bg-gray-100 dark:bg-gray-800" />
              <div className="rounded-lg bg-red-200/80 dark:bg-red-700/40" />
            </div>
            <div className="row-span-1 rounded-lg bg-gray-100 dark:bg-gray-800" />
            <div className="row-span-2 grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-blue-200/80 dark:bg-blue-700/40" />
              <div className="rounded-lg bg-gray-100 dark:bg-gray-800" />
              <div className="rounded-lg bg-pink-200/80 dark:bg-pink-700/40" />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 border-r-2 border-emerald-500/80 bg-gradient-to-b from-emerald-50/80 to-emerald-100/60 dark:from-emerald-900/20 dark:to-emerald-800/10"
          style={{ width: `${percent}%`, clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        >
          <div className="h-full p-6">
            <div className="grid h-full grid-rows-6 gap-3">
              <div className="row-span-1 rounded-lg bg-white/90 ring-1 ring-emerald-200 dark:bg-gray-900/80 dark:ring-emerald-700/30" />
              <div className="row-span-2 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-white/90 ring-1 ring-emerald-200 dark:bg-gray-900/80 dark:ring-emerald-700/30" />
                <div className="rounded-lg bg-white/90 ring-1 ring-emerald-200 dark:bg-gray-900/80 dark:ring-emerald-700/30" />
                <div className="rounded-lg bg-white/90 ring-1 ring-emerald-200 dark:bg-gray-900/80 dark:ring-emerald-700/30" />
              </div>
              <div className="row-span-1 rounded-lg bg-white/90 ring-1 ring-emerald-200 dark:bg-gray-900/80 dark:ring-emerald-700/30" />
              <div className="row-span-2 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-white/90 ring-1 ring-emerald-200 dark:bg-gray-900/80 dark:ring-emerald-700/30" />
                <div className="rounded-lg bg-white/90 ring-1 ring-emerald-200 dark:bg-gray-900/80 dark:ring-emerald-700/30" />
                <div className="rounded-lg bg-white/90 ring-1 ring-emerald-200 dark:bg-gray-900/80 dark:ring-emerald-700/30" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-white/90 to-white/0 p-4 backdrop-blur dark:from-gray-900/80">
          <Gauge className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
          <input
            type="range"
            min="0"
            max="100"
            value={percent}
            onChange={(e)=>setPercent(Number(e.target.value))}
            className="h-1 w-full cursor-ew-resize appearance-none rounded-full bg-emerald-200 accent-emerald-600"
          />
          <span className="w-14 text-right text-xs font-medium text-emerald-700 dark:text-emerald-300">
            {percent}%
          </span>
        </div>
      </div>
    </div>
  );
};

const perfData = [
  { name: "Off", speed: 102 },
  { name: "OpenVPN", speed: 88 },
  { name: "WireGuard", speed: 98 },
];

const CheckItem = ({ children }) => (
  <li className="flex items-start gap-3 text-sm">
    <span className="mt-0.5 rounded-full bg-emerald-100 p-1 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-700/20">
      <Check className="h-3.5 w-3.5" />
    </span>
    <span className="text-gray-700 dark:text-gray-300">{children}</span>
  </li>
);

const PlanCard = ({ title, price, period, cta, highlighted = false, features = [] }) => (
  <div
    className={`flex flex-col rounded-3xl border p-6 shadow-sm transition hover:shadow-lg ${
      highlighted
        ? "border-orange-600 bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/40 dark:to-gray-900"
        : "border-gray-200 bg-white dark:border-white/10 dark:bg-gray-900"
    }`}
  >
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      {highlighted && <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-orange-50/60 px-3 py-1 text-xs font-medium text-orange-700 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-200">Most Popular</span>}
    </div>
    <div className="mb-6 flex items-baseline gap-1">
      <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{price}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
    </div>
    <ul className="mb-6 space-y-2">
      {features.map((f, i) => (
        <CheckItem key={i}>{f}</CheckItem>
      ))}
    </ul>
    <PrimaryButton href="#download" className="mt-auto">{cta}</PrimaryButton>
  </div>
);

const Nav = () => (
  <header className="sticky top-0 z-40 w-full border-b border-gray-200/80 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-gray-900/50">
    <Container>
      <div className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-600 text-white shadow-sm">
            <Shield className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">FOX DNS VPN</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a>
          <a href="#deep-dive" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">How it works</a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">FAQ</a>
        </nav>
        <div className="hidden md:block">
          <PrimaryButton href="#download">
            <PlayCircle className="mr-2 h-5 w-5" /> Download Free
          </PrimaryButton>
        </div>
      </div>
    </Container>
  </header>
);

const Hero = () => (
  <div className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white dark:from-orange-950/30 dark:via-gray-950 dark:to-gray-950">
    <Container className="relative">
      <div className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-orange-50/60 px-3 py-1 text-xs font-medium text-orange-700 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-200">
            <Rocket className="h-4 w-4" /> Powerful Privacy, Unmatched Speed
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Powerful Privacy, Unmatched Speed. Ad‑Free Internet.
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            The only Android VPN you need. Block ads & trackers, encrypt your connection, and browse anonymously with a single tap.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PrimaryButton href="#download">Download Now (Free)</PrimaryButton>
            <SecondaryButton href="#pricing">View Premium Plans</SecondaryButton>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
            <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4"/> No‑Logs</span>
            <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4"/> AES‑256 / ChaCha20</span>
            <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4"/> Global Network</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <PhoneMock />
        </div>
      </div>
    </Container>
  </div>
);

const Problem = () => (
  <Section className="bg-white dark:bg-gray-950">
    <Container>
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Tired of intrusive ads, slow connections, and being tracked?
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {[
          { icon: Ban, title: "Ads", desc: "Annoying ads and pop‑ups ruin your experience." },
          { icon: EyeOff, title: "Privacy", desc: "Your ISP and websites track your every move online." },
          { icon: Wifi, title: "Security", desc: "Public Wi‑Fi is a playground for hackers." },
          { icon: Activity, title: "Speed", desc: "Ads and trackers slow down your browsing." },
        ].map((x, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-900"
          >
            <x.icon className="h-8 w-8 text-orange-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{x.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{x.desc}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </Section>
);

const Features = () => (
  <Section id="features" className="bg-gradient-to-b from-white to-orange-50/40 dark:from-gray-950 dark:to-orange-950/20">
    <Container>
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        FOX DNS VPN: The Simple All‑in‑One Shield for Your Android
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {[
          { icon: Zap, title: "One‑Tap Fast VPN", desc: "Connect to the fastest server instantly. Stream, game, and browse without lag." },
          { icon: Shield, title: "Ad & Tracker Blocking", desc: "Block ads, malware, and phishing sites before they load. Choose specialized lists." },
          { icon: Activity, title: "Unlimited Bandwidth", desc: "No speed caps, no data limits. Enjoy truly unlimited browsing." },
          { icon: Lock, title: "Military‑Grade Encryption", desc: "Protect data with secure protocols including WireGuard® and OpenVPN." },
          { icon: Globe2, title: "Global Server Access", desc: "Access content worldwide with our high‑speed server network." },
          { icon: Power, title: "Always‑On Protection", desc: "Kill Switch ensures your data never leaks, even if the VPN drops." },
        ].map((x, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-900"
          >
            <x.icon className="h-7 w-7 text-orange-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{x.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{x.desc}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </Section>
);

const DeepDive = () => (
  <Section id="deep-dive" className="bg-white dark:bg-gray-950">
    <Container>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Browse Cleaner and Faster</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Go beyond basic ad‑blocking. Choose from curated block lists (Anti‑Malware, Social Trackers, Crypto Miners) or create your own custom rules. Enjoy a cleaner, faster, and safer internet.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <CheckItem>DNS‑level blocking with zero overhead</CheckItem>
            <CheckItem>Per‑app rules & allow‑lists</CheckItem>
            <CheckItem>Auto‑updates for community lists</CheckItem>
          </ul>
        </div>
        <BeforeAfter />
      </div>

      <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm dark:border-white/10 dark:from-gray-900 dark:to-gray-950">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-700/30 dark:bg-emerald-900/20">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                  <Lock className="h-5 w-5" /> Secure Tunnel
                </div>
                <p className="mt-1 text-xs text-emerald-800/80 dark:text-emerald-200/80">Encrypted traffic hidden from ISP & snoopers.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-900">
                <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                  <EyeOff className="h-5 w-5" /> No‑Logs by Design
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">We do not collect activity or connection logs.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-900">
                <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                  <Server className="h-5 w-5" /> Anonymous Servers
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">Your real IP & location are never exposed.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-gray-900">
                <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                  <Globe2 className="h-5 w-5" /> Multi‑Hop Ready
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">Optional routes via two regions for extra privacy.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Be Truly Anonymous Online</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            We enforce a strict no‑logs policy. Your browsing history is your business, not ours. Anonymous servers ensure your real IP and location are hidden from everyone.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <CheckItem>No account email required for premium (token based)</CheckItem>
            <CheckItem>First‑class support for WireGuard®, OpenVPN & TOR</CheckItem>
            <CheckItem>Built‑in Kill Switch & DNS‑leak protection</CheckItem>
          </ul>
        </div>
      </div>

      <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Speed is Our Priority</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Built on the lightning‑fast WireGuard® protocol and optimized at every layer. Experience no buffering, no slowdowns — just a seamless connection.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <CheckItem>Smart server selection with latency awareness</CheckItem>
            <CheckItem>Automatic congestion control tuning</CheckItem>
            <CheckItem>Unlimited bandwidth — no throttling, ever</CheckItem>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-gray-900">
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={perfData} margin={{ top: 10, right: 20, bottom: 0, left: -20 }}>
              <defs>
                <linearGradient id="speed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0284c7" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#0284c7" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#9CA3AF" tickLine={false} axisLine={false} />
              <YAxis stroke="#9CA3AF" tickLine={false} axisLine={false} width={28} />
              <Tooltip contentStyle={{ borderRadius: 12 }} />
              <Area type="monotone" dataKey="speed" stroke="#0284c7" fill="url(#speed)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Container>
  </Section>
);

const Pricing = () => (
  <Section id="pricing" className="bg-gradient-to-b from-white to-orange-50/40 dark:from-gray-950 dark:to-orange-950/20">
    <Container>
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Choose Your Plan. Simple Pricing, No Surprises.
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600 dark:text-gray-300">
        All plans include unlimited bandwidth, ad & tracker blocking, and access to WireGuard®, OpenVPN & TOR modes.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <PlanCard
          title="Free"
          price="₹0"
          period="/ forever"
          cta="Get Started"
          features={[
            "Essential VPN (1 region)",
            "Basic ad & tracker blocking",
            "Speed up to 30 Mbps",
          ]}
        />
        <PlanCard
          highlighted
          title="Premium"
          price="₹199"
          period="/ month"
          cta="Start Premium"
          features={[
            "All regions + streaming",
            "Smart lists & custom rules",
            "Unlimited bandwidth & devices",
            "Kill Switch & Multi‑Hop",
          ]}
        />
        <PlanCard
          title="Lifetime"
          price="₹4999"
          period="one‑time"
          cta="Go Lifetime"
          features={[
            "Everything in Premium",
            "Priority support",
            "Lifetime updates",
          ]}
        />
      </div>
    </Container>
  </Section>
);

const FAQ = () => (
  <Section id="faq" className="bg-white dark:bg-gray-950">
    <Container>
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Frequently Asked Questions</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[{
          q: "Do you keep logs?",
          a: "No. FOX DNS VPN is built with privacy first. We do not collect activity or connection logs.",
        },{
          q: "Which protocols do you support?",
          a: "WireGuard®, OpenVPN (UDP/TCP), and optional TOR routing for maximum anonymity.",
        },{
          q: "Will it work on all Android versions?",
          a: "Yes. Our app supports Android 7.0 and above with best performance on Android 12+.",
        },{
          q: "Can I use one account on multiple devices?",
          a: "Premium allows unlimited devices, subject to fair usage.",
        }].map((it, i) => (
          <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{it.q}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.a}</p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const Download = () => (
  <Section id="download" className="bg-gradient-to-t from-orange-600 to-orange-500 text-white">
    <Container>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Ready to reclaim your internet?</h2>
          <p className="mt-3 text-orange-50/90">Download FOX DNS VPN for Android — free to try, easy to love.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-orange-700 shadow-sm transition hover:shadow-lg">
              <PlayCircle className="h-5 w-5" /> Get on Play Store
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/20">
              APK Download
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <PhoneMock />
        </div>
      </div>
    </Container>
  </Section>
);

const Footer = () => (
  <footer className="border-top border-gray-200 bg-white py-10 dark:border-white/10 dark:bg-gray-950">
    <Container>
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-600 text-white">
            <Shield className="h-5 w-5" />
          </div>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">FOX DNS VPN</span>
        </div>
        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} FOX DNS VPN. All rights reserved. WireGuard® is a registered trademark of Jason A. Donenfeld.
        </p>
        <div className="flex items-center gap-4 text-xs">
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Privacy</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Terms</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Support</a>
        </div>
      </div>
    </Container>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <DeepDive />
        <Pricing />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
