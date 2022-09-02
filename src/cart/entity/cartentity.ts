import { Users } from '../../auth/entity/user.entity'
import { Products } from '../../products/product.entity/product.entity'
import { Entity, OneToOne,ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class CartEntity {
   @PrimaryGeneratedColumn('uuid')
   id: number

   @Column()
   total: number

   @Column()
   quantity: number
  
   @ManyToOne(type => Products, order => order.id)
   @JoinColumn()
   item: Products
   @ManyToOne(type => Users, user => user.username)
   @JoinColumn()
   user: Users
}
