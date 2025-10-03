import { motion } from 'framer-motion';
import { Shield, Clock, HeadphonesIcon, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchQuick from '@/components/search/SearchQuick';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import ServiceCards from '@/components/home/ServiceCards';
import LuxuryCarGrid from '@/components/home/LuxuryCarGrid';
import NewsSection from '@/components/home/NewsSection';
import ContactSection from '@/components/home/ContactSection';
import FloatingButtons from '@/components/layout/FloatingButtons';
import TiltedCard from '@/components/ui/tilted-card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Floating Buttons */}
      <FloatingButtons />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&q=80"
            alt="Luxury car background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Thuê Xe Ô Tô <span className="text-primary">Dễ Dàng</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Hơn 1000+ xe từ sedan đến SUV. Giao xe tận nơi, thủ tục nhanh chóng.
            </p>
          </motion.div>

          {/* Search Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <SearchQuick />
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-8 mt-8"
          >
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm">Bảo hiểm đầy đủ</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm">Không phí ẩn</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm">Hủy miễn phí</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bạn Đang Cần Thuê Loại Xe Nào?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chọn dịch vụ phù hợp với nhu cầu của bạn
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <ServiceCards />
          </motion.div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Giá Minh Bạch */}
            <motion.div variants={staggerItem}>
              <TiltedCard
                containerHeight="280px"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={6}
                scaleOnHover={1.03}
                showTooltip={true}
                captionText="Giá Minh Bạch"
              >
                <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 h-full">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: 'url(/images/gia-minh-bach.jpg)' }}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-blue-900/20" />

                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col justify-end text-white z-10">
                    <div className="w-14 h-14 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Shield className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center drop-shadow-lg">Giá Minh Bạch</h3>
                    <p className="text-sm text-white/90 text-center drop-shadow-md">
                      Không phụ phí ẩn, giá niêm yết rõ ràng. Thanh toán an toàn và bảo mật.
                    </p>
                  </div>
                </div>
              </TiltedCard>
            </motion.div>

            {/* Bảo Hiểm Cơ Bản */}
            <motion.div variants={staggerItem}>
              <TiltedCard
                containerHeight="280px"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={6}
                scaleOnHover={1.03}
                showTooltip={true}
                captionText="Bảo Hiểm Cơ Bản"
              >
                <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 h-full">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: 'url(/images/bao-hiem.jpg)' }}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-green-900/20" />

                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col justify-end text-white z-10">
                    <div className="w-14 h-14 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Clock className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center drop-shadow-lg">Bảo Hiểm Cơ Bản</h3>
                    <p className="text-sm text-white/90 text-center drop-shadow-md">
                      Mọi xe đều có bảo hiểm cơ bản. Tùy chọn nâng cấp gói bảo hiểm toàn diện.
                    </p>
                  </div>
                </div>
              </TiltedCard>
            </motion.div>

            {/* Hỗ Trợ 24/7 */}
            <motion.div variants={staggerItem}>
              <TiltedCard
                containerHeight="280px"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={6}
                scaleOnHover={1.03}
                showTooltip={true}
                captionText="Hỗ Trợ 24/7"
              >
                <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 h-full">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: 'url(/images/ho-tro-247.jpg)' }}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-purple-900/20" />

                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col justify-end text-white z-10">
                    <div className="w-14 h-14 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <HeadphonesIcon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center drop-shadow-lg">Hỗ Trợ 24/7</h3>
                    <p className="text-sm text-white/90 text-center drop-shadow-md">
                      Đội ngũ hỗ trợ luôn sẵn sàng. Hotline khẩn cấp và chat trực tuyến.
                    </p>
                  </div>
                </div>
              </TiltedCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Luxury Cars Grid */}
      <LuxuryCarGrid />

      {/* News Section */}
      <NewsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;