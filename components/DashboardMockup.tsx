import React from 'react';
import {
    LayoutDashboard,
    MessageSquare,
    Calendar,
    Users,
    Briefcase,
    CheckSquare,
    Video,
    Target,
    ShoppingCart,
    Anchor,
    FileText,
    CreditCard,
    Search,
    Bell,
    Globe,
    Settings,
    HelpCircle,
    Clock,
    List,
    DollarSign
} from 'lucide-react';

const DashboardMockup = () => {
    return (
        <div className="flex h-full w-full bg-slate-50 font-sans text-xs sm:text-sm text-slate-600">

            {/* Sidebar */}
            <div className="w-[18%] min-w-[160px] bg-[#0091FF] text-white flex flex-col py-4 px-2 sm:px-4">
                <div className="flex items-center gap-2 mb-8 px-2">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <LayoutDashboard className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">LawYan</span>
                </div>

                <div className="space-y-1 flex-1 overflow-y-auto custom-scrollbar">
                    <NavItem icon={<LayoutDashboard size={16} />} label="Dashboard" active />
                    <NavItem icon={<MessageSquare size={16} />} label="AI Content" />
                    <NavItem icon={<Calendar size={16} />} label="Events" />
                    <NavItem icon={<Users size={16} />} label="Clients" />
                    <NavItem icon={<Briefcase size={16} />} label="Cases" />
                    <NavItem icon={<CheckSquare size={16} />} label="Tasks" />
                    <NavItem icon={<Video size={16} />} label="Zoom meetings" />
                    <NavItem icon={<Target size={16} />} label="Leads" />
                    <NavItem icon={<CreditCard size={16} />} label="Subscriptions" />
                    <NavItem icon={<ShoppingCart size={16} />} label="Sales" />
                    <NavItem icon={<Anchor size={16} />} label="Prospects" />
                    <NavItem icon={<FileText size={16} />} label="Notes" />
                    <NavItem icon={<MessageSquare size={16} />} label="Messages" />
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 space-y-1">
                    <NavItem icon={<Settings size={16} />} label="Settings" />
                    <NavItem icon={<HelpCircle size={16} />} label="Help & Support" />
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">

                {/* Top Header */}
                <div className="h-14 bg-white border-b border-slate-100 flex items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button className="p-1.5 hover:bg-slate-50 rounded-md text-slate-400">
                            <List size={18} />
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100 w-64">
                            <Search size={14} className="text-slate-400" />
                            <span className="text-slate-400 text-xs">Search...</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="p-1.5 hover:bg-slate-50 rounded-full text-slate-400">
                                <Globe size={16} />
                            </button>
                            <button className="p-1.5 hover:bg-slate-50 rounded-full text-slate-400">
                                <Bell size={16} />
                            </button>
                            <div className="w-8 h-8 rounded-full bg-slate-200 border border-white shadow-sm overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrollable Dashboard Content */}
                <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-50/50">

                    {/* Top Stats Row */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <StatCard
                            icon={<Clock className="text-white" />}
                            iconBg="bg-pink-500"
                            title={<span className="text-pink-500 font-medium">Clock In</span>}
                            subtitle="You are currently clocked out"
                        />
                        <StatCard
                            icon={<List className="text-white" />}
                            iconBg="bg-blue-400"
                            value="0"
                            subtitle="My open tasks"
                        />
                        <StatCard
                            icon={<Calendar className="text-white" />}
                            iconBg="bg-indigo-500"
                            value="0"
                            subtitle="Events today"
                        />
                        <StatCard
                            icon={<DollarSign className="text-white" />}
                            iconBg="bg-rose-500"
                            value="$0.00"
                            subtitle="Due"
                        />
                    </div>

                    {/* Middle Complex Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

                        {/* Projects Overview */}
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                            <h3 className="font-semibold text-slate-700 mb-6 flex items-center gap-2">
                                <LayoutDashboard size={14} className="text-slate-400" />
                                Projects Overview
                            </h3>

                            <div className="flex justify-between px-2 mb-8">
                                <div className="text-center">
                                    <div className="text-xl font-bold text-red-400">1</div>
                                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">Open</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-green-500">0</div>
                                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">Completed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-orange-400">0</div>
                                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">Hold</div>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <div className="w-full bg-slate-100 rounded-full h-8 relative flex items-center justify-center">
                                    <span className="text-xs font-medium text-slate-500 z-10">Progression 0%</span>
                                    <div className="absolute left-0 top-0 bottom-0 w-[2%] bg-green-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Invoice Overview */}
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                                <FileText size={14} className="text-slate-400" />
                                Invoice Overview
                            </h3>
                            <div className="space-y-3">
                                <InvoiceRow label="Overdue" color="bg-red-500" amount="$0.00" />
                                <InvoiceRow label="Not paid" color="bg-yellow-400" amount="$0.00" />
                                <InvoiceRow label="Partially paid" color="bg-blue-400" amount="$0.00" />
                                <InvoiceRow label="Fully paid" color="bg-green-500" amount="$0.00" />
                                <InvoiceRow label="Draft" color="bg-slate-400" amount="$0.00" />
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-end">
                                <div>
                                    <div className="text-xs text-slate-400">Total invoiced</div>
                                    <div className="font-bold text-slate-700">$0.00</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-slate-400">Due</div>
                                    <div className="font-bold text-slate-700">$0.00</div>
                                </div>
                            </div>
                        </div>

                        {/* Income vs Expenses */}
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                                <DollarSign size={14} className="text-slate-400" />
                                Income vs Expenses
                            </h3>

                            <div className="flex gap-4 text-xs mb-8">
                                <div>
                                    <div className="text-slate-400 mb-1">This Year</div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="font-medium">$0.00</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <span className="font-medium">$0.00</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-400 mb-1">Last Year</div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-500 opacity-50"></div>
                                        <span className="font-medium text-slate-400">$0.00</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500 opacity-50"></div>
                                        <span className="font-medium text-slate-400">$0.00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="h-24 flex items-end">
                                <div className="w-full h-px bg-slate-200 relative">
                                    <div className="absolute left-0 bottom-0 h-1 w-full bg-green-500"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm h-32 flex items-center justify-center flex-col text-slate-400">
                            <div className="text-lg font-bold text-slate-300">0</div>
                            <div>Reminder Today</div>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm h-32 flex items-center justify-center flex-col text-slate-400">
                            <div className="text-lg font-bold text-slate-300">1</div>
                            <div>Team Members</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
    <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${active ? 'bg-black/20 text-white' : 'hover:bg-black/10 text-white/80'}`}>
        {icon}
        <span className="font-medium truncate">{label}</span>
    </div>
);

const StatCard = ({ icon, iconBg, title, value, subtitle }: any) => (
    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center py-6">
        <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center shadow-sm mb-3`}>
            {icon}
        </div>
        {title && <div className="mb-0.5">{title}</div>}
        {value && <div className="text-2xl font-bold text-slate-700 mb-0.5">{value}</div>}
        <div className="text-xs text-slate-400">{subtitle}</div>
    </div>
);

const InvoiceRow = ({ label, color, amount }: any) => (
    <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${color}`}></div>
            <span className="text-slate-500">{label}</span>
        </div>
        <div className="flex items-center gap-4 w-1/2">
            <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full w-0 ${color}`}></div>
            </div>
            <span className="font-medium text-slate-600 w-12 text-right">{amount}</span>
        </div>
    </div>
);

export default DashboardMockup;
