import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import { Link } from 'react-router-dom';

const newsData = [
  {
    id: 1,
    title: 'Khuyến mãi đặc biệt Tết Nguyên Đán 2025',
    excerpt: 'Giảm giá 20% cho tất cả dòng xe 7 chỗ trong dịp Tết. Đặt sớm để nhận ưu đãi tốt nhất.',
    date: '2025-01-15',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&q=80',
  },
  {
    id: 2,
    title: 'Ra mắt dịch vụ thuê xe tự lái mới',
    excerpt: 'Dịch vụ thuê xe tự lái với quy trình đơn giản, nhanh chóng. Giao xe tận nơi trong 2 giờ.',
    date: '2025-01-10',
    image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400&h=300&q=80',
  },
  {
    id: 3,
    title: 'Cập nhật dàn xe VinFast VF8 và VF9',
    excerpt: 'Bổ sung thêm 50 xe điện VinFast vào đội xe cho thuê. Trải nghiệm công nghệ xanh hiện đại.',
    date: '2025-01-05',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=300&q=80',
  },
];

const NewsSection = () => {
  return (
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
            Tin Tức Và Sự Kiện
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cập nhật những thông tin mới nhất về dịch vụ và ưu đãi từ RentCarVN
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {newsData.map((news) => (
            <motion.article
              key={news.id}
              variants={staggerItem}
              className="group bg-card rounded-xl shadow-card overflow-hidden hover:shadow-hover transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={news.date}>
                    {new Date(news.date).toLocaleDateString('vi-VN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {news.excerpt}
                </p>
                
                <Link
                  to={`/news/${news.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Đọc thêm
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;