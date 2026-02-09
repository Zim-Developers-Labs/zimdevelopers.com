'use client';

import { Icons } from '@/components/icons';
import { whatsappGroupLink } from '@/lib/constants';
import { siteConfig } from '@/lib/config';
import { Code2, Users, Globe, Trophy, ArrowUpRight, Mail } from 'lucide-react';

const projects = [
  {
    name: 'TheWord',
    domain: 'theword.fyi',
    description: 'A christian bible blog',
    access: 'Public',
  },
  {
    name: 'Zim Developers Blog',
    domain: 'zimdevelopers.com',
    description: 'A developer community',
    access: 'Public',
  },
  {
    name: 'IBZIM',
    domain: 'ibzim.com',
    description: 'Search engine & info hub',
    access: 'Private',
  },
  {
    name: 'Xfinity Pros Inc.',
    domain: 'xfinitypros.com',
    description: 'A cloud services provider',
    access: 'Private',
  },
  {
    name: 'Rapid Range',
    domain: 'rapidrange.shop',
    description: 'An ecommerce platform',
    access: 'Private',
  },
  {
    name: 'Peya Peya',
    domain: 'peyapeya.com',
    description: 'An online banking platform',
    access: 'Private',
  },
];

const rankTiers = [
  {
    tier: 'No Rank',
    points: '0 - 19',
    color: '#71717a',
    highlight: 'Access to all open source projects',
  },
  {
    tier: 'New Comer',
    points: '20 - 1,999',
    color: '#22d3ee',
    highlight: 'Blog credits, merch discounts, career guidance, $5 ad credits',
  },
  {
    tier: 'Contributor',
    points: '2,000 - 6,999',
    color: '#a78bfa',
    highlight: 'Personal links, product promos, paid templates, $10 ad credits',
  },
  {
    tier: 'Leader',
    points: '7,000 - 9,999',
    color: '#f59e0b',
    highlight: 'Admin privileges, GitHub org, PR reviews, Vercel access, $25 ad credits',
  },
  {
    tier: 'Ambassador',
    points: '10,000 - 19,999',
    color: '#ef4444',
    highlight: 'Source code access, admin portals, content studios, dofollow links, $50 ad credits',
  },
  {
    tier: 'Executive',
    points: '20,000+',
    color: '#ec4899',
    highlight: 'Full access to all non buy-in project source code & high-level decision making',
  },
];

