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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Login_1 = require("./Login");
const Log_1 = require("./Log");
let User = exports.User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", Object)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", Object)
], User.prototype, "firebase_uid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", Object)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", Object)
], User.prototype, "social_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", Object)
], User.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", Object)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", Object)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: false }),
    __metadata("design:type", Object)
], User.prototype, "birth", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Object)
], User.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Object)
], User.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Object)
], User.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.VersionColumn)(),
    __metadata("design:type", Object)
], User.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Login_1.Login, login => login.user),
    __metadata("design:type", Object)
], User.prototype, "logins", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Log_1.Log, log => log.user),
    __metadata("design:type", Object)
], User.prototype, "logs", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
