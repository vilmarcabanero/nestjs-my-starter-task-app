"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const _1 = require(".");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(user, jwtService) {
        this.user = user;
        this.jwtService = jwtService;
    }
    async register(payload) {
        const { email, password } = payload;
        const found = await this.user.findOne({ email });
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        if (found) {
            throw new common_1.ConflictException('Email is already registered.');
        }
        const user = await new this.user(Object.assign(Object.assign({}, payload), { password: hashedPassword })).save();
        const tokenPayload = { _id: user._id };
        const accessToken = this.jwtService.sign(tokenPayload);
        return {
            accessToken,
            message: 'Register successful.',
        };
    }
    async login(payload) {
        const { email, password } = payload;
        const user = await this.user.findOne({ email });
        if (!user) {
            throw new common_1.UnauthorizedException('Email is not yet registered.');
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new common_1.UnauthorizedException('Password is incorrect.');
        }
        const tokenPayload = { _id: user._id };
        const accessToken = this.jwtService.sign(tokenPayload);
        return {
            accessToken,
            message: 'Login successful.',
        };
    }
    async getUser(_id) {
        return this.user.findById(_id, { password: 0 });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map