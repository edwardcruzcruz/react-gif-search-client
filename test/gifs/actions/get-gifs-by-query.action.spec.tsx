import { beforeEach, describe, expect, test, vi } from "vitest";
import { getGifsByQuery } from '../../../src/gifs/actions/get-gifs-by-query.action';
import AxiosMockAdapter from "axios-mock-adapter";
import { giphyApi } from "../../../src/gifs/api/giphy.api";
import { giphySearchResponseMock } from "../../mock-data/gifs.mock";

describe('getGifsByQuery', () => {
    let mock = new AxiosMockAdapter(giphyApi);
    beforeEach( () => {
        // mock.reset()
        mock = new AxiosMockAdapter(giphyApi);
    })
    /*test('should return a list of gifs', async () => {
        const gifs = await getGifsByQuery('goku');
        //console.log(gifs);
        expect(gifs.length).toBe(10);
        const [gif1] = gifs;
        expect(gif1).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
            width: expect.any(Number),
            height: expect.any(Number)
        });
    });*/
    test('should return a list of gifs', async () => {
        mock.onGet('/search').reply(200,giphySearchResponseMock);

        const gifs = await getGifsByQuery('goku');

        //console.log(gifs);
        
        expect(gifs.length).toBe(10);

        gifs.forEach((gif) => {
            expect(typeof gif.id).toBe('string')
            expect(typeof gif.title).toBe('string')
            expect(typeof gif.url).toBe('string')
            expect(typeof gif.width).toBe('number')
            expect(typeof gif.height).toBe('number')
        });

    });
    test('should return an empty list of gifs if query is empty', async () => {
        //mock.onGet('/search').reply(200,giphySearchResponseMock);
        mock.restore();
        const gifs = await getGifsByQuery('');

        //console.log(gifs);
        
        expect(gifs.length).toBe(0);

    });

    test('should handle error when the API returns an error', async () => {
        //mock.restore();
        const consoleErrSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {});
        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Request'
            }
        })
        const gifs = await getGifsByQuery('Rage');
        expect(gifs.length).toBe(0);
        expect(consoleErrSpy).toHaveBeenCalled()
        expect(consoleErrSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrSpy).toHaveBeenCalledWith(expect.anything());
        console.log(consoleErrSpy);
    });
});