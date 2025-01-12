import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from './Typography';
import Section from "../Section";
import Heading from '../Heading';
import { useNavigate, useLocation, } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  borderRadius: 12,
  background: '#000',
  opacity: 0.6,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://images.unsplash.com/photo-1722098483852-d2d0446f7754?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'BASKETBALL (B)',
    width: '40%',
    STitle: 'BASEKETBALL(B)'
  },
  {
    url: 'https://preview.redd.it/hi774nzld7471.jpg?auto=webp&s=4d36a8725b03facb2bd972dcdf370db3502f3a41',
    title: 'BASKETBALL (GIRLS)',
    width: '20%',
    STitle: 'BASKETBALL(GIRLS)'
  },
  {
    url: 'https://www.aljazeera.com/wp-content/uploads/2024/12/GettyImages-2191816878-1735548837.jpg?resize=770%2C513&quality=80',
    title: 'BOX CRICKET',
    width: '38%',
    STitle: 'BOXCRICKET'
  },
  {
    url: 'https://www.fivb.com/wp-content/uploads/2024/03/rules-v1.jpg',
    title: 'Volley Ball',
    width: '38%',
    STitle: 'VOLLEYBALL'
  },
  {
    url: 'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/ngdjbafv3twathukjbq2',
    title: 'Field Football',
    width: '38%',
    STitle: 'FIELDFOOTBALL'
  },
  {
    url: 'https://leipglo.com/wp-content/uploads/2024/08/table-tennis-1208377_1280.jpg',
    title: 'THROWBALL (G)',
    width: '22%',
    STitle: 'THROWBALL(G)'
  },
  {
    url: 'https://www.prokabaddi.com/static-assets/waf-images/76/9d/2e/16-9/epjAOOvvtN.jpg?v=2.27&w=1200',
    title: 'Kabaddi',
    width: '40%',
    STitle: 'KABADDI'
  },
  {
    url: 'https://nhdsports.com/wp-content/uploads/2024/07/a-mans-hand-resting-on-a-board-game-1-scaled.jpg.webp',
    title: ' RINK FOOTBALL (G)',
    width: '20%',
    STitle: 'RINKFOOTBALL(G)'
  },
  {
    url: 'https://tugofwar-twif.org/wp-content/uploads/2024/10/7-800x445.jpg',
    title: 'Tug Of War',
    width: '38%',
    STitle: 'TUGOFWAR(B)'
  },
];

const paEvent = [
  {
    url: 'https://images.unsplash.com/photo-1722098483852-d2d0446f7754?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Solo singing (western)',
    width: '40%',
    STitle: 'SoloSinging(western)'
  },
  {
    url: 'https://preview.redd.it/hi774nzld7471.jpg?auto=webp&s=4d36a8725b03facb2bd972dcdf370db3502f3a41',
    title: 'Solo singing (regional)',
    width: '20%',
    STitle: 'Solosinging{regional} '
  },
  {
    url: 'https://www.aljazeera.com/wp-content/uploads/2024/12/GettyImages-2191816878-1735548837.jpg?resize=770%2C513&quality=80',
    title: 'Duet Singing',
    width: '38%',
    STitle: 'DuetSinging'
  },
  {
    url: 'https://www.fivb.com/wp-content/uploads/2024/03/rules-v1.jpg',
    title: 'Instrumental',
    width: '38%',
    STitle: 'Instrumental'
  },
  {
    url: 'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/ngdjbafv3twathukjbq2',
    title: 'FOOTBALL',
    width: '38%',
    STitle: 'FOOTBALL'
  },
  {
    url: 'https://leipglo.com/wp-content/uploads/2024/08/table-tennis-1208377_1280.jpg',
    title: 'Solo Dancing (western)',
    width: '22%',
    STitle: 'SoloDancing(Western)'
  },
  {
    url: 'https://www.prokabaddi.com/static-assets/waf-images/76/9d/2e/16-9/epjAOOvvtN.jpg?v=2.27&w=1200',
    title: 'Solo Dancing (regional)',
    width: '40%',
    STitle: 'SoloDancing(Regional)'
  },
  {
    url: 'https://nhdsports.com/wp-content/uploads/2024/07/a-mans-hand-resting-on-a-board-game-1-scaled.jpg.webp',
    title: 'Solo Dance Battle',
    width: '20%',
    STitle: 'SoloDanceBattle'
  },
  {
    url: 'https://tugofwar-twif.org/wp-content/uploads/2024/10/7-800x445.jpg',
    title: 'Group Dance',
    width: '38%',
    STitle: 'GroupDance'
  },
  {
    url: 'https://tugofwar-twif.org/wp-content/uploads/2024/10/7-800x445.jpg',
    title: 'Fashion Show',
    width: '38%',
    STitle: 'FashionShow'
  },
  {
    url: 'https://tugofwar-twif.org/wp-content/uploads/2024/10/7-800x445.jpg',
    title: 'Duet Dancing',
    width: '38%',
    STitle: 'DuetDancing'
  },
];

