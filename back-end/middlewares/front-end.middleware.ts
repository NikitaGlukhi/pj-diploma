import { Injectable, NestMiddleware } from '@nestjs/common';

import * as path from 'path';
const allowedExt = ['.js', '.ico', '.css'];

const resolvePath = (file: string) => path.resolve(`./dist/front-end/${file}`);

@Injectable()
export class FrontEndMiddleware implements NestMiddleware {
    resolve(...args: any[]) {
        return (req, res, next) => {
            const { url } = req;
            if (url.indexOf('repositories') === 1) {
                next();
            } else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
                res.sendFile(resolvePath(url));
            } else {
                res.sendFile(resolvePath('index.html'));
            }
        };
    }
}
