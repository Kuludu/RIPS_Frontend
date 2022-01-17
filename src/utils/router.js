import Default from "@/components/Default";
import LineStatus from "@/components/LineStatus";
import SiteNav from "@/components/SiteNav";
import SiteStatus from "@/components/SiteStatus";
import Situation from "@/components/Situation";
import History from "@/components/History";
import Login from "@/components/Login";
import Parameter from "@/components/Parameter";
import SituManage from "@/components/SituManage";


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
        path: '/site/:id',
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
        name: 'history',
        component: History,
        meta: {
            title: '轨道交通智能预测系统-历史数据',
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
    }
]

export default routes;