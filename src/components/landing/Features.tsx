import { motion } from 'motion/react';
import { Zap, Lock, FileText, BadgeIndianRupee, Mail, Settings } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Generation",
    description: "Enter your details once. Get 12 professionally formatted PDFs in seconds.",
    color: "bg-amber-500"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Secure & Private",
    description: "Your data isn't stored. Generate, download, done. Complete privacy guaranteed.",
    color: "bg-blue-500"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Perfect Format",
    description: "Standard rent receipt format accepted by HR departments across India. No rejections.",
    color: "bg-emerald-500"
  },
  {
    icon: <BadgeIndianRupee className="w-6 h-6" />,
    title: "Save Thousands",
    description: "Claim your full HRA tax exemption. Potentially save ₹15,000-30,000 annually.",
    color: "bg-indigo-500"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Backup",
    description: "Receipts sent to your email automatically. Access them anytime, anywhere.",
    color: "bg-rose-500"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Fully Customizable",
    description: "Your details, your landlord's info, your timeline. Fully personalized receipts.",
    color: "bg-slate-500"
  }
];

export const Features = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black text-primary mb-6"
          >
            Built for Professionals
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Everything you need to claim your HRA tax exemption with confidence. 
            Simple, fast, and actually works.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass-card p-10 rounded-3xl hover:border-secondary/30 transition-all duration-500 group premium-shadow"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} text-white flex items-center justify-center mb-8 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
