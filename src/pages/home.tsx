// import HeroSection from '@/shared/components/hero-section';
// import OurTeam from '@/shared/components/our-team';
// import Services from '@/shared/components/services';
// import Faq from '@/shared/components/faq';
// import PartnersClients from '@/shared/components/partners-clients';
// import GetAdvice from '@/shared/components/forms/get-advice';

// export function HomePage() {
//   return (
//     <main>
//       <HeroSection />
//       <PartnersClients />
//       <Services />
//       <Faq flares={true} />
//       <OurTeam />
//       <GetAdvice />
//     </main>
//   );
// }


import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import HeroSection from '@/shared/components/hero-section';
import OurTeam from '@/shared/components/our-team';
import Services from '@/shared/components/services';
import Faq from '@/shared/components/faq';
import PartnersClients from '@/shared/components/partners-clients';
import GetAdvice from '@/shared/components/forms/get-advice';

type Repo = {
  name: string;
  stargazers_count: number;
};

const getServerSideProps = (async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo: Repo = await res.json();
  return { props: { repo } };
}) satisfies GetServerSideProps<{ repo: Repo }>;

export default function HomePage({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <HeroSection />
      <PartnersClients />
      <Services />
      <Faq flares={true} />
      <OurTeam />
      <GetAdvice />
      <p>GitHub Stars: {repo.stargazers_count}</p>
    </main>
  );
}
