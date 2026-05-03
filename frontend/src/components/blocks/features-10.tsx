import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Calendar, LucideIcon, MapIcon, Video, PenTool, Share2 } from 'lucide-react'
import { ReactNode } from 'react'

export function Features10() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-[#0F172A]">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
                <div className="mx-auto grid gap-4 lg:grid-cols-2">
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Video}
                                title="Task Marketplace"
                                description="Discover high-value tasks tailored to your skills."
                            />
                        </CardHeader>

                        <div className="relative mb-6 border-t border-dashed sm:mb-0">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,hsl(var(--muted)),white_125%)] dark:[background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,#1e293b,white_125%)]"></div>
                            <div className="aspect-[76/59] p-1 px-6">
                                <DualModeImage
                                    darkSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                    lightSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                    alt="Creator dashboard analytics"
                                    width={1207}
                                    height={929}
                                    className="rounded-t-xl"
                                />
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Calendar}
                                title="Advanced Scheduling"
                                description="Manage your content calendar and submission deadlines effortlessly."
                            />
                        </CardHeader>

                        <CardContent>
                            <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                                <div className="aspect-[76/59] border rounded-xl overflow-hidden shadow-2xl">
                                    <DualModeImage
                                        darkSrc="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop"
                                        lightSrc="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop"
                                        alt="Content calendar preview"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </FeatureCard>

                    <FeatureCard className="p-6 lg:col-span-2 overflow-hidden bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border-indigo-500/20">
                        <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-bold text-[#0F172A] dark:text-white">
                            Smart content verification with automated quality checks.
                        </p>

                        <div className="flex justify-center gap-6 overflow-hidden py-8">
                            <CircularUI
                                label="Reels"
                                circles={[{ pattern: 'border' }, { pattern: 'primary' }]}
                            />

                            <CircularUI
                                label="Blogs"
                                circles={[{ pattern: 'none' }, { pattern: 'primary' }]}
                            />

                            <CircularUI
                                label="Affiliate"
                                circles={[{ pattern: 'blue' }, { pattern: 'none' }]}
                            />

                            <CircularUI
                                label="Referrals"
                                circles={[{ pattern: 'primary' }, { pattern: 'border' }]}
                                className="hidden sm:block"
                            />
                        </div>
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}

interface FeatureCardProps {
    children: ReactNode
    className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
    <Card className={cn('group relative rounded-3xl overflow-hidden shadow-xl border-white/5 dark:bg-[#1E293B]', className)}>
        <CardDecorator />
        {children}
    </Card>
)

const CardDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)

interface CardHeadingProps {
    icon: LucideIcon
    title: string
    description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-6">
        <span className="text-primary font-bold flex items-center gap-2 uppercase tracking-widest text-xs">
            <Icon className="size-4" />
            {title}
        </span>
        <p className="mt-8 text-2xl font-bold text-[#0F172A] dark:text-white leading-tight">{description}</p>
    </div>
)

interface DualModeImageProps {
    darkSrc: string
    lightSrc: string
    alt: string
    width: number
    height: number
    className?: string
}

const DualModeImage = ({ darkSrc, lightSrc, alt, width, height, className }: DualModeImageProps) => (
    <>
        <img
            src={darkSrc}
            className={cn('hidden dark:block object-cover w-full h-full grayscale-[30%] hover:grayscale-0 transition-all duration-500', className)}
            alt={`${alt} dark`}
            width={width}
            height={height}
        />
        <img
            src={lightSrc}
            className={cn('shadow dark:hidden object-cover w-full h-full', className)}
            alt={`${alt} light`}
            width={width}
            height={height}
        />
    </>
)

interface CircleConfig {
    pattern: 'none' | 'border' | 'primary' | 'blue'
}

interface CircularUIProps {
    label: string
    circles: CircleConfig[]
    className?: string
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
    <div className={className}>
        <div className="bg-gradient-to-b from-primary/50 size-fit rounded-2xl to-transparent p-px">
            <div className="bg-gradient-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-6 shadow-inner">
                {circles.map((circle, i) => (
                    <div
                        key={i}
                        className={cn('size-10 rounded-full border-2 sm:size-12 shadow-lg transition-transform hover:scale-110', {
                            'border-primary bg-white dark:bg-slate-800': circle.pattern === 'none',
                            'border-primary bg-[repeating-linear-gradient(-45deg,hsl(var(--primary)),hsl(var(--primary))_1px,transparent_1px,transparent_4px)]': circle.pattern === 'border',
                            'border-emerald-500 bg-emerald-500/20': circle.pattern === 'primary',
                            'bg-background z-1 border-indigo-500 bg-[repeating-linear-gradient(-45deg,theme(colors.indigo.500),theme(colors.indigo.500)_1px,transparent_1px,transparent_4px)]': circle.pattern === 'blue',
                        })}></div>
                ))}
            </div>
        </div>
        <span className="text-muted-foreground mt-3 block text-center text-sm font-semibold uppercase tracking-wider">{label}</span>
    </div>
)
