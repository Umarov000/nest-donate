import { Injectable } from "@nestjs/common";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { UpdateNotificationDto } from "./dto/update-notification.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Notification } from "./models/notification.model";

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification) private notificationModel: typeof Notification
  ) {}
  async create(createNotificationDto: CreateNotificationDto) {
    return await this.notificationModel.create(createNotificationDto);
  }

  findAll() {
    return this.notificationModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.notificationModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    const updatedNot = await this.notificationModel.update(
      updateNotificationDto,
      {
        where: { id },
        returning: true,
      }
    );
    return updatedNot[1][0];
  }

  async remove(id: number) {
    const res = await this.notificationModel.destroy({ where: { id } });
    if (res > 0) {
      return `${id} - Notification ochirildi`;
    }
    return `${id}-Bunday Notification mavjud emas`;
  }
}
