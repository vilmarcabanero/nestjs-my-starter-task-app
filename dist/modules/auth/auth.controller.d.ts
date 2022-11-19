import { AuthService, LoginPayload } from '.';
import { RegisterPayload } from './register.payload';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(payload: RegisterPayload): Promise<object>;
    login(payload: LoginPayload): Promise<object>;
    getUser(user: any): Promise<any>;
}
