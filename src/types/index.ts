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