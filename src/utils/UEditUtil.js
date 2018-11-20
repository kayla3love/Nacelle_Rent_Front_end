import React from 'react';
export default class UEditor extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.id?this.props.id:null,
            uEditor :null,
        }
    }
    componentDidMount(){
        let UE = window.UE;
        let {id} = this.state;
        if(id){
            try {
                UE.delEditor(id);
            }catch (e) {}
            let  uEditor = UE.getEditor(id, {
                toolbars: [[
                    'fullscreen','|', 'undo', 'redo', '|',
                    'bold', 'italic', 'underline','|','fontfamily', 'fontsize','forecolor', 'backcolor',
                    '|','justifyleft', 'justifyright', 'justifycenter', 'justifyjustify'
                ]],
                autoSave: false,
                autoHeightEnabled: true,
                autoFloatEnabled: false,
                initialFrameWidth:this.props.width,
                elementPathEnabled: false,
            });
            this.setState({uEditor});
        }
        let ue = UE.getEditor(id);
        ue.ready(function() {
            //默认显示内容
            ue.setContent(localStorage.getItem("contact_content"));
        });
    }
    render(){
        let {id} = this.state;
        return (
            <div>
                <textarea id={id} />
            </div>
        );
    }
}