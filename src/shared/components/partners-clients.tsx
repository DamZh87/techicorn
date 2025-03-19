import { Container } from '@/shared/ui/wrapppers/container';
import { Typography } from '@/shared/ui/typography';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, Suspense } from 'react';
import { partnersClients } from '@/shared/constants/partners-clients';
import { Tooltip } from '@nextui-org/tooltip';
import { Button, ButtonGroup } from '@nextui-org/button';

export default function PartnersClients() {
  const { t } = useTranslation('translation');
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
      setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Container flares={true} className="py-24">
      <Suspense fallback={<div>Loading...</div>}>
      <Typography className="text-center mb-10" tag="h2">
      {t(`partners_block.partners`)}
        <span className="animate-pulse">/</span>
        {t(`partners_block.clients`)}
      </Typography>
      </Suspense>
      <Swiper 
        modules={[Autoplay]}
        speed={1000}
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 25500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        // onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
         {partnersClients.map((partnersClient) => (
          <SwiperSlide key={partnersClient.id}>
            <Card className="aspect-[4/3] flex-col justify-between pt-6 px-6">
              <Image
                removeWrapper
                alt="Card background"
                className="max-width:100 height:auto"
                src={partnersClient.image}
              />
              <Tooltip placement="bottom" content={t(`partners_block.gotowebsite`)}>
              <a className='flex self-center pb-2' href={partnersClient.urlPaRT} target="_blank" >{partnersClient.name}</a>
                </Tooltip>
            </Card>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
