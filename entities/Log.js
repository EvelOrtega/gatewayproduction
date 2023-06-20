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
exports.Log = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Log = exports.Log = class Log {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", Object)
], Log.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { unique: false }),
    __metadata("design:type", Object)
], Log.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "customerInfo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "requestInfo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Object)
], Log.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Object)
], Log.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Object)
], Log.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.VersionColumn)(),
    __metadata("design:type", Object)
], Log.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.logs),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", Object)
], Log.prototype, "user", void 0);
exports.Log = Log = __decorate([
    (0, typeorm_1.Entity)('logs')
], Log);
