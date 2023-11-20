import { IconType } from "react-icons";

export type ChildrenType = { children: React.ReactNode };

export type LinkObjType = {
    title: string;
    path: string;
    icon: IconType;
};

type ListType = {
    title: string;
    path: string;
    icon: IconType;
}

export type SidebarType = {
    title: string;
    list: ListType[]
}

export type ChartDataType = {
    name: string;
    visit: number;
    click: number;
}

export type TransactionsDataType = {
    img: string;
    name: string;
    status: string;
    date: string;
    amount: string;
}

export type UserType = {
    _id?: string;
    userName: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    img: string;
    isAdmin: boolean;
    isActive: boolean;
    createdAt?: Date;
}

