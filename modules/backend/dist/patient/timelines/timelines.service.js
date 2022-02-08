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
exports.TimelinesService = void 0;
const common_1 = require("@nestjs/common");
const patients_repository_1 = require("../patients/patients.repository");
const timelines_repository_1 = require("./timelines.repository");
let TimelinesService = class TimelinesService {
    constructor(timelineRepository, patientRepository) {
        this.timelineRepository = timelineRepository;
        this.patientRepository = patientRepository;
    }
    deleteById(id) {
        return this.timelineRepository.deleteById(id);
    }
    create(args) {
        return this.timelineRepository.create(args);
    }
    async getMany(args) {
        return this.timelineRepository.getMany(args);
    }
};
TimelinesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [timelines_repository_1.TimelineRepository, patients_repository_1.PatientsRepository])
], TimelinesService);
exports.TimelinesService = TimelinesService;
//# sourceMappingURL=timelines.service.js.map