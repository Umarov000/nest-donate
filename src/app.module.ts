import { Module } from "@nestjs/common";
import { AdminsModule } from "./admins/admins.module";
import { CategoriesModule } from "./categories/categories.module";
import { SocialModule } from "./social/social.module";
import { CourierModule } from "./courier/courier.module";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";

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
      models: [],
      autoLoadModels: true,
      logging: false,
      sync: { alter: true }, //force
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
