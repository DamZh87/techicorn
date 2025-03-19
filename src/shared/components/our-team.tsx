import { Container } from '@/shared/ui/wrapppers/container';
import { Card, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { useDisclosure } from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Typography } from '@/shared/ui/typography';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { teammate } from '../constants/teammate';
import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter} from "@nextui-org/modal";


export default function OurTeam() {
const { t } = useTranslation('translation');
const [isClient, setIsClient] = useState(false);
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];


  useEffect(() => {
      setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Container flares={true} className="py-24">
      <Typography className="text-center mb-10" tag="h2">
      {t(`our_team.team_label`)}
      </Typography>
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
        {teammate.map((team) => (
          <SwiperSlide key={team.id}>
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none aspect-[10/16]"
            >
              <Image
                alt="Woman listing to music"
                className="object-cover w-full h-full aspect-[10/16]"
                src={team.image}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Typography className="text-tiny text-white/80 me-1 text-nowrap overflow-hidden overflow-ellipsis">
               {t(`our_team.${team.name}`)}
                  <br />
                  {t(`our_team.${team.spec}`)}
                </Typography>
                <Button onPress={onOpen}
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                   {t(`our_team.${team.read}`)}
                </Button>

                <Modal isOpen={isOpen} size="5xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{t(`our_team.${team.name}`)}</ModalHeader>
              <ModalBody className="custom-modal">
                  <h4 className="font-bold mb-3">
                        {t(`our_team.${team.spec}`)}
                  </h4>
                          <p>
                            Иван Иванов – талантливый и опытный фронтенд-разработчик с более чем 5-летним стажем в создании эффективных и высококачественных пользовательских интерфейсов. Он обладает глубокими знаниями в области HTML, CSS, JavaScript и популярных библиотек и фреймворков, таких как React, Vue.js и Angular. В своей работе Иван всегда стремится к тому, чтобы интерфейс был не только функциональным, но и эстетически привлекательным, обеспечивая удобство и комфорт для пользователя.
                          </p>
                             <h5 className="font-bold mt-4">Ключевые навыки:</h5>
                                    <ul className='list-disc p-3'>
                                          <li> HTML, CSS, JavaScript (ES6+)</li>
                                          <li> Работа с фреймворками: React, Vue.js, Angular</li>
                                          <li> Адаптивный и кроссбраузерный дизайн</li>
                                          <li> Оптимизация производительности веб-приложений</li>
                                          <li> Интеграция с RESTful API и GraphQL</li>
                                          <li> Управление состоянием (Redux, MobX)</li>
                                          <li> Опыт работы с системами контроля версий (Git)</li>
                                     </ul>

  <p className="mt-3">
    Иван всегда открыт для новых вызовов и любит работать в команде, где ценится креативный подход и желание постоянно учиться. Он также активно участвует в обсуждениях по улучшению процессов и внедрению лучших практик в разработку.
  </p>

</ModalBody>


              </>
          )}
        </ModalContent>
      </Modal>

              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
