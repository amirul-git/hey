import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    return await this.postRepository.save(createPostDto);
  }

  async findAll() {
    console.log('object mir');
    return await this.postRepository.find();
  }

  async findOne(id: number) {
    return await this.postRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const toUpdate = await this.postRepository.findOne({ where: { id: id } });

    const updated = Object.assign(toUpdate, updatePostDto);
    return await this.postRepository.save(updated);
  }

  async remove(id: number) {
    return await this.postRepository.delete(id);
  }
}
