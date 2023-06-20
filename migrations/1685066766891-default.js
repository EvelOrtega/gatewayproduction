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
exports.Default1685066766891 = void 0;
class Default1685066766891 {
    constructor() {
        this.name = 'Default1685066766891';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "deletedDate" TIMESTAMP, "version" integer NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "deletedDate" TIMESTAMP, "version" integer NOT NULL, "role_id" uuid, CONSTRAINT "REL_a2cecd1a3531c0b041e29ba46e" UNIQUE ("role_id"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1"`);
            yield queryRunner.query(`DROP TABLE "users"`);
            yield queryRunner.query(`DROP TABLE "roles"`);
        });
    }
}
exports.Default1685066766891 = Default1685066766891;
