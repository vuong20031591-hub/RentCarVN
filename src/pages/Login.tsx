import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Chrome, Facebook, ArrowRight, Car, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';
import CountUp from '@/components/animations/CountUp';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
    // TODO: Implement login logic
  };

  const handleSocialLogin = (provider: string) => {
    console.log('Social login with:', provider);
    // TODO: Implement social login
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background"
      >
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <motion.div variants={itemVariants} className="text-center">
            
            <h1 className="mt-20 text-3xl font-bold">Chào mừng trở lại!</h1>
            <p className="mt-2 text-muted-foreground">
              Đăng nhập để tiếp tục hành trình của bạn
            </p>
          </motion.div>

          {/* Social Login */}
          <motion.div variants={itemVariants} className="space-y-3">
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 text-base"
              onClick={() => handleSocialLogin('google')}
            >
              <Chrome className="h-5 w-5 mr-2" />
              Đăng nhập với Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 text-base"
              onClick={() => handleSocialLogin('facebook')}
            >
              <Facebook className="h-5 w-5 mr-2" />
              Đăng nhập với Facebook
            </Button>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">
                Hoặc đăng nhập với email
              </span>
            </div>
          </motion.div>

          {/* Login Form */}
          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="ten@email.com"
                  className="pl-10 h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Ghi nhớ đăng nhập
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-primary hover:underline"
              >
                Quên mật khẩu?
              </Link>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full h-12 text-base" size="lg">
              Đăng nhập
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.form>

          {/* Sign Up Link */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-sm text-muted-foreground">
              Chưa có tài khoản?{' '}
              <Link to="/register" className="font-medium text-primary hover:underline">
                Đăng ký ngay
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Hero Image & Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/90 to-primary relative overflow-hidden">
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
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 flex flex-col justify-center p-12 text-white"
        >
          <div className="max-w-md">
            <motion.h2 variants={heroItemVariants} className="text-4xl font-bold mb-6">
              Thuê xe tự lái<br />Dễ dàng & An toàn
            </motion.h2>
            <motion.p variants={heroItemVariants} className="text-lg text-white/90 mb-12">
              Hơn 10,000+ xe đang chờ bạn. Đặt xe nhanh chóng với giá tốt nhất.
            </motion.p>

            {/* Features */}
            <motion.div variants={heroItemVariants} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Car className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Đa dạng lựa chọn</h3>
                  <p className="text-white/80 text-sm">
                    Từ xe hạng sang đến xe tiết kiệm, đáp ứng mọi nhu cầu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Bảo hiểm toàn diện</h3>
                  <p className="text-white/80 text-sm">
                    Bảo vệ tài sản lên đến 500 triệu đồng mỗi chuyến
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Hỗ trợ 24/7</h3>
                  <p className="text-white/80 text-sm">
                    Đội ngũ hỗ trợ sẵn sàng phục vụ bất cứ lúc nào
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={heroItemVariants}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <div className="grid grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <div className="text-3xl font-bold">
                    <CountUp to={10} duration={2} delay={1} />K+
                  </div>
                  <div className="text-sm text-white/80">Xe cho thuê</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <div className="text-3xl font-bold">
                    <CountUp to={50} duration={2} delay={1.2} />K+
                  </div>
                  <div className="text-sm text-white/80">Khách hàng</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <div className="text-3xl font-bold">
                    <CountUp to={4.8} duration={2} delay={1.4} />★
                  </div>
                  <div className="text-sm text-white/80">Đánh giá</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
