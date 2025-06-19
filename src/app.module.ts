import { Module } from "@nestjs/common";
import { AdminsModule } from "./admins/admins.module";
import { CategoriesModule } from "./categories/categories.module";
import { SocialModule } from "./social/social.module";
import { CourierModule } from "./courier/courier.module";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { Social } from "./social/models/social.model";
import { Admin } from "./admins/models/admin.model";
import { Category } from "./categories/models/category.model";
import { Courier } from "./courier/models/courier.model";
import { User } from "./users/models/user.model";
import { DonationModule } from './donation/donation.module';
import { NotificationModule } from './notification/notification.module';
import { CreatorSocialModule } from './creator-social/creator-social.module';

@Module({
  imports: [
    AdminsModule,
    CategoriesModule,
    SocialModule,
    CourierModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [Social, Admin, Category, Courier, User, ],
      autoLoadModels: true,
      logging: false,
      sync: { alter: true }, //force
    }),
    UsersModule,
    DonationModule,
    NotificationModule,
    CreatorSocialModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
