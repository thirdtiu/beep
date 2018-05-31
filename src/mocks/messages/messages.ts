import { Message } from '../../models/messages/message.interface';
import { USER_LIST } from '../users/users';

const userList = USER_LIST;

const messageList: Message[] = [
    { user: userList[0], date: new Date(), lastMessage: 'Well, what can i say.'},
    { user: userList[1], date: new Date(), lastMessage: 'Well, what can i say.'},
    { user: userList[2], date: new Date(), lastMessage: 'Well, what can i say.'},
]

export const MESSAGE_LIST = messageList;