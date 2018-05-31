import { User } from '../../models/user/user.interface';

const userList: User[] = [
    {firstName: 'Paul',lastName: 'George',email: 'paul@gmail.com',avatar: 'assets/img/avatar.png'},
    {firstName: 'John',lastName: 'Kennedy',email: 'john@gmail.com',avatar: 'assets/img/avatar.png'},
    {firstName: 'Sarah',lastName: 'Smith',email: 'sarah@gmail.com',avatar: 'assets/img/avatar.png'}
];

export const USER_LIST = userList;