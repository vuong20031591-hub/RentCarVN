import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
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
            Liên Hệ Chúng Tôi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Đội ngũ tư vấn sẵn sàng hỗ trợ bạn 24/7
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Info */}
          <motion.div variants={staggerItem} className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Thông Tin Liên Hệ</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Địa chỉ</p>
                    <p className="text-muted-foreground">
                      Đại Học Hutech Khu E, 10/80c Song Hành Xa Lộ Hà Nội, Phường Tân Phú, Thủ Đức, Hồ Chí Minh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Hotline</p>
                    <p className="text-muted-foreground">
                      0901 234 567 - 0902 345 678
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">
                      info@rentcarvn.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Giờ làm việc</p>
                    <p className="text-muted-foreground">
                      24/7 - Hỗ trợ khẩn cấp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-80 rounded-xl overflow-hidden shadow-card border bg-muted/30">
              <iframe
                src="https://www.google.com/maps?q=Đại+Học+Hutech+Khu+E,+10/80c+Song+Hành+Xa+Lộ+Hà+Nội,+Phường+Tân+Phú,+Thủ+Đức,+Hồ+Chí+Minh&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Đại Học Hutech Khu E"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={staggerItem}>
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="text-2xl font-semibold mb-6">Gửi Yêu Cầu</h3>
              
              <div className="space-y-4">
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Nội dung *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tôi cần thuê xe 7 chỗ từ ngày..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Gửi Yêu Cầu
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;