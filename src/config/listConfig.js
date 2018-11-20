import editUrl from '../resources/edit.png';
import exitUrl from '../resources/exit.png';
export const topBarList = {
    "account": [
        {imgUrl: editUrl, text: "修改密码", funcId:"0"},
        {imgUrl: exitUrl, text:"退出登录",funcId:"1"}
    ]
}
export const sideBarList = {
    "default":[
        {imgUrl: editUrl, text:"账号管理", sub_list:[{title:"新建管理员",id:1}]},
        {imgUrl: exitUrl, text:"项目管理", sub_list:[{title:"项目列表",id:2}]},
        {imgUrl: exitUrl, text:"实时数据", sub_list:[]},
    ]
}
//模拟账号表单数据，实际应该从webadmin_info中读
export const tableItemList_admin = [
    {id:'admin',password:'admin1'},
    {id:'admin0',password:'admin'},
    {id:'admin1',password:'admin'},
    {id:'admin2',password:'admin'},
    {id:'admin3',password:'admin'},
    {id:'admin4',password:'admin'},
    {id:'admin5',password:'admin'},
    {id:'admin6',password:'admin'},
    {id:'admin7',password:'admin'},
    {id:'admin8',password:'admin'},
    {id:'admin9',password:'admin'},
    {id:'admin10',password:'admin'},
    {id:'admin11',password:'admin'},
]

//模拟账号表单数据，实际应该从project_info中读
export const tableItemList_project = [
    {id:'001',name:'一个亿的小项目',currentState:'进行中',startTime:'2018-10-1',endTime:'2018-11-11'},
    {id:'002',name:'一个亿的小项目',currentState:'进行中',startTime:'2018-10-1',endTime:'2018-11-11'},
    {id:'003',name:'一个亿的小项目',currentState:'进行中',startTime:'2018-10-1',endTime:'2018-11-11'},
    {id:'004',name:'一个亿的小项目',currentState:'进行中',startTime:'2018-10-1',endTime:'2018-11-11'},
    {id:'005',name:'一个亿的小项目',currentState:'进行中',startTime:'2018-10-1',endTime:'2018-11-11'},
    {id:'006',name:'十个亿的大项目',currentState:'进行中',startTime:'2018-10-1',endTime:'2018-11-11'},
    {id:'007',name:'一个亿的小项目',currentState:'进行中',startTime:'2018-10-1',endTime:'2018-11-11'},
    {id:'008',name:'一个亿的小项目',currentState:'进行中',startTime:'2018-10-1',endTime:'2018-11-11'},
    {id:'009',name:'一个亿的小项目',currentState:'进行中',startTime:'2018-10-1',endTime:'2018-11-11'},
    {id:'0010',name:'一个亿的小项目',currentState:'进行中',startTime:'2018-10-1',endTime:'2018-11-11'},
    {id:'0011',name:'一个亿的小项目',currentState:'进行中',startTime:'2018-10-1',endTime:'2018-11-11'},
    {id:'0012',name:'一个亿的小项目',currentState:'进行中',startTime:'2018-10-1',endTime:'2018-11-11'},
]