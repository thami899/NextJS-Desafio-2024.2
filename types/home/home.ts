// model Product {
//     id          Int       @id @default(autoincrement())
//     title        String
//     description String?
//     price       Float
//     createdAt   DateTime  @default(now())
//   }
export type Crypto={
    id:number;
    title:string;
    description:string |null;
    price:number;
}