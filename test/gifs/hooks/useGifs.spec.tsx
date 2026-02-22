import { describe, expect, test, vi } from "vitest";
import { act, renderHook } from '@testing-library/react';
import { useGifs } from '../../../src/gifs/hooks/useGifs';
import * as Actions from "../../../src/gifs/actions/get-gifs-by-query.action";

describe('useGifs', () => {
    test('should return default values and methods', () => {
        const {result} = renderHook(() => useGifs());
        expect(result.current.gifs.length).toBe(0);
        expect(result.current.previousTerms.length).toBe(0);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.handleTermClicked).toBeDefined();
    });
    test('should return a list of gifs', async () => {
        const {result} = renderHook(() => useGifs());
        //handleSearch
        await act(async() => {
            await result.current.handleSearch('Rage Against The Machine');
        });
        //console.log(result.current.gifs)
        expect(result.current.gifs.length).toBe(10);
    });
    test('should return a list of gifs when handleTermClicked is called', async () => {
        const {result} = renderHook(() => useGifs());
        /*await act(async() => {
            await result.current.handleSearch('Rage Against The Machine');
        });
        await act(async() => {
            await result.current.handleSearch('Slipknot');
        });*/
        await act(async() =>{
            await result.current.handleTermClicked('Rage Against The Machine')
        });
        expect(result.current.gifs.length).toBe(10);
        //expect(result.current.previousTerms.length).toBe(2);
        //expect(result.current.previousTerms[0]).toBe('rage against the machine');
    });
    test('should return a list of gifs from cache', async()=>{
        const {result} = renderHook(() => useGifs());
        
        vi.spyOn(Actions, 'getGifsByQuery')
        //.mockRejectedValue(new Error('This is my custom Error'));
        await act(async() =>{
            await result.current.handleTermClicked('Rage Against The Machine')
        });
        expect(result.current.gifs.length).toBe(10); 
    });

    test('should return no more than 5 previous terms', async()=>{
        const {result} = renderHook(() => useGifs());

        vi.spyOn(Actions, 'getGifsByQuery')
        .mockResolvedValue([]);
        
        await act(async() =>{
            await result.current.handleSearch('Rage Against The Machine')
        });
        await act(async() =>{
            await result.current.handleSearch('Metallica')
        });
        await act(async() =>{
            await result.current.handleSearch('Nirvana')
        });
        await act(async() =>{
            await result.current.handleSearch('Pantera')
        });
        await act(async() =>{
            await result.current.handleSearch('Black Sabbath')
        });
        await act(async() =>{
            await result.current.handleSearch('Slipknot')
        });
        expect(result.current.previousTerms.length).toBe(5); 
        expect(result.current.previousTerms).toStrictEqual([
            'metallica'
            ,'nirvana'
            ,'pantera'
            ,'black sabbath'
            ,'slipknot'
        ]); 
    });
});