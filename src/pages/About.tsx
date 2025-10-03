import { motion } from 'framer-motion';
import { Car, Users, Shield, Award, Target, Heart, TrendingUp, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

const About = () => {
  const stats = [
    { icon: Car, value: '1000+', label: 'Xe đa dạng' },
    { icon: Users, value: '50K+', label: 'Khách hàng' },
    { icon: Award, value: '4.8/5', label: 'Đánh giá' },
    { icon: TrendingUp, value: '99%', label: 'Hài lòng' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'An Toàn & Bảo Mật',
      description: 'Cam kết bảo vệ thông tin và an toàn cho mọi chuyến đi của bạn.',
    },
    {
      icon: Heart,
      title: 'Tận Tâm Phục Vụ',
      description: 'Đội ngũ hỗ trợ 24/7 luôn sẵn sàng giải đáp mọi thắc mắc.',
    },
    {
      icon: Target,
      title: 'Minh Bạch & Rõ Ràng',
      description: 'Giá cả công khai, không phí ẩn, thanh toán an toàn.',
    },
  ];

  const milestones = [
    { year: '2020', title: 'Thành lập', description: 'Ra mắt nền tảng cho thuê xe' },
    { year: '2021', title: 'Mở rộng', description: 'Phủ sóng 10 tỉnh thành' },
    { year: '2022', title: 'Phát triển', description: 'Đạt 20,000 khách hàng' },
    { year: '2023', title: 'Đột phá', description: 'Top 3 nền tảng thuê xe VN' },
    { year: '2024', title: 'Hiện tại', description: '50,000+ khách hàng tin dùng' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Về <span className="text-primary">RentCarVN</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Nền tảng cho thuê xe ô tô hàng đầu Việt Nam, kết nối chủ xe và khách hàng 
              một cách nhanh chóng, an toàn và tiện lợi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Sứ Mệnh Của Chúng Tôi
            </h2>
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RentCarVN ra đời với sứ mệnh <strong className="text-foreground">mang đến trải nghiệm thuê xe 
                tốt nhất</strong> cho người Việt Nam. Chúng tôi tin rằng mọi người đều xứng đáng có được 
                những chuyến đi an toàn, tiện lợi và đáng nhớ.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Với công nghệ hiện đại và đội ngũ tận tâm, chúng tôi không ngừng cải thiện dịch vụ 
                để <strong className="text-foreground">kết nối chủ xe và khách hàng</strong> một cách 
                hiệu quả nhất, tạo ra giá trị cho cả hai bên.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Hành Trình Phát Triển
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Từ những ngày đầu tiên đến hiện tại
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="relative mb-8 md:ml-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[4.5rem] top-2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                  
                  <div className="bg-card p-6 rounded-xl shadow-card">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sẵn Sàng Bắt Đầu Chuyến Đi?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hàng ngàn xe đang chờ bạn khám phá. Đặt xe ngay hôm nay!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/search"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Tìm Xe Ngay
              </a>
              <a
                href="/become-owner"
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
              >
                Trở Thành Chủ Xe
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

