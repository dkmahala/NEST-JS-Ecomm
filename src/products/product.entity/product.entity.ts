import { CartEntity } from '../../cart/entity/cartentity'
import { Entity, JoinColumn, OneToMany, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class Products {
   @PrimaryGeneratedColumn("uuid")
   id!: number

   @Column()
   name: string

   @Column()
   price: number

   @Column()
   quantity: string

   @CreateDateColumn()
   createdAt: String

   @UpdateDateColumn()
   updtedAt: String

   // @OneToMany(type => CartEntity, cart => cart.id)
   // @JoinColumn()
   // cart: CartEntity[]
}