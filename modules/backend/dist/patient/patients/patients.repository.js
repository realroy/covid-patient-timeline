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
exports.PatientsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PatientsRepository = class PatientsRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getMany() {
        return this.prismaService.patience.findMany({ orderBy: { createdAt: 'asc' } });
    }
    getOneById(id) {
        return this.prismaService.patience.findFirst({ where: { id } });
    }
    async create(data) {
        return this.prismaService.patience.create({
            data,
        });
    }
    async count() {
        return this.prismaService.patience.count();
    }
    async isExist(options) {
        const select = Object.keys(options).reduce((prev, key) => (Object.assign(Object.assign({}, prev), { [key]: true })), {});
        return this.prismaService.patience.findFirst({
            select,
            where: options,
            rejectOnNotFound: true,
        });
    }
    updateById(id, data) {
        return this.prismaService.patience.update({ where: { id }, data });
    }
    deleteById(id) {
        return this.prismaService.patience.delete({ where: { id } });
    }
};
PatientsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PatientsRepository);
exports.PatientsRepository = PatientsRepository;
//# sourceMappingURL=patients.repository.js.map