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
exports.PatientsService = void 0;
const common_1 = require("@nestjs/common");
const patients_repository_1 = require("./patients.repository");
let PatientsService = class PatientsService {
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }
    async getMany() {
        return this.patientRepository.getMany();
    }
    getOneById(id) {
        return this.patientRepository.getOneById(id);
    }
    async create(data) {
        const count = await this.patientRepository.count();
        if (count >= 8) {
            throw new Error('patients reached limit');
        }
        return this.patientRepository.create(data);
    }
    async isExist(options) {
        return this.patientRepository.isExist(options);
    }
    async updateById(id, data) {
        return this.patientRepository.updateById(id, data);
    }
    async deleteById(id) {
        return this.patientRepository.deleteById(id);
    }
};
PatientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [patients_repository_1.PatientsRepository])
], PatientsService);
exports.PatientsService = PatientsService;
//# sourceMappingURL=patients.service.js.map