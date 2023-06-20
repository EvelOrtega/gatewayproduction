"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default1685077843509 = void 0;
class Default1685077843509 {
    constructor() {
        this.name = 'Default1685077843509';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "logs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "clientinfo" json, "methodinfo" json, "action" json, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "deletedDate" TIMESTAMP, "version" integer NOT NULL, CONSTRAINT "PK_fb1b805f2f7795de79fa69340ba" PRIMARY KEY ("id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "logs"`);
        });
    }
}
exports.Default1685077843509 = Default1685077843509;
