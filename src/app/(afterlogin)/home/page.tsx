import NavMenu from "../_component/NavMenu/NavMenu";
import ImageSlider from "../_component/ImageSlider/ImageSlider";
import styles from './page.module.css'
import TodayWeatherBox from "./_component/TodayWeatherBox/TodayWeatherBox";
import TodayLuck from "./_component/TodayLuckBox/TodayLuckBox";
import HotPostList from "./_component/HotPostList/HotPostList";
import AdsBox from "../_component/AdsBox/AdsBox";
import FestivalAria from "./_component/FestivalContent/FestivalAria";
import ChatbotButton from "../_component/ChatbotButton/ChatbotButton";
import Footer from '../_component/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.body}>
      <NavMenu isBarVisible={false} />
      <div className={styles.section}>
        <div className={styles.content}>
          <div className={styles.slider}>
            <ImageSlider />
          </div>
          <div className={styles.todayBox}>
            <TodayWeatherBox />
            <TodayLuck />
          </div>
        </div>
        <div className={styles.content}>
          <HotPostList />
          <AdsBox />
        </div>
        <FestivalAria />
      </div>
      <ChatbotButton />
      <Footer />
    </div>
  );
}
