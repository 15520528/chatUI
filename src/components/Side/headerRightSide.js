import React, {Component} from 'react';
import {Avatar, Button, Icon, Input, Modal, Select} from "antd";
import qoobee from "../../images/qoobee.jpg";
import connect from "react-redux/es/connect/connect";
import {UserService} from '../../Services/UserService';
import {ChatService} from '../../Services/ChatService';

const Search = Input.Search;
const Option = Select.Option;

const children = [];
var Attendants;
var Title;

class HeaderRightSide extends Component {

    state = {
        UserLoading: false,
        UserVisible: false,
        GroupLoading:false,
        GroupVisible: false,
    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    showUserModal = () => {
        this.setState({
            UserVisible: true,
        });
    }

    handleCancel = () => {
        this.setState({ UserVisible: false });
        this.setState({ GroupVisible: false });
    }

    showGroupModal = () => {
        this.setState({
            GroupVisible: true,
        });
    }

    handleChange=(value)=>{
        Attendants = value;
        console.log(`Selected: ${Attendants}`);
    }

    handleInputChange=(e)=>{
        const { value } = e.target;
         Title = value;
        console.log(Title);
    }

    handleOk=()=>{
        // let obj = {messageType:"createConversation",
        //     content: {
        //         conversationName:Title,
        //         attendants: Attendants
        //     }
        // };

        let obj = {
            messageType: "createConversation",
            content: {
                conversationName: Title,
                users: Attendants
            }
        }

        this.props.websocket.send(JSON.stringify(obj));
        // console.log(obj);
        // ChatService.createChatRoom(obj)
            // .then((data)=>{
            //     alert(data);
            // })
            // .catch((error)=>{
            //
            // })
    }

    componentDidMount() {
        UserService.getFriends()
            .then(data =>{
                // console.log('list friend', data)
                data.map((item) =>
                    children.push(<Option  key={item.phone}><Avatar s={30} src={qoobee}/> {item.userName}</Option>)
                );
            })
            .catch(error=>{

            })
    }

    render() {
        return (
            <div style={{
                height: '100px', backgroundColor: 'white',
                borderRight: '1px solid #ebebe0 ', borderBottom: '1px solid #ebebe0 '
            }} align="middle">

                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{width: 200, height: '30px', margin: '10px auto 10px'}}
                />
                <div style={{width: 200, height: '30px', margin: '10px auto 10px'}}>
                    <Button shape="circle" icon="user-add" style={{marginRight: '10px'}} onClick={this.showUserModal}></Button>
                    <Button shape="circle" icon="plus-circle" onClick={this.showGroupModal}/>
                </div>
                //add-user modal
                <Modal
                    visible={this.state.UserVisible}
                    title="Thêm bạn bè"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>HỦY</Button>,
                        <Button key="submit" type="primary" loading={this.state.UserLoading} onClick={this.handleOk}>
                            TÌM
                        </Button>,
                    ]}
                >
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Số điện thoại" />

                </Modal>
                //add-chatGroup modal
                <Modal
                    style={{height:100}}
                    visible={this.state.GroupVisible}
                    title="Tạo nhóm chat"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>HỦY</Button>,
                        <Button key="submit" type="primary" loading={this.state.GroupLoading} onClick={this.handleOk}>
                            TẠO NHÓM
                        </Button>,
                    ]}
                >
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.handleInputChange} placeholder="Tên nhóm chat" />

                    <h4 style={{marginTop:'10px', marginBottom:'10px'}}>Mời Bạn bè vào trò chuyện</h4>

                    <Select
                        size="large"
                        mode="multiple"
                        onChange={this.handleChange}
                        style={{ width: '100%' }}
                    >
                        {children}
                    </Select>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.userReducer.username);
    return {
        websocket: state.socketReducer.websocket,
    }
}
export default connect(
    mapStateToProps
)(HeaderRightSide);