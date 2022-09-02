import { Users } from '../../auth/entity/user.entity';
import { Products } from '../../products/product.entity/product.entity';
import { Entity, OneToMany, JoinColumn, OneToOne, Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class OrderEntity {
   @PrimaryGeneratedColumn('uuid')
   id: number

   @OneToMany(type => Products, item => item.id)
   items: Products[];

   @OneToOne(type => Users, user => user.username)
   @JoinColumn()
   user : Users;

   @Column()
   subTotal: number

   @Column({ default: false })
   pending: boolean

}
