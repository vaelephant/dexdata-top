import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

// const faqs = [
//   [
//     {
//       question: 'What is Datachain and how does it work?',
//       answer:
//         '	•	Datachain is a blockchain-based data trading platform that allows data providers and AI developers to securely exchange valuable data. The platform ensures data integrity and security while facilitating transactions.',
//     },
//     {
//       question: 'How does Datachain ensure the security of my data?',
//       answer: '	•	Datachain uses advanced blockchain technology and encryption methods to ensure that your data storage and transactions are highly secure, protecting your data from unauthorized access.',
//     },
//     {
//       question: 'How do I apply for a job at DexData?',
//       answer:
//         'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
//     },
//   ],
//   [
//     {
//       question: 'What was that testimonial about tax fraud all about?',
//       answer:
//         'DexData is just a software application, ultimately your books are your responsibility.',
//     },
//     {
//       question:
//         'DexData sounds horrible but why do I still feel compelled to purchase?',
//       answer:
//         'This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.',
//     },
//     {
//       question:
//         'I found other companies called DexData, are you sure you can use this name?',
//       answer:
//         'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
//     },
//   ],
//   [
//     {
//       question: 'How do you generate reports?',
//       answer:
//         'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
//     },
//     {
//       question: 'Can we expect more inventory features?',
//       answer: 'In life it’s really better to never expect anything at all.',
//     },
//     {
//       question: 'I lost my password, how do I get into my account?',
//       answer:
//         'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
//     },
//   ],
// ]

const faqs = [
  [
    {
      question: 'What is Datachain and how does it work?',
      answer:
        'Datachain is a blockchain-based data trading platform that allows data providers and AI developers to securely exchange valuable data. The platform ensures data integrity and security while facilitating transactions.',
    },
    {
      question: 'How does Datachain ensure the security of my data?',
      answer:
        'Datachain uses advanced blockchain technology and encryption methods to ensure that your data storage and transactions are highly secure, protecting your data from unauthorized access.',
    },
    {
      question: 'What types of data can I trade on Datachain?',
      answer:
        'Datachain supports a wide range of data types, including structured and unstructured data, suitable for various applications such as AI training, analytics, and research.',
    },
  ],
  [
    {
      question: 'How can my data contribute to improving AI models?',
      answer:
        'By providing high-quality data on Datachain, you help AI developers enhance their models, making AI systems more accurate and effective.',
    },
    {
      question: 'What are the benefits of using blockchain technology for data trading?',
      answer:
        'Blockchain technology offers transparency, immutability, and security, ensuring that all data transactions on Datachain are traceable and verifiable, minimizing the risk of fraud or data tampering.',
    },
    {
      question: 'How do I get started with Datachain?',
      answer:
        'To get started, you can sign up on our platform, create a profile, and start uploading or purchasing data. Detailed guides and support are available to assist you.',
    },
  ],
  [
    {
      question: 'What are the costs associated with using Datachain?',
      answer:
        'The costs on Datachain vary depending on the data transactions and services used. We offer a transparent fee structure, and you can find more details on our pricing page.',
    },
    {
      question: 'How does Datachain handle data privacy and compliance?',
      answer:
        'Datachain is committed to protecting user privacy and ensuring compliance with relevant data protection regulations. We use advanced encryption and access control mechanisms to safeguard your data.',
    },
    {
      question: 'Can I track the usage of my data on Datachain?',
      answer:
        'Yes, Datachain provides detailed transaction records and analytics, allowing you to monitor how your data is being used and by whom.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
