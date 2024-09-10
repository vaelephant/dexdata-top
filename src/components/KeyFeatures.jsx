import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Hybrid Consensus Mechanism',
    description:
      'Combining PoW, PoS, and PoRep ensures secure, efficient, and scalable data transactions',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'AI-Powered Data Marketplace',
    description:
      'Enables decentralized trading of medical data and AI models for advanced oncology research.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Smart Contracts',
    description:
      'Automated, immutable protocols enhance transparency and trust in data trading and AI training.',
    href: '#',
    icon: ArrowPathIcon,
  },

  {
    name: 'Cross-Chain Integration',
    description:
      'Seamlessly connect with other blockchain networks, expanding application scenarios.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Decentralized Governance',
    description:
      'Community-driven decision-making empowers users in platform evolution.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Privacy and Security',
    description:
      'Cutting-edge encryption and privacy technologies protect sensitive medical data.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export function KeyFeatures() {
  return (
    <section
      id="features"
      aria-label="Tokenomics Section"
    //   className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">
              Key Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We have changed the game of AI data
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Every person or enterprise with data can earn income from their
              own data Every person or enterprise with computing power can earn
              income from their own computing power <br></br>Artificial
              intelligence is becoming better with the help of blockchain
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon
                      className="h-5 w-5 flex-none text-indigo-400"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-indigo-400"
                      >
                        {/* Learn more <span aria-hidden="true">→</span> */}
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
