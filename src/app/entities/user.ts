import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name', length: '120' })
  name: string;

  @Column({ name: 'email', length: '120' })
  email: string;

  @Column({ name: 'number' })
  number: number;

  @Column({ name: 'birth_date' })
  birthDate: Date;

  @Column({ name: 'avatar' })
  avatar: string;

  @CreateDateColumn({
    name: 'created_at'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at'
  })
  updatedAt: Date
  
}
