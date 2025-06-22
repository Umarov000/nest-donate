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
import { DonationModule } from "./donation/donation.module";
import { NotificationModule } from "./notification/notification.module";
import { CreatorSocialModule } from "./creator-social/creator-social.module";
import { Notification } from "./notification/models/notification.model";
import { Donation } from "./donation/models/donation.model";
import { CreatorSocial } from "./creator-social/models/creator-social.model";
import { RolesModule } from "./roles/roles.module";
import { AdminRoleModule } from "./admin-role/admin-role.module";
import { AdminRole } from "./admin-role/models/admin-role.model";
import { Role } from "./roles/models/role.model";
import { ProductsModule } from './products/products.module';
import { ProductsImagesModule } from './products_images/products_images.module';
import { Product } from "./products/models/product.model";
import { ProductsImage } from "./products_images/models/products_image.model";

@Module({
  imports: [
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
      models: [
        Social,
        Admin,
        Category,
        Courier,
        User,
        Notification,
        Donation,
        CreatorSocial,
        AdminRole,
        Role,
        Product,
        ProductsImage
      ],
      autoLoadModels: true,
      logging: false,
      sync: { alter: true }, //force
    }),
    AdminsModule,
    CategoriesModule,
    SocialModule,
    CourierModule,
    UsersModule,
    DonationModule,
    NotificationModule,
    CreatorSocialModule,
    RolesModule,
    AdminRoleModule,
    ProductsModule,
    ProductsImagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