export default function BrochureContent() {
  return (
    <div className="mx-auto bg-white" style={{ maxWidth: '794px' }}>
      {/* Page 1: Cover */}
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden bg-zinc-950 text-center"
        style={{ height: '1123px', pageBreakAfter: 'always' }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(315deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-8 px-12">
          <Icons.zimDevLabsIcon className="h-28 w-auto text-white" />
          <div className="flex items-center gap-3">
            <div className="h-px w-16 bg-teal-500" />
            <span className="text-xs font-medium tracking-[0.3em] text-teal-400 uppercase">
              Xfinity Pros Inc. // Better Zimbabwe Program
            </span>
            <div className="h-px w-16 bg-teal-500" />
          </div>
          <h1 className="max-w-lg text-5xl font-bold leading-tight tracking-tight text-white text-balance">
            Zim Developers Labs
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-zinc-400">
            A hierarchical open source movement building cutting-edge tech,
            entertainment, fintech and more solutions for Zimbabwe.
          </p>
          <div className="mt-4 flex flex-col items-center gap-2">
            <span className="text-sm font-medium text-zinc-500">
              {siteConfig.url.web}
            </span>
            <span className="text-sm text-zinc-600">
              {new Date().getFullYear()} Community Brochure
            </span>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600" />
      </section>

      {/* Page 2: Vision & Mission */}
      <section
        className="relative flex flex-col justify-between px-12 py-16"
        style={{ height: '1123px', pageBreakAfter: 'always' }}
      >
        <div>
          <div className="mb-2 flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-teal-600" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal-600 uppercase">
              Our Vision
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900">
            Building a better Zimbabwe
          </h2>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-zinc-600">
            Zim Developers Labs is more than just another "developer community"
            -- it's a hierarchical open source movement where source access is
            determined by rank. We are dedicated to providing cutting-edge tech,
            entertainment, fintech and more solutions that empower our users and
            drive innovation across the country.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-zinc-600">
            It's no secret that most of Zimbabwe is still quite behind western
            countries when it comes to internet technology. Whether or not it's
            because of economic challenges it still comes down to us. As
            developers, we have the power to change things.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-semibold text-zinc-900">
            Four Core Pillars
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <PillarCard
              icon={<Code2 className="h-5 w-5 text-teal-600" />}
              title="Hierarchical Open Source"
              description="Members are ranked based on contributions. Higher ranks unlock exclusive access to private source code and benefits."
            />
            <PillarCard
              icon={<Users className="h-5 w-5 text-teal-600" />}
              title="Beginner Friendly"
              description="Resources and support for developers of all skill levels. Everyone should have the opportunity to learn and grow."
            />
            <PillarCard
              icon={<Globe className="h-5 w-5 text-teal-600" />}
              title="Best Tech"
              description="Adapting and using the best technology available. We use the best tools to build the best solutions."
            />
            <PillarCard
              icon={<Trophy className="h-5 w-5 text-teal-600" />}
              title="Business Intelligence"
              description="Building profitable projects using data and insights to drive decision making and commercial viability."
            />
          </div>
        </div>

        <blockquote className="border-l-2 border-teal-600 pl-6">
          <p className="text-sm leading-relaxed italic text-zinc-700">
            "We are ready to accept passionate developers into our ranks. I
            personally believe in the hierarchical system we have established in
            order to have both a collaborative and profitable community."
          </p>
          <cite className="mt-3 block text-xs font-semibold not-italic text-zinc-900">
            Tinotenda Mazorodze
            <span className="font-normal text-zinc-500">
              {' '}
              -- Founder, Zim Developers Labs
            </span>
          </cite>
        </blockquote>
      </section>

      {/* Page 3: Projects Portfolio */}
      <section
        className="relative flex flex-col px-12 py-16"
        style={{ height: '1123px', pageBreakAfter: 'always' }}
      >
        <div className="mb-2 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-teal-600" />
          <span className="text-xs font-semibold tracking-[0.2em] text-teal-600 uppercase">
            Our Projects
          </span>
        </div>
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900">
          Project Portfolio
        </h2>
        <p className="mb-10 max-w-lg text-base leading-relaxed text-zinc-600">
          Our growing ecosystem of products spans across multiple industries,
          giving members real-world experience on production-grade software.
        </p>

        <div className="flex flex-1 flex-col justify-center gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex items-center justify-between rounded-lg border border-zinc-200 px-6 py-5"
            >
              <div>
                <h3 className="text-base font-semibold text-zinc-900">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-sm font-medium text-zinc-700">
                  {project.domain}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    project.access === 'Public'
                      ? 'bg-teal-50 text-teal-700'
                      : 'bg-zinc-100 text-zinc-500'
                  }`}
                >
                  {project.access} Access
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg bg-zinc-50 px-6 py-5">
          <p className="text-sm leading-relaxed text-zinc-600">
            <strong className="text-zinc-900">How it works:</strong> All
            projects begin as open source. As projects mature and generate
            revenue, source code access becomes rank-gated. This ensures the
            most committed members benefit from the work they contribute to.
          </p>
        </div>
      </section>

      {/* Page 4: Ranking System */}
      <section
        className="relative flex flex-col px-12 py-16"
        style={{ height: '1123px', pageBreakAfter: 'always' }}
      >
        <div className="mb-2 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-teal-600" />
          <span className="text-xs font-semibold tracking-[0.2em] text-teal-600 uppercase">
            The System
          </span>
        </div>
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900">
          Ranking System
        </h2>
        <p className="mb-10 max-w-lg text-base leading-relaxed text-zinc-600">
          Members earn impact points through contributions. As you progress
          through ranks, you unlock increasingly valuable benefits and access.
        </p>

        <div className="flex flex-1 flex-col justify-center gap-4">
          {rankTiers.map((rank) => (
            <div
              key={rank.tier}
              className="flex items-start gap-4 rounded-lg border border-zinc-200 px-5 py-4"
            >
              <div
                className="mt-1 h-3 w-3 flex-shrink-0 rounded-full"
                style={{ backgroundColor: rank.color }}
              />
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {rank.tier}
                  </h3>
                  <span className="text-xs font-medium text-zinc-400">
                    {rank.points} pts
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  {rank.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg bg-zinc-950 px-6 py-5 text-center">
          <p className="text-sm leading-relaxed text-zinc-400">
            Earn points by contributing to projects, writing blog articles,
            designing assets, reviewing pull requests, and more.
          </p>
        </div>
      </section>

      {/* Page 5: Community & Contact */}
      <section
        className="relative flex flex-col items-center justify-between px-12 py-16"
        style={{ height: '1123px', pageBreakAfter: 'always' }}
      >
        <div className="w-full">
          <div className="mb-2 flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-teal-600" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal-600 uppercase">
              Community
            </span>
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900">
            What You Get Access To
          </h2>
          <p className="mb-10 max-w-lg text-base leading-relaxed text-zinc-600">
            Joining Zim Developers Labs gives you immediate access to a range of
            resources and community features.
          </p>

          <div className="grid grid-cols-2 gap-5">
            <FeatureCard
              title="Lab Projects"
              description="Contribute to real-world production apps across fintech, e-commerce, search, and more."
            />
            <FeatureCard
              title="Templates Library"
              description="Access and sell templates built by the community for rapid project bootstrapping."
            />
            <FeatureCard
              title="Community Blog"
              description="Write and publish technical articles. Get image credits with personal links as you rank up."
            />
            <FeatureCard
              title="Hall of Fame"
              description="Top contributors are recognized and celebrated with prominent placement on the leaderboard."
            />
            <FeatureCard
              title="Rank Check"
              description="Track your impact points and progress through the ranking system in real time."
            />
            <FeatureCard
              title="Changelog"
              description="Stay updated with changes and progress across all community projects."
            />
          </div>
        </div>

        <div className="w-full">
          <div className="mb-8 h-px w-full bg-zinc-200" />
          <div className="flex flex-col items-center text-center">
            <Icons.zimDevLabsIcon className="mb-6 h-16 w-auto text-zinc-900" />
            <h3 className="mb-4 text-2xl font-bold text-zinc-900">
              Ready to Join?
            </h3>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-zinc-600">
              It's time to stop complaining about bad software and make it
              ourselves. Join the Zim Developers Labs movement today and start
              earning your rank.
            </p>

            <div className="mb-8 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-zinc-700">
                <ArrowUpRight className="h-4 w-4 text-teal-600" />
                <span className="font-medium">{siteConfig.url.web}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-700">
                <Mail className="h-4 w-4 text-teal-600" />
                <span className="font-medium">WhatsApp Community Group</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-zinc-400">
              <a href={siteConfig.url.github}>GitHub</a>
              <span>{'/'}</span>
              <a href={siteConfig.url.linkedin}>LinkedIn</a>
              <span>{'/'}</span>
              <a href={siteConfig.url.twitter}>Twitter</a>
              <span>{'/'}</span>
              <a href={siteConfig.url.instagram}>Instagram</a>
              <span>{'/'}</span>
              <a href={siteConfig.url.youtube}>YouTube</a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-zinc-400">
              &copy; {new Date().getFullYear()} Zim Developers Labs. All rights
              reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function PillarCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-zinc-200 p-5">
      <div className="mb-3">{icon}</div>
      <h4 className="mb-2 text-sm font-semibold text-zinc-900">{title}</h4>
      <p className="text-xs leading-relaxed text-zinc-500">{description}</p>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-zinc-200 px-5 py-4">
      <h4 className="mb-1.5 text-sm font-semibold text-zinc-900">{title}</h4>
      <p className="text-xs leading-relaxed text-zinc-500">{description}</p>
    </div>
  );
}
