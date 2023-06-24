import { atomsWithQuery } from 'jotai-tanstack-query';
import { atom } from "jotai";
import axios from 'axios';
import Api from './common/utils/apiRoot';

// Creates a Jotai atom to hold the selected resource
export const selectedResourceAtom = atom("");

// Creates a Jotai atom to hold the resource data
export const resourceAtom = atom([]);

// Creates a Jotai atom with query for fetching resources data
export const [resourcesDataAtom] = atomsWithQuery(() => ({
    queryKey: ['resourceData', ''],
    queryFn: async ({ queryKey: [,] }) => {
        const response = await Api().get('');
        return response.data;
    },
}));

// Creates a Jotai atom with query for fetching resource based on selected resource type
export const [, queryResourceAtom] = atomsWithQuery((get) => ({
    queryKey: ['resource', get(selectedResourceAtom)],
    queryFn: async ({ queryKey: [, type] }) => {
        console.log("type", type);
        const response = await Api().get(`/${type}`);
        return response.data;
    },
}));
