import { Package } from '../api';
import { ServiceOptions } from '../types';
import { Stream } from 'stream';
export default class {
    private service;
    private basePath;
    private baseOptions;
    constructor(basePath: string, baseOptions: ServiceOptions);
    ast(query: string): Promise<Package | undefined>;
    execute(orgID: string, query: string, extern?: File): {
        stream: Stream;
        cancel: () => void;
    };
}
