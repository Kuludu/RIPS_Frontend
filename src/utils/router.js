import Default from "@/components/Default";
import LineNav from "@/components/LineNav";
import LineStatus from "@/components/LineStatus";
import SiteNav from "@/components/SiteNav";
import SiteStatus from "@/components/SiteStatus";
import Situation from "@/components/Situation";
import HistoryNav from "@/components/HistoryNav";
import History from "@/components/History";
import Login from "@/components/Login";
import Parameter from "@/components/Parameter";
import SituManage from "@/components/SituManage";
import BigData from "@/components/BigData";
import UserManage from "@/components/UserManage";
import Complex_1 from "@/components/Complex_1";


const routes = [
    {
        path: '/',
        name: 'default',
        component: Default,
        meta: {
            title: '轨道交通智能预测系统',
        }
    },
    {
        path: '/line',
        name: 'line_nav',
        component: LineNav,
        meta: {
            title: '轨道交通智能预测系统-线路导航',
        }
    },
    {
        path: '/line/:id',
        name: 'line',
        component: LineStatus,
        meta: {
            title: '轨道交通智能预测系统-线路流量',
        }
    },
    {
        path: '/site',
        name: 'site_nav',
        component: SiteNav,
        meta: {
            title: '轨道交通智能预测系统-站点导航',
        }
    },
    {
        path: '/site/:line/:site',
        name: 'site',
        component: SiteStatus,
        meta: {
            title: '轨道交通智能预测系统-站点流量',
        }
    },
    {
        path: '/situation',
        name: 'situation',
        component: Situation,
        meta: {
            title: '轨道交通智能预测系统-轨交特情',
        }
    },
    {
        path: '/history',
        name: 'history_nav',
        component: HistoryNav,
        meta: {
            title: '轨道交通智能预测系统-历史导航',
        }
    },
    {
        path: '/history/:year/:line',
        name: 'history',
        component: History,
        meta: {
            title: '轨道交通智能预测系统-简单查询',
        }
    },
    {
        path: '/admin/login',
        name: 'login',
        component: Login,
        meta: {
            title: '轨道交通智能预测系统-管理登陆',
        }
    },
    {
        path: '/admin/parameter',
        name: 'parameter',
        component: Parameter,
        meta: {
            title: '轨道交通智能预测系统-参数设置',
        }
    },
    {
        path: '/admin/situation',
        name: 'situManage',
        component: SituManage,
        meta: {
            title: '轨道交通智能预测系统-特情管理',
        }
    },
    {
        path: '/admin/bigdata',
        name: 'bigData',
        component: BigData,
        meta: {
            title: '轨道交通智能预测系统-大数据管理',
        }
    },
    {
        path: '/admin/user',
        name: 'userManage',
        component: UserManage,
        meta: {
            title: '轨道交通智能预测系统-用户管理',
        }
    },
    {
        path: '/complex/1',
        name: 'complex_1',
        component: Complex_1,
        meta: {
            title: '轨道交通智能预测系统-站点出/入动态图'
        }
    }
]

export default routes;