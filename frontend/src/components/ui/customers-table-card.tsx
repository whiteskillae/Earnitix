'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export type Creator = {
  id: number | string
  date: string
  status: 'Paid' | 'Pending' | 'Verified'
  statusVariant: 'success' | 'warning' | 'info'
  name: string
  avatar: string
  task: string
  earnings: string
}

export type CreatorEarningsTableProps = {
  title?: string
  subtitle?: string
  className?: string
  creators?: Creator[]
}

const DEFAULT_CREATORS: Creator[] = [
  {
    id: 1,
    date: '05/01/2025',
    status: 'Paid',
    statusVariant: 'success',
    name: 'Aryan Sharma',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&auto=format',
    task: 'Instagram Reel – Tech Review',
    earnings: '₹2,499',
  },
  {
    id: 2,
    date: '04/28/2025',
    status: 'Verified',
    statusVariant: 'info',
    name: 'Priya Mehta',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
    task: 'Blog – Affiliate Product Review',
    earnings: '₹4,200',
  },
  {
    id: 3,
    date: '04/25/2025',
    status: 'Paid',
    statusVariant: 'success',
    name: 'Rohan Verma',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&auto=format',
    task: 'YouTube Short – Tutorial',
    earnings: '₹1,800',
  },
  {
    id: 4,
    date: '04/22/2025',
    status: 'Pending',
    statusVariant: 'warning',
    name: 'Sneha Kapoor',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format',
    task: 'Referral – 3 New Users',
    earnings: '₹750',
  },
  {
    id: 5,
    date: '04/20/2025',
    status: 'Paid',
    statusVariant: 'success',
    name: 'Karan Patel',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format',
    task: 'Blog – Travel Listicle',
    earnings: '₹3,100',
  },
]

const Badge = ({
  children,
  variant,
}: {
  children: React.ReactNode
  variant: 'success' | 'warning' | 'info'
}) => {
  const styles =
    variant === 'success'
      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
      : variant === 'warning'
      ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/20'
      : 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/20'

  return (
    <span className={cn('rounded-full px-2.5 py-1 text-xs font-semibold', styles)}>
      {children}
    </span>
  )
}

export default function CreatorEarningsTable({
  title = 'Creator Earnings',
  subtitle = 'Recent verified payouts from the Earnetix community',
  creators = DEFAULT_CREATORS,
  className,
}: CreatorEarningsTableProps) {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl',
        className
      )}
      aria-label={title}
    >
      {/* Header */}
      <div className="space-y-1 border-b border-white/10 p-6">
        <div className="flex items-center gap-1.5 mb-3">
          <span className="size-2.5 rounded-full bg-red-500" />
          <span className="size-2.5 rounded-full bg-yellow-500" />
          <span className="size-2.5 rounded-full bg-emerald-500" />
        </div>
        <h2 className="text-lg font-bold text-white font-heading">{title}</h2>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[620px] w-full border-collapse text-sm">
          <thead className="sticky top-0 z-10 bg-white/5 backdrop-blur-sm">
            <tr className="text-slate-500 text-xs uppercase tracking-wider *:text-left *:px-4 *:py-3 *:font-semibold">
              <th>#</th>
              <th>Date</th>
              <th>Status</th>
              <th>Creator</th>
              <th>Task</th>
              <th className="text-right pr-6">Earned</th>
            </tr>
          </thead>
          <tbody>
            {creators.map((creator, idx) => (
              <tr
                key={creator.id}
                className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors *:px-4 *:py-3"
              >
                <td className="text-slate-500 text-xs">{idx + 1}</td>
                <td className="whitespace-nowrap text-slate-400">{creator.date}</td>
                <td>
                  <Badge variant={creator.statusVariant}>{creator.status}</Badge>
                </td>
                <td>
                  <div className="flex items-center gap-2.5">
                    <div className="size-8 overflow-hidden rounded-full ring-1 ring-white/10 flex-shrink-0">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-white font-medium text-sm">{creator.name}</span>
                  </div>
                </td>
                <td className="text-slate-400 max-w-[180px] truncate">{creator.task}</td>
                <td className="text-right pr-6 font-bold text-emerald-400 tabular-nums">{creator.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-xs text-slate-500">
        <span>Showing <strong className="text-slate-400">{creators.length}</strong> recent payouts</span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Live data · updated just now
        </span>
      </div>
    </section>
  )
}