const laEvent = [
  {
    url: 'https://images.unsplash.com/photo-1722098483852-d2d0446f7754?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Solo singing (western)',
    width: '40%',
    STitle: 'SoloSinging(western)'
  },
  {
    url: 'https://preview.redd.it/hi774nzld7471.jpg?auto=webp&s=4d36a8725b03facb2bd972dcdf370db3502f3a41',
    title: 'Solo singing (regional)',
    width: '20%',
    STitle: 'Solosinging{regional} '
  },
  {
    url: 'https://www.aljazeera.com/wp-content/uploads/2024/12/GettyImages-2191816878-1735548837.jpg?resize=770%2C513&quality=80',
    title: 'Duet Singing',
    width: '38%',
    STitle: 'DuetSinging'
  },
  {
    url: 'https://www.fivb.com/wp-content/uploads/2024/03/rules-v1.jpg',
    title: 'Instrumental',
    width: '38%',
    STitle: 'Instrumental'
  },
  {
    url: 'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/ngdjbafv3twathukjbq2',
    title: 'FOOTBALL',
    width: '38%',
    STitle: 'FOOTBALL'
  },
  {
    url: 'https://leipglo.com/wp-content/uploads/2024/08/table-tennis-1208377_1280.jpg',
    title: 'Solo Dancing (western)',
    width: '22%',
    STitle: 'SoloDancing(Western)'
  },
  {
    url: 'https://www.prokabaddi.com/static-assets/waf-images/76/9d/2e/16-9/epjAOOvvtN.jpg?v=2.27&w=1200',
    title: 'Solo Dancing (regional)',
    width: '40%',
    STitle: 'SoloDancing(Regional)'
  },
  {
    url: 'https://nhdsports.com/wp-content/uploads/2024/07/a-mans-hand-resting-on-a-board-game-1-scaled.jpg.webp',
    title: 'Solo Dance Battle',
    width: '20%',
    STitle: 'SoloDanceBattle'
  },
  {
    url: 'https://tugofwar-twif.org/wp-content/uploads/2024/10/7-800x445.jpg',
    title: 'Group Dance',
    width: '38%',
    STitle: 'GroupDance'
  },
  {
    url: 'https://tugofwar-twif.org/wp-content/uploads/2024/10/7-800x445.jpg',
    title: 'Fashion Show',
    width: '38%',
    STitle: 'FashionShow'
  },
  {
    url: 'https://tugofwar-twif.org/wp-content/uploads/2024/10/7-800x445.jpg',
    title: 'Duet Dancing',
    width: '38%',
    STitle: 'DuetDancing'
  },
];

