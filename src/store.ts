import { atomsWithQuery } from 'jotai-tanstack-query';
import { atom } from "jotai";
import Api from './common/utils/apiRoot';

// Creates a Jotai atom to hold the selected resource
export const selectedResourceAtom = atom("people");

// Creates a Jotai atom with query for fetching resources data
export const [resourcesDataAtom] = atomsWithQuery(() => ({
    queryKey: ['resourceData', ''],
    queryFn: async ({ queryKey: [,] }) => {
        const response = await Api().get('');
        // useSetAtom(selectedResourceAtom, response.data[0]);
        return response.data;
    },
}));

// Creates a Jotai atom with query for fetching resource based on selected resource type
export const [newDetailAtom, queryResourceAtom] = atomsWithQuery((get) => ({
    queryKey: ['resource', get(selectedResourceAtom)],
    queryFn: async ({ queryKey: [, type] }) => {
        const response = await Api().get(`/${type}`);
        return response.data;
    },
}));

