import { ComponentType } from 'react';
export interface Heading {
    depth: number;
    slug: string;
    value: string;
}
export interface Entry {
    id: string;
    filepath: string;
    slug: string;
    route: string;
    name: string;
    order: number;
    menu: string | null;
    headings: Heading[];
    [key: string]: any;
}
export interface MenuItem {
    id: string;
    name: string;
    route?: string;
    href?: string;
    menu?: MenuItem[];
    order?: number;
    parent?: string;
}
export declare type ThemeConfig = Record<string, any>;
export interface Config {
    title: string;
    description: string;
    themeConfig: ThemeConfig;
    menu: MenuItem[];
    version: string | null;
    repository: string | null;
    native: boolean;
    separator: string;
    codeSandbox: boolean;
    base?: string;
}
export declare type Entries = {
    key: string;
    value: Entry;
}[];
export declare type Props = {
    key: string;
    value: any;
}[];
export declare type TransformFn = (config: ThemeConfig) => ThemeConfig;
export interface Database {
    config: Config;
    props?: Props;
    entries?: Entries;
}
export interface DoczState extends Database {
    linkComponent: ComponentType<any>;
    themeConfig?: ThemeConfig;
    transform?: TransformFn;
}
export declare const doczState: import("./utils/createState").State<DoczState>;
