import { TaskManagerPage } from "../routes/TaskManager/TaskManagerRoute";
import { About } from "../routes/About/About";
import { LinkRenderProps } from "../types/types";
import { MainPage } from "../routes/MainPage/MainPage";
import {v4 as uuid} from 'uuid';

const ConstantRoutesBuffer = {StartPage:{path:'/',element:<MainPage/>},
                        TaskManager:{path:'TaskManager', element:<TaskManagerPage/>},
                        About:{path:'About', element:<About/>},
                        NotFound:{path:'*', element:<p>Nothing</p>}};

const ConstantLinksBuffer= {ToTaskManager:{ to:'/TaskManager',value: 'TaskManager'},
                    ToAbout:{to:'/About',value:'About'}};

const ConstantLinks:LinkRenderProps[] = [{key:uuid(),body:ConstantLinksBuffer.ToTaskManager},
                                {key:uuid(),body:ConstantLinksBuffer.ToAbout}]

const NavigationConstants = {ConstantRoutesBuffer, ConstantLinks, ConstantLinksBuffer};

export default  NavigationConstants;