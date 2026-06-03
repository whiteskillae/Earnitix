import Link from 'next/link';
import {
	MessageCircle,
	CodeXml,
	Camera,
	Briefcase,
	SendHorizontal,
	Video,
    Zap,
    Mail,
    ArrowRight
} from 'lucide-react';

export function MinimalFooter() {
	const year = new Date().getFullYear();

	const company = [
		{ title: 'About Us', href: '/about' },
		{ title: 'Success Stories', href: '/success-stories' },
		{ title: 'How it Works', href: '/how-it-works' },
		{ title: 'Earning Tasks', href: '/tasks' },
	];

	const resources = [
		{ title: 'Creator Blog', href: '#' },
		{ title: 'Help Center', href: '#' },
		{ title: 'Community Discord', href: '#' },
		{ title: 'Security', href: '#' },
	];

	const socialLinks = [
		{ icon: <MessageCircle className="size-4" />, link: 'https://discord.com/invite/earnetix', label: 'Discord' },
		{ icon: <Camera className="size-4" />, link: 'https://instagram.com/earnetix', label: 'Instagram' },
		{ icon: <SendHorizontal className="size-4" />, link: 'https://t.me/earnetix', label: 'Telegram' },
		{ icon: <Video className="size-4" />, link: 'https://youtube.com/@earnetix', label: 'YouTube' },
        { icon: <Briefcase className="size-4" />, link: 'https://linkedin.com/company/earnetix', label: 'LinkedIn' },
	];

	return (
		<footer className="relative bg-[#0F172A] border-t border-white/10 overflow-hidden font-sans">
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[120px] pointer-events-none"></div>

			<div className="mx-auto max-w-7xl px-6 py-20 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
					<div className="md:col-span-4 flex flex-col gap-6">
						<Link href="/" className="flex items-center gap-3 group">
							<div className="p-2.5 bg-gradient-to-br from-primary to-indigo-600 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
                                <Zap className="size-6 text-white fill-white" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white font-heading uppercase">EARNETIX</span>
						</Link>
						<p className="text-slate-400 max-w-sm text-sm leading-relaxed">
							The ultimate ecosystem for digital creators. Turn your content into a high-performance earning asset with Earnetix.
						</p>
						<div className="flex gap-3">
							{socialLinks.map((item, i) => (
								<a
									key={i}
									aria-label={item.label}
									className="hover:bg-primary/10 hover:text-primary rounded-xl border border-white/10 p-3 transition-all text-slate-400"
									target="_blank"
									href={item.link}
								>
									{item.icon}
								</a>
							))}
						</div>
					</div>

					<div className="md:col-span-2">
						<span className="text-white font-bold mb-6 block text-xs uppercase tracking-[0.2em] font-heading">Resources</span>
						<div className="flex flex-col gap-4">
							{resources.map(({ href, title }, i) => (
								<Link
									key={i}
									className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
									href={href}
								>
									{title}
								</Link>
							))}
						</div>
					</div>

					<div className="md:col-span-2">
						<span className="text-white font-bold mb-6 block text-xs uppercase tracking-[0.2em] font-heading">Platform</span>
						<div className="flex flex-col gap-4">
							{company.map(({ href, title }, i) => (
								<Link
									key={i}
									className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
									href={href}
								>
									{title}
								</Link>
							))}
						</div>
					</div>

                    <div className="md:col-span-4 flex flex-col gap-6">
                        <span className="text-white font-bold mb-2 block text-xs uppercase tracking-[0.2em] font-heading">Stay Updated</span>
                        <p className="text-slate-400 text-sm">Join our newsletter for the latest creator tasks and earning tips.</p>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-emerald-500 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-500"></div>
                            <div className="relative flex">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full bg-white/5 border border-white/10 rounded-l-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                                />
                                <button aria-label="Subscribe to newsletter" className="bg-primary text-white px-6 rounded-r-2xl hover:bg-primary/90 transition-all flex items-center justify-center group-hover:px-8">
                                    <ArrowRight className="size-5" />
                                </button>
                            </div>
                        </div>
                    </div>
				</div>
				
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />
                
				<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
					<p>© {year} EARNETIX CREATOR HUB. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
				</div>
			</div>
		</footer>
	);
}
