import { motion } from 'framer-motion';
import { Car, DollarSign, Shield, Clock, CheckCircle, TrendingUp, Users, Star, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import { useState, useRef } from 'react';
import CountUp from '@/components/animations/CountUp';
import VariableProximity from '@/components/animations/VariableProximity';
import { toast } from 'sonner';

const BecomeOwner = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carInfo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.');
    setFormData({ name: '', phone: '', email: '', carInfo: '' });
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Thu Nhập Hấp Dẫn',
      description: 'Kiếm thêm 10-20 triệu/tháng',
      detail: 'Từ xe không sử dụng',
      bgImage: '/images/become-owner/reason1.de1f015b.svg',
    },
    {
      icon: Shield,
      title: 'Bảo Hiểm',
      description: 'An tâm tuyệt đối',
      detail: 'Xe được bảo hiểm toàn diện',
      bgImage: '/images/become-owner/reason4.d104019a.svg',
    },
    {
      icon: Clock,
      title: 'Linh Hoạt',
      description: 'Tự do quyết định',
      detail: 'Thời gian & giá cho thuê',
      bgImage: '/images/become-owner/reason2.fab06b0c.svg',
    },
    {
      icon: Users,
      title: 'Hỗ Trợ 24/7',
      description: 'Luôn bên bạn',
      detail: 'Đội ngũ chăm sóc chuyên nghiệp',
      bgImage: '/images/become-owner/reason6.47016261.svg',
    },
    {
      icon: TrendingUp,
      title: 'Dễ Dàng Quản Lý',
      description: 'App thông minh',
      detail: 'Theo dõi thu nhập realtime',
      bgImage: '/images/become-owner/reason3.6d85e29e.svg',
    },
    {
      icon: Star,
      title: 'GPS',
      description: 'Đã được xác minh',
      detail: 'Hỗ trợ cài đặt GPS với giá gốc để quản lí xe an toàn.',
      bgImage: '/images/become-owner/reason5.36910f44.svg',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Đăng Ký Thông Tin',
      description: 'Điền form đăng ký và cung cấp thông tin xe',
    },
    {
      number: '02',
      title: 'Xác Minh Hồ Sơ',
      description: 'Chúng tôi xác minh giấy tờ xe và chủ xe',
    },
    {
      number: '03',
      title: 'Chụp Ảnh & Đăng Tin',
      description: 'Chụp ảnh xe chuyên nghiệp và đăng tin',
    },
    {
      number: '04',
      title: 'Bắt Đầu Cho Thuê',
      description: 'Nhận booking và bắt đầu kiếm thu nhập',
    },
  ];

  const requirements = [
    'Xe đời 2015 trở lên',
    'Giấy tờ xe đầy đủ, hợp lệ',
    'Xe trong tình trạng tốt',
    'Bảo hiểm xe còn hiệu lực',
    'Chủ xe từ 21 tuổi trở lên',
    'CMND/CCCD hợp lệ',
  ];

  const testimonials = [
    {
      name: 'Anh Minh',
      car: 'Toyota Vios 2020',
      income: '15 triệu/tháng',
      rating: 5,
      comment: 'Xe tôi không dùng nhiều, cho thuê qua RentCarVN kiếm thêm thu nhập đáng kể!',
    },
    {
      name: 'Chị Hương',
      car: 'Honda City 2019',
      income: '12 triệu/tháng',
      rating: 5,
      comment: 'Nền tảng uy tín, hỗ trợ tốt. Tôi rất yên tâm khi cho thuê xe.',
    },
    {
      name: 'Anh Tuấn',
      car: 'Mazda 3 2021',
      income: '18 triệu/tháng',
      rating: 5,
      comment: 'Thu nhập ổn định, khách hàng chất lượng. Rất đáng để thử!',
    },
    {
      name: 'Chị Lan',
      car: 'Kia Morning 2020',
      income: '10 triệu/tháng',
      rating: 5,
      comment: 'Dễ dàng quản lý qua app, thanh toán nhanh chóng. Rất hài lòng!',
    },
    {
      name: 'Anh Phong',
      car: 'Hyundai Accent 2022',
      income: '16 triệu/tháng',
      rating: 5,
      comment: 'Xe mới mua, cho thuê để trả góp. Hiệu quả hơn mong đợi!',
    },
    {
      name: 'Chị Nga',
      car: 'VinFast Fadil 2021',
      income: '11 triệu/tháng',
      rating: 5,
      comment: 'Hỗ trợ nhiệt tình, xử lý sự cố nhanh. Rất chuyên nghiệp!',
    },
    {
      name: 'Anh Khoa',
      car: 'Honda CR-V 2020',
      income: '22 triệu/tháng',
      rating: 5,
      comment: 'Xe SUV được nhiều người thuê. Thu nhập vượt kỳ vọng!',
    },
    {
      name: 'Chị Thu',
      car: 'Toyota Camry 2021',
      income: '25 triệu/tháng',
      rating: 5,
      comment: 'Khách hàng sang trọng, giá thuê cao. Rất đáng đầu tư!',
    },
    {
      name: 'Anh Dũng',
      car: 'Mitsubishi Xpander 2022',
      income: '17 triệu/tháng',
      rating: 5,
      comment: '7 chỗ rất được ưa chuộng. Lịch thuê gần như kín!',
    },
    {
      name: 'Chị Mai',
      car: 'Ford Ranger 2020',
      income: '20 triệu/tháng',
      rating: 5,
      comment: 'Bán tải thuê dài hạn, thu nhập ổn định mỗi tháng!',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/images/become-owner/Trở Thành Chủ Xe.png')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trở Thành <span className="text-primary">Chủ Xe</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Biến xe không sử dụng thành nguồn thu nhập thụ động. 
              Kiếm thêm 10-20 triệu/tháng một cách dễ dàng và an toàn.
            </p>
            <Button size="lg" className="text-lg px-8" onClick={() => {
              document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Đăng Ký Ngay
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Income Estimator Section */}
      <section className="py-16 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-8 md:p-12 rounded-3xl border-2 border-primary/20 shadow-2xl backdrop-blur-sm">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Ước Tính Thu Nhập
                </h2>
                <p className="text-lg text-muted-foreground">
                  Xe của bạn có thể kiếm được bao nhiêu?
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group relative bg-gradient-to-br from-card to-primary/5 p-8 rounded-2xl text-center border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-5xl font-bold text-primary mb-3">
                      <CountUp from={0} to={800} duration={2} />K
                    </div>
                    <div className="text-sm font-semibold mb-1">Giá thuê/ngày</div>
                    <div className="text-xs text-muted-foreground">Xe phổ thông</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group relative bg-gradient-to-br from-card to-primary/5 p-8 rounded-2xl text-center border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-5xl font-bold text-primary mb-3">
                      <CountUp from={0} to={15} duration={2} />
                    </div>
                    <div className="text-sm font-semibold mb-1">Ngày thuê/tháng</div>
                    <div className="text-xs text-muted-foreground">Trung bình</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="group relative bg-gradient-to-br from-primary/20 to-primary/10 p-8 rounded-2xl text-center border-2 border-primary shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-5xl font-bold text-primary mb-3">
                      <CountUp from={0} to={12} duration={2} /> triệu
                    </div>
                    <div className="text-sm font-bold mb-1">Thu nhập/tháng</div>
                    <div className="text-xs text-muted-foreground">Ước tính</div>
                  </div>
                </motion.div>
              </div>

              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="hidden md:flex items-center gap-2 text-muted-foreground">
                  <div className="text-sm">800K × 15 ngày</div>
                  <ArrowRight className="h-4 w-4" />
                </div>
                <div className="text-2xl font-bold text-primary">= 12 triệu/tháng</div>
              </div>

              <div className="mt-10 text-center space-y-6">
                <p className="text-sm text-muted-foreground italic">
                  * Số liệu thực tế phụ thuộc vào loại xe, tình trạng xe và thời gian cho thuê
                </p>
                <Button size="lg" className="text-lg px-10 shadow-lg hover:shadow-xl transition-all" onClick={() => {
                  document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Đăng Ký Ngay Để Biết Chính Xác
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Lợi Ích Khi Trở Thành Chủ Xe
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những lý do bạn nên cho thuê xe qua RentCarVN
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group relative bg-card p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border-2 border-transparent hover:border-primary/20 overflow-hidden min-h-[280px]"
                >
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img 
                      src={benefit.bgImage}
                      alt=""
                      className="w-full h-full object-contain opacity-[0.15] group-hover:opacity-[0.25] transition-all duration-300 brightness-0 dark:brightness-100 dark:invert saturate-0"
                      style={{
                        filter: 'hue-rotate(var(--primary-hue, 0deg))',
                      }}
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-primary font-semibold mb-1">{benefit.description}</p>
                    <p className="text-sm text-muted-foreground">{benefit.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
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
              Quy Trình Đăng Ký
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chỉ 4 bước đơn giản để bắt đầu kiếm thu nhập
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative"
              >
                <div className="bg-card p-6 rounded-xl shadow-card h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Yêu Cầu Đối Với Xe & Chủ Xe
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{req}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Câu Chuyện Thành Công
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những chủ xe đã kiếm được thu nhập ổn định
            </p>
          </motion.div>
        </div>

        {/* Row 1: Scroll Right */}
        <div className="mb-6">
          <div className="flex gap-6 overflow-hidden">
            <motion.div
              className="flex gap-6 flex-shrink-0"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...testimonials.slice(0, 5), ...testimonials.slice(0, 5)].map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[380px] flex-shrink-0 bg-card p-6 rounded-xl shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl group"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic min-h-[60px]">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.car}</div>
                    <div className="text-sm text-primary font-bold mt-2 flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      Thu nhập: {testimonial.income}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 2: Scroll Left */}
        <div className="mb-6">
          <div className="flex gap-6 overflow-hidden">
            <motion.div
              className="flex gap-6 flex-shrink-0"
              animate={{
                x: [-1920, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...testimonials.slice(5, 10), ...testimonials.slice(5, 10)].map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[380px] flex-shrink-0 bg-card p-6 rounded-xl shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl group"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic min-h-[60px]">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.car}</div>
                    <div className="text-sm text-primary font-bold mt-2 flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      Thu nhập: {testimonial.income}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-lg px-10" onClick={() => {
            document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Bạn Cũng Có Thể Thành Công!
          </Button>
        </div>
      </section>

      {/* Register Form Section */}
      <section id="register-form" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Đăng Ký Ngay Hôm Nay
              </h2>
              <p className="text-muted-foreground">
                Điền thông tin để chúng tôi liên hệ tư vấn chi tiết
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-card">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Họ và tên *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Số điện thoại *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0901 234 567"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="carInfo" className="block text-sm font-medium mb-2">
                    Thông tin xe *
                  </label>
                  <Textarea
                    id="carInfo"
                    required
                    rows={4}
                    value={formData.carInfo}
                    onChange={(e) => setFormData({ ...formData, carInfo: e.target.value })}
                    placeholder="VD: Toyota Vios 2020, màu trắng, biển số 51A-12345..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Gửi Đăng Ký
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Bằng việc đăng ký, bạn đồng ý với{' '}
                  <a href="/terms" className="text-primary hover:underline">
                    Điều khoản dịch vụ
                  </a>{' '}
                  và{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    Chính sách bảo mật
                  </a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BecomeOwner;

