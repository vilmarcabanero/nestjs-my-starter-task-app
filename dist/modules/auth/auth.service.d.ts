import { Model } from 'mongoose';
import { User, UserDocument, RegisterPayload, LoginPayload } from '.';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private user;
    private jwtService;
    constructor(user: Model<UserDocument>, jwtService: JwtService);
    register(payload: RegisterPayload): Promise<object>;
    login(payload: LoginPayload): Promise<object>;
    getUser(_id: string): Promise<User>;
}
