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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Login = exports.Login = class Login {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Object)
], Login.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { unique: false }),
    __metadata("design:type", Object)
], Login.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", Object)
], Login.prototype, "firebase_uid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", Object)
], Login.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean'),
    __metadata("design:type", Object)
], Login.prototype, "emailVerified", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", Object)
], Login.prototype, "accessToken", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], Login.prototype, "accessInfo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Object)
], Login.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Object)
], Login.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Object)
], Login.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.VersionColumn)(),
    __metadata("design:type", Object)
], Login.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.logins),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", Object)
], Login.prototype, "user", void 0);
exports.Login = Login = __decorate([
    (0, typeorm_1.Entity)('logins')
], Login);
