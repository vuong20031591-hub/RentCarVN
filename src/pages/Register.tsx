import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, Chrome, Facebook, ArrowRight, CheckCircle2, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [passwordStrength, setPasswordStrength] = useState({
    hasLength: false,
    hasNumber: false,
    hasSpecial: false,
  });

  const handlePasswordChange = (value: string) => {
    setFormData({ ...formData, password: value });
    setPasswordStrength({
      hasLength: value.length >= 8,
      hasNumber: /\d/.test(value),
      hasSpecial: /[!@#$%^&*]/.test(value),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    console.log('Register attempt:', formData);
    // TODO: Implement register logic
  };

  const handleSocialSignup = (provider: string) => {
    console.log('Social signup with:', provider);
    // TODO: Implement social signup
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-primary/90 to-primary relative overflow-hidden"
      >
        {/* Background Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={heroItemVariants}
          className="relative z-10 flex flex-col justify-center p-12 text-white"
        >
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-20">
              Bắt đầu hành trình<br />của bạn ngay hôm nay
            </h2>
            <p className="text-lg text-white/90 mb-12">
              Tham gia cộng đồng 50,000+ người dùng đang tận hưởng trải nghiệm thuê xe tốt nhất
            </p>

            {/* Benefits */}
            <motion.div variants={heroItemVariants} className="space-y-4">
              {[
                'Miễn phí đăng ký, không phí ẩn',
                'Đặt xe nhanh chóng trong 2 phút',
                'Bảo hiểm và hỗ trợ 24/7',
                'Chương trình ưu đãi cho thành viên mới',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonial */}
            <motion.div
              variants={heroItemVariants}
              className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Nguyễn Văn A</div>
                  <div className="text-sm text-white/70">Khách hàng thân thiết</div>
                </div>
              </div>
              <p className="text-sm text-white/80 italic">
                "Dịch vụ tuyệt vời! Xe sạch đẹp, thủ tục nhanh gọn. Tôi đã sử dụng RentCarVN 
                cho nhiều chuyến đi và rất hài lòng."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full lg:w-3/5 flex items-center justify-center p-8 bg-background"
      >
        <div className="w-full max-w-lg space-y-8">
          {/* Logo - Mobile */}
          <motion.div variants={itemVariants} className="text-center lg:hidden">
            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold">
              <Car className="h-8 w-8 text-primary" />
              <span>RentCarVN</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="mt-20 text-3xl font-bold">Tạo tài khoản</h1>
            <p className="mt-2 text-muted-foreground">
              Điền thông tin để bắt đầu
            </p>
          </motion.div>

          {/* Social Signup */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-11"
              onClick={() => handleSocialSignup('google')}
            >
              <Chrome className="h-5 w-5 mr-2" />
              Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11"
              onClick={() => handleSocialSignup('facebook')}
            >
              <Facebook className="h-5 w-5 mr-2" />
              Facebook
            </Button>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">
                Hoặc đăng ký với email
              </span>
            </div>
          </motion.div>

          {/* Register Form */}
          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="pl-10 h-11"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="ten@email.com"
                    className="pl-10 h-11"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0912345678"
                    className="pl-10 h-11"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Mật khẩu <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-11"
                  value={formData.password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {/* Password Strength */}
              {formData.password && (
                <div className="space-y-2 text-xs">
                  <div className={passwordStrength.hasLength ? 'text-green-600 dark:text-green-500' : 'text-muted-foreground'}>
                    ✓ Tối thiểu 8 ký tự
                  </div>
                  <div className={passwordStrength.hasNumber ? 'text-green-600 dark:text-green-500' : 'text-muted-foreground'}>
                    ✓ Ít nhất 1 chữ số
                  </div>
                  <div className={passwordStrength.hasSpecial ? 'text-green-600 dark:text-green-500' : 'text-muted-foreground'}>
                    ✓ Ít nhất 1 ký tự đặc biệt (!@#$%^&*)
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Xác nhận mật khẩu <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-11"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                required
              />
              <label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                Tôi đồng ý với{' '}
                <Link to="/terms" className="text-primary hover:underline">
                  Điều khoản sử dụng
                </Link>{' '}
                và{' '}
                <Link to="/privacy" className="text-primary hover:underline">
                  Chính sách bảo mật
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-11"
              size="lg"
              disabled={!formData.agreeTerms}
            >
              Tạo tài khoản
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.form>

          {/* Login Link */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-sm text-muted-foreground">
              Đã có tài khoản?{' '}
              <Link to="/login" className="font-medium text-primary hover:underline">
                Đăng nhập ngay
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
