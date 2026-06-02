import {
  Atom,
  Beaker,
  Droplets,
  Footprints,
  Boxes,
  LineChart,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SectionHeader, FadeIn } from "./ui";
import { ProcessFlow } from "./ProcessFlow";
import type { Translation } from "../i18n/translations.en";

type CardKey = keyof Translation["pilot"]["cards"];

const cards: { title: CardKey; desc: CardKey; icon: LucideIcon }[] = [
  { title: "oxidized", desc: "oxidizedDesc", icon: Atom },
  { title: "controlled", desc: "controlledDesc", icon: Beaker },
  { title: "waterRecycling", desc: "waterRecyclingDesc", icon: Droplets },
  { title: "footprint", desc: "footprintDesc", icon: Footprints },
  { title: "cementCopper", desc: "cementCopperDesc", icon: Boxes },
  { title: "digitalEsg", desc: "digitalEsgDesc", icon: LineChart },
  { title: "pilotExpansion", desc: "pilotExpansionDesc", icon: TrendingUp },
];

export function GreenCopperPilotRoom() {
  const { t } = useLanguage();
  const p = t.pilot;

  return (
    <section>
      <SectionHeader kicker="04" title={p.title} subtitle={p.subtitle} />

      <FadeIn>
        <div className="room-card mb-5 p-5">
          <div className="mb-3 text-xs font-600 uppercase tracking-widest text-copper-300">
            {p.flowTitle}
          </div>
          <ProcessFlow />
        </div>
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <FadeIn key={card.title} delay={0.04 * i}>
              <div className="room-card h-full p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mineral-500/15 text-mineral-300">
                  <Icon size={20} />
                </span>
                <h4 className="mt-3 font-600 text-white">{p.cards[card.title]}</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {p.cards[card.desc]}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
