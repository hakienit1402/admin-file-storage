import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_2.png',
    email: 'ahihidongoc@gmail.com',
    name: 'Nguyễn Hình Loi',
    roles: ['ROLE_USER'],
    status: 1
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_1.png',
    email: 'kiengaga@gmail.com',
    name: 'Ha Ngoc Kien',
    roles: ['ROLE_USER'],
    status: 0
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_3.png',
    email: 'thanhtri100898@gmail.com',
    name: 'Võ Thanh Trí',
    roles: ['ROLE_USER','ROLE_ADMIN'],
    status: 1
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_4.png',
    email: 'tritri@gmail.com',
    name: 'Trí đây',
    roles: ['ROLE_USER'],
    status: 1
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_5.png',
    email: 'vy123@gmail.com',
    name: 'Vy Vy',
    roles: ['ROLE_USER'],
    status: 1
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_6.png',
    email: 'yeuquai1222@gmail.com',
    name: 'Yêu Quái',
    roles: ['ROLE_ADMIN'],
    status: 1
  },
];
