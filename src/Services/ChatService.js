import axios from 'axios';

function getMessages(conversationId, index){
    return new Promise(function(resolve, reject) {
        axios.get(`http://localhost:8081/abc`)
            .then(res => {
                console.log(res.data);
            })
            .catch(error=>{
                console.log('error ',error);
                const allMessages = [
                    {
                        id: '1548752061',
                        message: [
                            {
                                id: "1",
                                sender: 'Nam',
                                type: 'sent',
                                message: "m"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "1"
                            }
                        ]
                    },
                    {
                        id: '1548749491',
                        message: [
                            {
                                id: "1",
                                sender: 'Linh',
                                type: 'sent',
                                message: "1"
                            },
                            {
                                id: "2",
                                sender: 'Nhung',
                                type: 'replies',
                                message: "2"
                            },
                            {
                                id: "3",
                                sender: 'Linh',
                                type: 'sent',
                                message: "3"
                            },
                            {
                                id: "4",
                                sender: 'Nhung',
                                type: 'replies',
                                message: "4"
                            },
                            {
                                id: "3",
                                sender: 'Nam',
                                type: 'sent',
                                message: "em ăn cơm vs gì?"
                            },
                            {
                                id: "4",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "Cá"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "2"
                            }
                        ]
                    },
                    {
                        id: '8',
                        message: [
                            {
                                id: "1",
                                sender: 'John',
                                type: 'sent',
                                message: "hello"
                            },
                            {
                                id: "2",
                                sender: 'Mastin',
                                type: 'replies',
                                message: "Hi"
                            },
                            {
                                id: "3",
                                sender: 'John',
                                type: 'sent',
                                message: "How are u?"
                            },
                            {
                                id: "4",
                                sender: 'Mastin',
                                type: 'replies',
                                message: "i'm well, thank"
                            },
                            {
                                id: "3",
                                sender: 'Nam',
                                type: 'sent',
                                message: "em ăn cơm vs gì?"
                            },
                            {
                                id: "4",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "Cá"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "3"
                            }
                        ]
                    },
                    {
                        id: '11',
                        message: [
                            {
                                id: "1",
                                sender: 'Nam',
                                type: 'sent',
                                message: "Phương thức map() giúp tạo ra một mảng mới với các phần tử là kết quả từ việc thực th"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "hàm lên từng phần tử của mảng được gọi."
                            },
                            {
                                id: "3",
                                sender: 'Nam',
                                type: 'sent',
                                message: "Hàm để tạo ra phần tử cho mảng mới, nhận vào ba tham số:"
                            },
                            {
                                id: "4",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "Giá trị gán cho từ khóa this bên trong callback"
                            },
                            {
                                id: "3",
                                sender: 'Nam',
                                type: 'sent',
                                message: "em ăn cơm vs gì?"
                            },
                            {
                                id: "4",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "Cá"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "chào anh"
                            },
                            {
                                id: "2",
                                sender: 'BigBid',
                                type: 'replies',
                                message: "4"
                            }
                        ]
                    },
                ]
                const findA =(id)=> allMessages.filter((value)=>{
                    return value.id==id;
                });
                resolve(findA(conversationId)[0]);
            })
    });
}
function createChatRoom(chatRoom){
    console.log(JSON.stringify(chatRoom));
    // return new Promise(function(resolve, reject) {
    //     axios.get(`http://localhost:8081/abc`,
    //         chatRoom
    //         )
    //         .then(res => {
    //
    //         })
    //         .catch(error=>{
    //
    //         })
    // });
}
export const ChatService = {
    getMessages,
    createChatRoom,
};