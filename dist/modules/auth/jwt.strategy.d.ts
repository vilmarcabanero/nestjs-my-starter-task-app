import { Model } from 'mongoose';
import { Strategy } from 'passport-jwt';
import { JwtPayload, User, UserDocument } from '.';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private user;
    constructor(user: Model<UserDocument>);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