function Grid() {
  const navigate = useNavigate();

  const handleClick = (title, STitle) => {
    // console.log('Title:', title);
    // console.log('STitle:', STitle);
    navigate(`/game/${title}`, { state: { STitle } });
  };
  return (
    <Section id="event">
      <div className="m-10">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-">
        <SwiperSlide>
          <Container component="section" sx={{ mt: 8, mb: 4, }}>
            <div className="flex flex-col items-center justify-center text-center ">
              <h1 className="h1 mb-2">Events</h1>
              <h4 className="h5 max-w-[50rem] mb-2 text-n-4">
                Illuminate your potential and explore new horizons with the enchanting events of 'Lumière Enchantée.'
              </h4>
            </div>


            <Box className='gridContainer' sx={{ mt: 8, display: 'flex', flexWrap: 'wrap', gap: 1, }}>
              {images.map((image) => (
                <ImageIconButton
                  key={image.title}
                  style={{
                    width: image.width,
                  }}
                  onClick={() => handleClick(image.title, image.STitle)}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      borderRadius: 4,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 40%',
                      backgroundImage: `url(${image.url})`,
                    }}
                  />
                  <ImageBackdrop className="imageBackdrop" />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      display: 'flex',
                      borderRadius: 4,
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'common.white',
                    }}
                  >
                    <Typography
                      component="h3"
                      variant="h6"
                      color="inherit"
                      className="imageTitle"
                    >
                      {image.title}
                      <div className="imageMarked" />
                    </Typography>
                  </Box>
                </ImageIconButton>
              ))}
            </Box>
          </Container>
        </SwiperSlide>
        
        <SwiperSlide>
        <Container component="section" sx={{ mt: 8, mb: 4, }}>
            <div className="flex flex-col items-center justify-center text-center ">
              <h1 className="h1 mb-2">Events</h1>
              <h4 className="h5 max-w-[50rem] mb-2 text-n-4">
                Illuminate your potential and explore new horizons with the enchanting events of 'Lumière Enchantée.'
              </h4>
            </div>


            <Box className='gridContainer' sx={{ mt: 8, display: 'flex', flexWrap: 'wrap', gap: 1, }}>
              {paEvent.map((image) => (
                <ImageIconButton
                  key={image.title}
                  style={{
                    width: image.width,
                  }}
                  onClick={() => handleClick(image.title, image.STitle)}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      borderRadius: 4,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 40%',
                      backgroundImage: `url(${image.url})`,
                    }}
                  />
                  <ImageBackdrop className="imageBackdrop" />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      display: 'flex',
                      borderRadius: 4,
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'common.white',
                    }}
                  >
                    <Typography
                      component="h3"
                      variant="h6"
                      color="inherit"
                      className="imageTitle"
                    >
                      {image.title}
                      <div className="imageMarked" />
                    </Typography>
                  </Box>
                </ImageIconButton>
              ))}
            </Box>
          </Container>
          </SwiperSlide>

          <SwiperSlide>
        <Container component="section" sx={{ mt: 8, mb: 4, }}>
            <div className="flex flex-col items-center justify-center text-center ">
              <h1 className="h1 mb-2">Events</h1>
              <h4 className="h5 max-w-[50rem] mb-2 text-n-4">
                Illuminate your potential and explore new horizons with the enchanting events of 'Lumière Enchantée.'
              </h4>
            </div>


            <Box className='gridContainer' sx={{ mt: 8, display: 'flex', flexWrap: 'wrap', gap: 1, }}>
              {paEvent.map((image) => (
                <ImageIconButton
                  key={image.title}
                  style={{
                    width: image.width,
                  }}
                  onClick={() => handleClick(image.title, image.STitle)}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      borderRadius: 4,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 40%',
                      backgroundImage: `url(${image.url})`,
                    }}
                  />
                  <ImageBackdrop className="imageBackdrop" />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      display: 'flex',
                      borderRadius: 4,
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'common.white',
                    }}
                  >
                    <Typography
                      component="h3"
                      variant="h6"
                      color="inherit"
                      className="imageTitle"
                    >
                      {image.title}
                      <div className="imageMarked" />
                    </Typography>
                  </Box>
                </ImageIconButton>
              ))}
            </Box>
          </Container>
          </SwiperSlide>
      </Swiper>
      </div>
    </Section>
  );
}

export default Grid;