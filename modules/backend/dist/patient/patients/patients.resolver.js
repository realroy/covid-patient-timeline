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
const common_1 = require("@nestjs/common");
const type_graphql_1 = require("type-graphql");
const patients_repository_1 = require("./patients.repository");
let PatientsResolver = class PatientsResolver {
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }
    async getMany() {
        return this.patientRepository.getMany();
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatientsResolver.prototype, "getMany", null);
PatientsResolver = __decorate([
    (0, common_1.Injectable)(),
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [patients_repository_1.PatientsRepository])
], PatientsResolver);
exports.default = PatientsResolver;
//# sourceMappingURL=patients.resolver.js.map