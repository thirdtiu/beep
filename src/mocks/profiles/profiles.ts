import { Profile } from '../../models/profile/profile.interface';

const userList: Profile[] = [
    {firstName: 'Paul',lastName: 'George',email: 'paul@gmail.com',avatar: 'assets/img/avatar.png', dateOfBirth: new Date()},
    {firstName: 'John',lastName: 'Kennedy',email: 'john@gmail.com',avatar: 'assets/img/avatar.png', dateOfBirth: new Date()},
    {firstName: 'Sarah',lastName: 'Smith',email: 'sarah@gmail.com',avatar: 'assets/img/avatar.png', dateOfBirth: new Date()}
];

export const USER_LIST = userList;