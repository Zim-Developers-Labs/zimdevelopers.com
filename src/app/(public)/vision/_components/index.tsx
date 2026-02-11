import { Icons } from '@/components/icons';
import { ExternalLink, Users, Code2, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ZimDevLabsVision() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      </div>
      <div className="relative isolate overflow-hidden bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div
          aria-hidden="true"
          className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        >
          <div
            style={{
              clipPath:
                'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
            }}
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#008080] to-[#2dd4bf] opacity-30"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-lg leading-8 font-semibold tracking-tight text-teal-600">
              The Labs Vision
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building a better Zimbabwe
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Zim Developers Labs is more than just another "developer
              community", it's a hierarchical open source movement where source
              access is determined by rank. We are dedicated to providing
              cutting edge tech, entertainment, fintech and more solutions that
              empower our users and drive innovation across the country.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <figure className="border-l border-teal-600 pl-8">
                <blockquote className="text-xl leading-8 font-semibold tracking-tight text-gray-900">
                  <p>
                    “We are ready to accept passionate developers into our
                    ranks. I personally believe in the hierarchical system we
                    have established in order to have both a collaborative and
                    profitable community.”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <Image
                    alt="Tino Mazorodze, Founder of Zim Developers"
                    src="/avatars/tech.png"
                    className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                    height={256}
                    width={256}
                  />
                  <div className="text-sm leading-6">
                    <Link
                      href="https://www.tinotendamazorodze.com"
                      className="font-semibold text-gray-900"
                    >
                      Tinotenda Mazorodze
                    </Link>
                    <div className="text-gray-600">
                      Founder, Zim Developers Labs
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
              <p>
                It's no secret that most of Zimbabwe is still quite behind
                western countries when it comes to internet technology. Whether
                or not its because of economic challenges it still comes down to
                us. Zim Developers Labs focuses on four core pillars to ensure
                optimal collaboration and profitability:
              </p>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <Code2 className="mt-1 h-5 w-5 flex-none text-teal-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Hierarchical Open Source.
                    </strong>{' '}
                    We operate on a hierarchical system where members are ranked
                    based on their contributions and impact. As members progress
                    through the ranks, they gain access to exclusive benefits.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Users className="mt-1 h-5 w-5 flex-none text-teal-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Beginner Friendly.
                    </strong>{' '}
                    We are committed to providing resources and support for
                    developers of all skill levels. Everyone should have the
                    opportunity to learn and grow in the tech industry.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Globe className="mt-1 h-5 w-5 flex-none text-teal-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Best Tech .
                    </strong>{' '}
                    Adapting and using the best technology available for
                    suitable use cases. We are not about reinventing the wheel,
                    we are about using the best tools to build the best
                    solutions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Icons.serverStackIcon className="mt-1 h-5 w-5 flex-none text-teal-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Business Intelligence.
                    </strong>{' '}
                    We are not just about building cool projects, we are about
                    building profitable projects. We focus on using data and
                    insights to drive our decision making and ensure that our
                    projects are commercially viable.
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                The System
              </h2>
              <p className="mt-6">
                Zim Developers Labs operates on a hierarchical system where
                members are ranked based on their contributions and impact. As
                members progress through the ranks, they gain access to
                exclusive benefits. This system not only promotes collaboration
                but also ensures that the most committed and impactful members
                are recognized and empowered to drive the Labs' mission forward.
              </p>
              <div className="mt-6 flex items-center gap-x-6">
                <Link
                  href="/docs/zim-developers-labs-brochure.pdf"
                  className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500"
                >
                  Download Brochure
                </Link>
                <Link
                  href="/projects"
                  className="text-sm leading-6 font-semibold text-gray-900"
                >
                  Explore the Labs{' '}
                  <span aria-hidden="true">
                    <ExternalLink className="inline h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
