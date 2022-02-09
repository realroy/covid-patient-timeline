"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModule = void 0;
const common_1 = require("@nestjs/common");
const genders_resolver_1 = require("./genders/genders.resolver");
const location_types_resolver_1 = require("./location-types/location-types.resolver");
const patients_controller_1 = require("./patients/patients.controller");
const patients_repository_1 = require("./patients/patients.repository");
const patients_resolver_1 = require("./patients/patients.resolver");
const patients_service_1 = require("./patients/patients.service");
const timelines_controller_1 = require("./timelines/timelines.controller");
const timelines_repository_1 = require("./timelines/timelines.repository");
const timelines_resolver_1 = require("./timelines/timelines.resolver");
const timelines_service_1 = require("./timelines/timelines.service");
let PatientModule = class PatientModule {
};
PatientModule = __decorate([
    (0, common_1.Module)({
        controllers: [patients_controller_1.PatientsController, timelines_controller_1.TimelinesController],
        providers: [
            patients_service_1.PatientsService,
            patients_repository_1.PatientsRepository,
            timelines_service_1.TimelinesService,
            timelines_repository_1.TimelineRepository,
            patients_resolver_1.PatientsResolver,
            timelines_resolver_1.TimelinesResolver,
            location_types_resolver_1.LocationTypesResolver,
            genders_resolver_1.GendersResolver
        ],
    })
], PatientModule);
exports.PatientModule = PatientModule;
//# sourceMappingURL=patient.module.js.map