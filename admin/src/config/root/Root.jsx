import Home from '../../component/feature/Home/Home'
import CreateProject from '../../component/feature/Projects/Create/CreateProject'
import Projects from '../../component/feature/Projects/View/Projects'
import Slider from '../../component/feature/Slider/Slider'
import Logout from '../../component/shared/Auth/Logout'
import WorkProcess from '../../component/feature/WorkProcess/WorkProcess'

const rootRoutes = [
    {
        path: '',
        element: <Home />
    },
    {
        path: 'project',
        element: <Projects />
    },
    {
        path: 'create-project',
        element: <CreateProject />
    },
    {
        path: 'procedure',
        element: <WorkProcess />
    },
    {
        path: 'slider',
        element: <Slider />
    },
    {
        path: 'logout', 
        element: <Logout />
    }
]

export default rootRoutes