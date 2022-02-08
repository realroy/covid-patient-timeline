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
exports.PatientsResolver = void 0;
const common_1 = require("@nestjs/common");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("@generated/type-graphql");
const patients_service_1 = require("./patients.service");
const types_1 = require("./types");
let PatientsResolver = class PatientsResolver {
    constructor(patientsService) {
        this.patientsService = patientsService;
    }
    async patients() {
        return this.patientsService.getMany();
    }
    async patient(id) {
        return this.patientsService.getOneById(id);
    }
    async addPatient(data) {
        return this.patientsService.create({
            gender: data.gender,
            age: data.age,
            occupation: data.occupation,
        });
    }
    async updatePatient(data) {
        return this.patientsService.updateById(data.id, data);
    }
    async deletePatient(id) {
        return this.patientsService.deleteById(id);
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => [type_graphql_2.Patience]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatientsResolver.prototype, "patients", null);
__decorate([
    (0, type_graphql_1.Query)((returns) => type_graphql_2.Patience),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientsResolver.prototype, "patient", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => type_graphql_2.Patience),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.AddPatientInputType]),
    __metadata("design:returntype", Promise)
], PatientsResolver.prototype, "addPatient", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => type_graphql_2.Patience),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.UpdatePatientInputType]),
    __metadata("design:returntype", Promise)
], PatientsResolver.prototype, "updatePatient", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => type_graphql_2.Patience),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientsResolver.prototype, "deletePatient", null);
PatientsResolver = __decorate([
    (0, common_1.Injectable)(),
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [patients_service_1.PatientsService])
], PatientsResolver);
exports.PatientsResolver = PatientsResolver;
//# sourceMappingURL=patients.resolver.js.map